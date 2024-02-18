<template>
    <div class="video-desc-container">
        <!-- 视频简介 -->
        <div class="basic-desc-info" :style="{ height: active ? 'auto' : '84px' }" ref="descInfo">
            <span class="desc-info-text">直播间传送门 https://www.huya.com/229085 <br>
                平时直播时间中午十二点半到五点半 <br>
                （本集 三星狐狸 第1名）点个赞呗 <br>
                三银局</span>
        </div>
        <!-- 展开收起按钮 -->
        <div class="toggle-btn" v-if="descInfoHeight > 72">
            <span class="toggle-btn-text" @click="toggleHeight">{{ content }}</span>
        </div>
        <!-- 视频标签 -->
        <div class="video-tag-container">
            <div class="tag" v-for="n in 3" :key="n">
                <router-link to="#" class="tag-link">213</router-link>
            </div>
        </div>
        <!-- 视频评论 -->
        <div class="comment-container">
            <div class="reply-header">
                <ul class="nav-bar">
                    <li class="nav-title">
                        <span class="nav-title-text">评论</span>
                        <span class="total-reply">2</span>
                    </li>
                    <li class="nav-sort hot">
                        最热
                    </li>
                    <li class="part-symbol">
                    </li>
                    <li class="nav-sort time">
                        最新
                    </li>
                </ul>
            </div>


            <div class="main-reply-box">
                <div class="reply-box-avatar">
                    <el-avatar class="bili-avatar"
                        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                </div>

                <div class="reply-box-warp">
                    <textarea class="reply-box-textarea" placeholder="写个评论吧"></textarea>

                </div>

                <div class="replu-box-button">
                    <button class="reply-box-send">发布</button>
                </div>


            </div>

            <div class="reply-list">
                <div class="reply-item" v-for="n in 3" :key="n">
                    <div class="root-reply-container">
                        <div class="root-reply-avatar">
                            <el-avatar class="bili-avatar"
                                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                        </div>
                        <div class="content-warp">
                            <div class="user-info">
                                <div class="user-name">管理原</div>
                            </div>
                            <div class="root-reply">
                                <span class="reply-content-container">好评</span>
                                <div class="reply-info"></div>
                            </div>
                        </div>
                    </div>
                    <div class="sub-reply-container"></div>
                </div>
            </div>

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
.video-desc-container {
    margin: 16px 0;
}

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

.comment-container {
    margin-top: 24px;
}

.reply-header {
    margin-bottom: 22px;
}

.nav-title-text {
    font-size: 20px;
}

.total-reply {
    font-size: 13px;
    margin: 0 36px 0 6px;
    color: #9499a0;
}

.nav-bar {
    display: flex;
    align-items: center;
    list-style: none;
}

.nav-bar li {
    display: flex;
    align-items: center;
}

.nav-sort {
    color: #18191C;
    cursor: pointer;
}

.time {
    color: #9499a0;
}

.time:hover {
    color: #00aeec;
}

.part-symbol {
    height: 11px;
    margin: 0 12px;
    border-left: solid 1px;
}

.main-reply-box {
    display: flex;
    align-items: center;
}

.reply-box-avatar,
.root-reply-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 48px;
}

.bili-avatar {
    width: 48px;
    height: 48px;
}

.reply-box-warp {
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    cursor: text;
    overflow: hidden;
    position: relative;
    flex: 1;
    transition: .2s;
    border: 1px solid #E3E5E7;
    border-radius: 6px;
    background-color: #f1f2f3;
    overflow-x: hidden;
}

.reply-box-warp:hover {
    background-color: #fff;
}

.reply-box-textarea {
    padding: 0 8px;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 6px;
    background-color: transparent;
    font-family: inherit;
    font-size: 14px;
    line-height: 32px;
    color: #18191C;
    resize: none;
    outline: none;
}

.replu-box-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 48px;
}

.reply-box-send {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70px;
    height: 32px;
    line-height: 32px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    background-color: #7fd6f5;
    color: #fff;
}

.reply-box-send:hover {
    background-color: #00aeec;
}

.reply-list {
    margin-top: 14px;
    padding-bottom: 100px;


    border: 1px solid red;
}

.root-reply-container {
    display: flex;
    align-items: center;
    padding-top: 22px;
}

.user-info {
    font-size: 13px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
}

.user-name {
    font-weight: 500;
    margin-right: 5px;
    color: #61666D;
    cursor: pointer;
}

.root-reply {
    font-size: 15px;
    line-height: 24px;
    position: relative;
    padding: 2px 0;
}

.reply-content-container {

}
</style>