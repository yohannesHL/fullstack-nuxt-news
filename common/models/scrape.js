'use strict';
const scraper = require('../../controllers/scraper')
const app = require('../../server/server');
module.exports = function(Scrape) {


  Scrape.run = function (sourceUrls, cb){
    const SourcesModel = app.models.sources;
    const NewsModel = app.models.news;

    const scrape = (err, sourceItems) => {
      scraper.runScraper(sourceItems, NewsModel, cb);
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
