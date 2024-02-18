<template>
  <el-header>
      <el-row>
        <el-col :span="2">首页</el-col>
        <el-col :span="2">标签1</el-col>
        <el-col :span="2">标签2</el-col>
        <el-col :span="2">标签3</el-col>
        <el-col :offset="15" :span="1">
          <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        </el-col>
      </el-row>
    </el-header>
</template>

<script>
export default {

}
</script>

<style>
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #dddfe1;
  width: 100%;
  min-width: 1024px;
}

.el-avatar {
  vertical-align: middle;
}
</style>