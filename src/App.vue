<template>
  <div id="app">
    <!-- 头部固定条 -->
    <div class="myheard">
      <mt-header fixed title="新闻大爆炸"></mt-header>
    </div>
    <transition>
      <router-view />
    </transition>
    <!-- 下导航 -->
    <nav class="mui-bar mui-bar-tab " id="mybottom">
      <router-link to="/home" class="mui-tab-item" href="#tabbar">
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
        <span class="mui-icon mui-icon-search"></span>
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
#app {
  overflow-x: hidden;
}
.myheard {
  margin-bottom: 40px;
}
#mybottom {
  /* margin-top: 50px; */
  /* padding-bottom: 50px; */
  
}
/* 图片从右边进来 */
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
/* 图片出去往左走 */
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
