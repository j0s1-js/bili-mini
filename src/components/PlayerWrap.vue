<template>
  <video-player class="video-player vjs-custom-skin" ref="VideoPlayer" :playsinline="true"
    :options="playerOptions"></video-player>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {
        // 视频速度
        playbackRates: [0.5, 1, 1.5, 2],
        sources: [{
          src: '/video/' + this.id + '.mp4',
          type: 'video/mp4'
        }],
        // 视频封面
        // poster: 'images/1.jpg',
        // language: 'zh-CN',
        aspectRatio: '16:9',
        preload: 'auto',
        fluid: true,
        // 视频播放失败信息
        notSupportedMessage: '播放失败',
        controlBar: {
          // 显示当前时长与总时长分隔符
          timeDivider: true,
          // 显示总时长
          durationDisplay: true,
          // 显示剩余时长
          remainingTimeDisplay: false,
          // 显示全屏按钮
          fullscreenToggle: true
        }
      }
    }
  },
  props: ['id']
}
</script>

<style>
/*播放按钮设置成宽高一致，圆形，居中*/
.vjs-custom-skin>.video-js .vjs-big-play-button {
  outline: none;
  border: none;
  width: 66px;
  height: 66px !important;
  background-color: rgba(0, 0, 0, 0) !important;
}

/*进度条单独放置一行*/
.vjs-custom-skin>.video-js .vjs-progress-control.vjs-control {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 42px;
  width: 100%;
  height: 2px;
}

/* 全屏组件 */
.vjs-custom-skin>.video-js .vjs-control-bar .vjs-fullscreen-control {
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 20px;
  height: 20px;
}

/** 倍速 */
.vjs-custom-skin>.video-js .vjs-control-bar .vjs-playback-rate {
  position: absolute;
  right: 64px;
  bottom: 24px;
  width: 20px;
  height: 20px;
}
</style>