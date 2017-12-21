'use strict';
const scraper = require('../../controllers/scraper')
const app = require('../../server/server');
module.exports = function(Scrape) {


  Scrape.run = function (sourceUrls, cb){
    const SourcesModel = app.models.sources;
    const NewsModel = app.models.news;

    const scrape = (err, sourceItems) => {
      const sources = sourceItems.map((d) => d.url).join('\n') || 'None';
      console.info(err, sourceItems,arguments)
      scraper.runScraper(sourceItems, NewsModel);

      cb(null, `scraping news headlines from : ${sources}`);

    };

    if (sourceUrls && sourceUrls.length > 0) {


      const innerFilter = sourceUrls.map((url) => { url: url });

      SourcesModel.find({ where: { or: innerFilter } }, scrape);

    } else {
      const sourceItems = SourcesModel.find({}, scrape);

    }
  }

  Scrape.remoteMethod('run', {
    accepts: { arg: 'sourceUrls', type: 'array'},
    returns: { arg: 'response', type: 'string'}
  })
};
