import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [],
    taxonomy: []
  },
  mutations: {
    setPages(state, payload){
      Vue.set(state, "pages", payload);
    },
    setTaxonomy(state, payload){
      Vue.set(state, "taxonomy", payload);
    }
  },
  actions: {
    getPages(store, payload){
      const url = "http://localhost:8080/search";
      axios.post(url, payload).then(res => {
          store.commit("setPages", res.data);
      }).catch(error => {
          console.log(error)
      });
    },

    getTaxonomy(store, payload){
      const url = "http://localhost:8080/taxonomy";
      axios.get(url).then(res => {
        console.log("taxonomy : ", res.length);
        store.commit("setTaxonomy", res.data);
      }).catch(error => {
        console.log(error)
      });
    }
  },
  modules: {
  }
})