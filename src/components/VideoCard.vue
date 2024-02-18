<template>
  <div class="video-card">
    <div class="video-card-cover">
      <router-link :to="'video/' + video.id">
        <img :src="'/images/' + video.cover">
      </router-link>
    </div>
    <div class="video-card-title">
      <router-link :to="'video/' + video.id">
        <h3>{{ video.title }}</h3>
      </router-link>
    </div>
    <div class="video-card-bottom">
      <router-link to="">
        <span>up</span>
        <span>{{ video.upName }}</span>
        <span>&nbsp;·&nbsp;{{ video.date }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: ['video']

}
</script>

<style>
.video-card {
  width: 237px;
  padding: 0 8px;
  margin-bottom: 40px;
  box-sizing: border-box;
  flex: 0 0 calc(20%);
}

.video-card-cover img {
  width: 100%;
  border-radius: 10px;
}

.video-card-title {
  margin-top: 10px;
  padding-right: 16px;
}

.video-card-title a {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #18191c;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.video-card-title h3 {
  font-size: 15px;
  font-weight: 500;
}

.video-card-bottom span {
  font-size: 13px;
}

.video-card-bottom a {
  color: #9499a0;
}
</style>