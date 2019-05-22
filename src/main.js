import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui';

import axios, { getTemp } from './axios/index'
Vue.use(Element);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
    render: h => h(App),
    router
}).$mount('#app')