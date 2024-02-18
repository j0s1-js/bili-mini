import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import VideoContainer from '@/components/VideoContainer.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/video/:id', component: VideoContainer}
    ]
})

export default router