import Vue from 'vue'
import VueRouter from 'vue-router'
import titleMixin from './mixins/titleMixin'
import App from './App'
import Home from './components/Home'
import About from './components/About'


Vue.mixin(titleMixin)
Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/about', 
        component: About 
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
}).$mount('#app')