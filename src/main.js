import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCurrencyInput from 'vue-currency-input'

Vue.use(VueCurrencyInput)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/** Vue Filters Start */
Vue.filter('truncate', function (text, length, suffix) {
  if (text.length > length) {
      return text.substring(0, length) + suffix;
  } else {
      return text;
  }
});
/** Vue Filters End */