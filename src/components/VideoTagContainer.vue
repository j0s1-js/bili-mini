<template>
  <!-- 视频标签 -->
  <div class="video-tag-container">
            <div class="tag" v-for="n in 3" :key="n">
                <router-link to="#" class="tag-link">原神</router-link>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.video-tag-container {
    padding-bottom: 6px;
    margin: 16px 0 20px 0;
    border-bottom: 1px solid #E3E5E7;
    display: flex;
}

.tag {
    margin: 0 12px 8px 0;
}

.tag-link {
    color: #61666d;
    background: #f1f2f3;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 13px;
    padding: 0 12px;
    box-sizing: border-box;
    transition: all .3s;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
</style>