/*
* @Author: Marte
* @Date:   2018-01-24 10:20:24
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-24 11:18:13
*/
import apiServers from './servers'
export default {
  getMovieData({commit}) {
    return apiServers.getMovieHot()
  }
}
