import home from './containers/home.vue';
import post from './containers/post.vue';
export const routes = [
    {
        path: '/', component: home, name: 'home'
    },
    {
        path: '/post', name: 'post',component: post
    },
]