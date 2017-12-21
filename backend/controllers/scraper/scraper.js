const cheerio = require('cheerio');
const request = require('request');
const parsers = require('./parsers');

const saveData = function (NewsModel, items) {
  console.info('@scraper: saving Data:', typeof items, items[0])

  items.forEach((item) => {
    // console.info('create news item', item)
    NewsModel.create({
      url: item.url,
      header: item.header,
      body: item.body || '',
      site: item.site,
    }, (err, newsItem) => console.info('scraper created news item', newsItem, err))
  })
};

const scrapeData = (source) => {

  const _parse = parsers[source.name];

  return new Promise((resolve, reject) => {

    request.get(source.url, (err, request, body) => {

      // if (err) { reject(err); return }
      // console.info('Got Data:', body.slice(0, 200))
      const items = _parse(body);
      if (!items || items.length == 0) {

        console.info('@scrapeData: nodata')

        reject('nodata');
        return
      }
      resolve(items);

    });
  })
};

exports = module.exports = {
  /**
   * @params {Array} - list of source items to scrape
   *
   * @returns
   */
  runScraper: function (sourceItems, NewsModel) {

    sourceItems.forEach((source) => {

      scrapeData(source)
        .then(items => saveData(NewsModel, items))
        .catch(err => null)

    })
  }
}