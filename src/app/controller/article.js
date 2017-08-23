'use strict';

module.exports = app => {
    class ArticleController extends app.Controller {
        async list() {
            this.ctx.body = {
                status: 1,
                obj: [],
                msg: 'success'
            };
        }
    }
    return ArticleController;
};
