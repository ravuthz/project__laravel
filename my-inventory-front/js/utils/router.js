import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/pages/Home";
import CustomerPage from "../components/pages/customers/CustomerPage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/customer',
        name: 'customer',
        component: CustomerPage
    },
];

const router = new VueRouter({
    history: true,
    mode: "history",
    routes
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.auth)) {
//         if (localStorage.getItem('jwt') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('user'))
//             if (to.matched.some(record => record.meta.is_admin)) {
//                 if (user.is_admin == 1) {
//                     next()
//                 }
//                 else {
//                     next({ name: 'userboard' })
//                 }
//             } else {
//                 next()
//             }
//         }
//     } else {
//         next()
//     }
// })

export default router;
