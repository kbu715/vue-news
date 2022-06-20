import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin'
import { router } from './routes/index'
import { store } from './store/index'

Vue.config.productionTip = false

Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
