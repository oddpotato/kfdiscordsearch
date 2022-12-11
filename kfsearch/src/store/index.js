import Vue from 'vue'
import Vuex from 'vuex'

import Whoosh from "./modules/whoosh";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Whoosh
  },
  plugins: [],
});

