import Home from "@/components/Pages/Home.vue";
import NotFound from "@/components/Pages/NotFound.vue";


export default [
    {
        path: '/',
        component: Home
    }, {
        path: '/boca-de-urna',
        component: NotFound
    }, {
        path: '/candidatos',
        component: NotFound
    }, {
        path: '*',
        component: NotFound
    },
]