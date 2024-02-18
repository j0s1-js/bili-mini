import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

import router from '@/router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VideoPlayer)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
