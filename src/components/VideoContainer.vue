<template>
    <div>
        <!-- <Header></Header> -->
        <div class="video-container">
            <div class="left-container">
                <!-- <VideoInfoContainer></VideoInfoContainer>
                <PlayerWrap :id="$route.params.id"></PlayerWrap>

                <VideoToolbarContainer></VideoToolbarContainer> -->

                <div class="left-container-under-player">
                    <VideoDescContainer></VideoDescContainer>
                </div>
            </div>
            <div class="right-container"></div>
        </div>
    </div>
</template>

<script>
// import Header from '@/components/Header'
// import VideoInfoContainer from '@/components/VideoInfoContainer'
// import PlayerWrap from '@/components/PlayerWrap'
// import VideoToolbarContainer from '@/components/VideoToolbarContainer'
import VideoDescContainer from '@/components/VideoDescContainer'

export default {
    components: {
        // Header,
        // VideoInfoContainer,
        // PlayerWrap,
        // VideoToolbarContainer,
        VideoDescContainer
    }
}
</script>

<style>
.video-container {
    padding: 0 6%;
    display: flex;
    min-width: 1024px;
}

.left-container {
    width: 70%;
    height: 500px;
}

.right-container {
    width: 350px;
    height: 500px;
    margin-left: 30px;
}
</style>