import layout from './src/layout.vue';
import  VueRouter from 'vue-router';
import {routes} from './src/route';
Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

export default new Vue({
    router,
    render: h => h(layout),
    components: {
        layout
    }
}).$mount('#root');
