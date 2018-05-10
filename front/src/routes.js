import Home from "@/components/Pages/Home/Home.vue";
import BocaDeUrna from "@/components/Pages/BocaDeUrna/BocaDeUrna.vue";
import NotFound from "@/components/Pages/NotFound.vue";


export default [
    {
        path: '/boca-de-urna',
        component: BocaDeUrna
    }, {
        path: '/candidatos',
        component: NotFound
    }, {
        path: '/',
        component: Home
    }, {
        path: '*',
        component: NotFound
    },
]