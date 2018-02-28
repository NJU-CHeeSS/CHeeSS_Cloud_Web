import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import auth from './modules/auth'
import admin from './modules/admin'
import company from './modules/company'
import skill from './modules/skill'
import job from './modules/job'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    auth,
    admin,
    company,
    skill,
    job
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
