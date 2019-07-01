import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import Element from 'element-ui'
// configure language
locale.use(lang);

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
