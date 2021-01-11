import Vue from 'vue';
import App from './App.vue';
import Embed from 'v-video-embed';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;
Vue.use(Embed);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
