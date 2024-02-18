<template>
    <div class="video-desc-container">
        <!-- 视频简介 -->
        <BasicDescInfo></BasicDescInfo>

        <!-- 视频标签 -->
        <VideoTagContainer></VideoTagContainer>

        <!-- 视频评论 -->
        <CommentContainer></CommentContainer>
    </div>
</template>

<script>
import BasicDescInfo from '@/components/BasicDescInfo'
import VideoTagContainer from '@/components/VideoTagContainer'
import CommentContainer from '@/components/CommentContainer'
export default {
    components: {
        BasicDescInfo,
        VideoTagContainer,
        CommentContainer
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>

<style>
.video-desc-container {
    margin: 16px 0;
}
</style>