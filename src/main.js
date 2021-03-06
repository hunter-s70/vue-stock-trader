// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.http.options.root = 'https://stock-trade-ee860.firebaseio.com/';

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  if (!value) return '';
  return value.toLocaleString();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
