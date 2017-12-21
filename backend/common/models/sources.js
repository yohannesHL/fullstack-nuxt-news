'use strict';
const scraper = require('../../controllers/scraper')
var app = require('../../server/server');
module.exports = function(Sources) {

  Sources.afterRemote('create', function(ctx, source, next) {
    const NewsModel = app.models.news;

    scraper.runScraper([].concat(ctx.args.data), NewsModel)
    next()
  })
};
