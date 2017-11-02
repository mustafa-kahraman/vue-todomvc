import Vue from 'vue'
import Vuex from 'vuex';


import App from './App.vue'
import storeOptions from './store';

Vue.use(Vuex);

const store = new Vuex.Store(storeOptions);



new Vue({
  el: '#app',
  render: h => h(App),
  store
});
