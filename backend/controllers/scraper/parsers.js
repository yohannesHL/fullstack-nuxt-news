const cheerio = require('cheerio');
const request = require('request');

const ycombinatorParser = function (body) {
  const items = [];
  const $ = cheerio.load(body);

  $('.title').each((index, element) => {
    let el = $('.title a[href^="http"], a[href^="https"]', element);
    let site = $('.sitestr', element).text();

    items.push({
      url: el.attr('href'),
      header: el.text(),
      site: site,
      body: ''
    });
  });
  console.info('parsed result ', items)
  return items;
}

module.exports = {
  ycombinator: ycombinatorParser
}
