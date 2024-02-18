<template>
    <div class="reply-list">
        <div class="reply-item" v-for="n in 3" :key="n">
            <RootReplyContainer></RootReplyContainer>
            <SubReplyContainer></SubReplyContainer>
        </div>
    </div>
</template>

<script>
import RootReplyContainer from '@/components/RootReplyContainer'
import SubReplyContainer from '@/components/SubReplyContainer'
export default {
    components: {
        RootReplyContainer,
        SubReplyContainer
    }
}
</script>

<style>
.reply-list {
    margin-top: 14px;
    padding-bottom: 100px;
}

.reply-item {
    position: relative;
}

</style>