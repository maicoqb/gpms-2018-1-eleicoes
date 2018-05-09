import Home from "@/components/Pages/Home/Home.vue";
import NotFound from "@/components/Pages/NotFound.vue";


export default [
    {
        path: '/boca-de-urna',
        component: NotFound
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