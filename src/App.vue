<template>
  <div id="app">
    <!-- 头部固定条 -->
    <div class="myheard">
      <mt-header fixed title="新闻大爆炸"></mt-header>
    </div>
    <router-view />
    <!-- 下导航 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/vip" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact"></span>

        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/car" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.myheard {
  margin-bottom: 40px;
}
</style>
