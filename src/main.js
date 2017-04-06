// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from '@/components/Header'
import resultBoard from '@/components/resultBoard'
import reportTable from '@/components/reportTable'
import router from './router'
import ElementUI from 'element-ui'
import '../theme/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Header.name, Header)
Vue.component(resultBoard.name, resultBoard)
Vue.component(reportTable.name, reportTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
