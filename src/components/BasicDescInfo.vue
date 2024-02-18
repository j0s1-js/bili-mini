<template>
    <div>
        <!-- 视频简介 -->
        <div class="basic-desc-info" :style="{ height: active ? 'auto' : '84px' }" ref="descInfo">
            <span class="desc-info-text">点个赞吧</span>
        </div>
        <!-- 展开收起按钮 -->
        <div class="toggle-btn" v-if="descInfoHeight > 72">
            <span class="toggle-btn-text" @click="toggleHeight">{{ content }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: true,
            content: '收起',
            descInfoHeight: 72
        }
    },
    methods: {
        toggleHeight() {
            this.active = !this.active;
            this.content = this.active ? '收起' : '展开更多';
        }
    },
    mounted() {
        this.descInfoHeight = this.$refs.descInfo.offsetHeight;
    }
}
</script>

<style>
.basic-desc-info {
    white-space: pre-line;
    letter-spacing: 0;
    color: #18191C;
    font-size: 15px;
    line-height: 24px;
    overflow: hidden;
}

.toggle-btn {
    margin-top: 10px;
    font-size: 13px;
    line-height: 18px;
}

.toggle-btn-text {
    cursor: pointer;
    color: #61666D;
}

.toggle-btn :hover {
    color: #1890ff;
}
</style>