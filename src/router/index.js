import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home')
    }, {
        path: '/designProcess',
        name: 'DesignProcess',
        component: () => import('@/views/DesignProcess')
    }, {
        path: '/services',
        name: 'Services',
        component: () => import('@/views/Services')
    }, {
        path: '/ourWorks',
        name: 'OurWorks',
        component: () => import('@/views/OurWorks')
    }, {
        path: '/contactUs',
        name: 'ContactUs',
        component: () => import('@/views/ContactUs')
    }, {
        path: '*',
        redirect: '/home'
    }]
})