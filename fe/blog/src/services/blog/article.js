import {xhr} from '../xhr/request'

class ArticleServer {
  getArticleList (data) {
    return xhr('/get/articleList.do', {
      data
    })
  }
}

export default new ArticleServer()
