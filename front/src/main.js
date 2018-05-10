import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import VueTheMask from 'vue-the-mask';
import Toasted from 'vue-toasted';

import routes from "@/routes";

import App from "@/components/App.vue";

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueTheMask);
Vue.use(Toasted);


const router = new VueRouter({
    routes: [
        {
            path: '*', component: App,
            children: routes
        }
    ]
});

const app = new Vue({
    router
}).$mount('#app');

