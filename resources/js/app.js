require('./bootstrap');

window.Vue = require('vue');

//Vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './routes';




//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    routes, // short for `routes: routes`

})



const app = new Vue({
    el: '#app',

});
