<template>
  <div>
    <Header></Header>
    <div class="home">
      <div class="search-input">
        <el-input 
          v-model="input" 
          placeholder="输入关键字搜索" 
          clearable 
          prefix-icon="el-icon-search">
          </el-input>
        <el-button type="primary">搜索</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="视频" name="first">
          <div class="search-conditions">
            <button class="active">最新发布</button>
            <button>最多播放</button>
          </div>
          <div class="video-list">
            <VideoCard v-for="video in videoList" :key="video.id" :video="video"></VideoCard>
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
export default {
  data() {
    return {
      input: '',
      activeName: 'first',
      videoList: [
        {
          id: 1,
          cover: '1.jpg',
          title: '原神抽卡',
          upName: '管理原',
          date: '2024-2-16'
        },
        {
          id: 2,
          cover: '2.jpg',
          title: '娜维娅1',
          upName: '管理原',
          date: '2024-2-15'
        },
        {
          id: 3,
          cover: '3.jpg',
          title: '娜维娅2',
          upName: '管理原',
          date: '2024-2-16'
        },
        {
          id: 4,
          cover: '4.jpg',
          title: '娜维娅3',
          upName: '管理原',
          date: '2024-2-13'
        },
        {
          id: 5,
          cover: '5.jpg',
          title: '芙宁娜1',
          upName: '管理原',
          date: '2024-2-11'
        },
        {
          id: 6,
          cover: '6.jpg',
          title: '芙宁娜2',
          upName: '管理原',
          date: '2024-2-9'
        }
      ]
    }
  },
  components: {
    Header,
    VideoCard
  }
  
}
</script>

<style>
.home {
  padding: 0 4%;
  min-width: 1024px;
}

.search-input {
  display: flex;
  width: 480px;
  margin: 25px auto 15px;
}

.search-conditions {
  margin: 8px 0 30px 8px;
}

.search-conditions button {
  border: 0px;
  height: 32px;
  margin-right: 10px;
  padding: 0 15px;
  background-color: #fff;
  color: #61666d;
  border-radius: 5px;
  cursor: pointer;
}

.search-conditions .active {
  background-color: #dff6fd;
  color: #00aeec;
}

.search-conditions button:hover {
  color: #00aeec;
}

.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>