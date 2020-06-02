import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { VueTyper } from 'vue-typer';
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'



Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.component('vue-typer', VueTyper);


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


