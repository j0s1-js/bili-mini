<template>
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
</template>

<script>
export default {

}
</script>

<style>
.reply-header {
    margin-bottom: 22px;
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

.nav-title-text {
    font-size: 20px;
}

.total-reply {
    font-size: 13px;
    margin: 0 36px 0 6px;
    color: #9499a0;
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
</style>