/*
* @Author: Marte
* @Date:   2018-01-24 10:18:17
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-24 10:53:25
*/

import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 20
    },
    getters,
    actions,
    mutations
  })
}
export default createStore
