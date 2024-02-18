<template>
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
</template>

<script>
export default {

}
</script>

<style>
.main-reply-box {
    display: flex;
    align-items: center;
}

.reply-box-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
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
</style>