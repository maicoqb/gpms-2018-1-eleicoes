import Vue from 'vue'
import VueResource from 'vue-resource';
import App from '@/App.vue'
import 'vue-material/dist/vue-material.min.css'

// Vue.use(BootstrapVue)
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
});
