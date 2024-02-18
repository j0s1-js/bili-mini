<template>
    <!-- 视频评论 -->
    <div class="comment-container">
        <ReplyHeader></ReplyHeader>

        <MainReplyBox></MainReplyBox>

        <ReplyList></ReplyList>
    </div>
</template>

<script>
import ReplyHeader from '@/components/ReplyHeader'
import MainReplyBox from '@/components/MainReplyBox'
import ReplyList from '@/components/ReplyList'
export default {
    components: {
        ReplyHeader,
        MainReplyBox,
        ReplyList
    }
}
</script>

<style>
.comment-container {
    margin-top: 24px;
}
</style>