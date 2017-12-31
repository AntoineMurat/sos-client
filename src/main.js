// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fr from 'vee-validate/dist/locale/fr'
import VeeValidate, { Validator } from 'vee-validate'

// Install the Plugin.
Vue.use(VeeValidate)

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('fr', fr)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
