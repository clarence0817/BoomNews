<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe class="my-swipe">
      <mt-swipe-item class="slide1">Slide1</mt-swipe-item>
      <mt-swipe-item class="slide2">Slide2</mt-swipe-item>
      <mt-swipe-item class="slide3">Slide3</mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格标签 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 icon">
        <router-link to="/home/newlist">
          <img src="../../assets/img/menu3.png" alt />
          <div class="mui-media-body">新闻资讯</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 icon">
        <router-link to="">
          <img src="../../assets/img/menu4.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 icon">
        <router-link to="">
          <img src="../../assets/img/menu5.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 icon">
        <router-link to="">
          <img src="../../assets/img/menu6.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 icon">
       <router-link to="">
          <img src="../../assets/img/menu9.png" alt />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 icon">
        <router-link to="">
          <img src="../../assets/img/menu10.png" alt />
          <div class="mui-media-body">联系我们</div>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
.slide2 {
  background-color: #ffd705;
  color: #000;
}
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
}

img {
  width: 60px;
  height: 60px;
}
 .icon{
  border: none !important; 
}

.mui-media-body{
  font-size: 12px !important;
}
</style>
