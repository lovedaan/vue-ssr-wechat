/*
* @Author: Marte
* @Date:   2018-01-24 11:06:05
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-24 11:17:58
*/

import axios from 'axios'

class Servers {
  getMovieHot() {
    return axios.get('/api/movie')
  }
}
export default new Servers()
