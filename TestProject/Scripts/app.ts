import Vue from 'vue';
import App from '../WebSite/index.vue';
import router from "./router";

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView, {
    size: 'small'
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});