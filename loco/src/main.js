import Vue from 'vue'
import App from './App.vue'
import "./scss/styles.scss"
import VueCarousel from 'vue-carousel';
import PortalVue from 'portal-vue';

Vue.use(PortalVue);
Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
