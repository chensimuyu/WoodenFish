import {xhr} from '../xhr/request'

class AccountServer {
  accountLogin (data) {
    return xhr('/post/accountLogin.do', {
      data
    })
  }
}

export default new AccountServer()
