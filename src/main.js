import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

// handtrack
import * as handTrack from 'handtrackjs';
Vue.use(handTrack)

new Vue({
  render: h => h(App),
}).$mount('#app')
