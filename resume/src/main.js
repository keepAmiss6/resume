import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Print from 'vue-print-nb'
Vue.use(Print);

// import printJS from 'print-js'
// Vue.prototype.$printJS = printJS

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
