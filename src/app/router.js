'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  app.get('/api/get/articleList.do', app.controller.article.list)
};
