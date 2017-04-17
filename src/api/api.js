/**
 * Created by owen on 2017/4/6.
 */
import {HTTP} from './config'

export default {

  getList (type, page) {
    return HTTP.post('/getList', {
      type: type,
      page: page
    })
  },

  getDetail (id, content) {
    return HTTP.post('/getDetail', {
      id: id,
      content: content
    })
  }
}
