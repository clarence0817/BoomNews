<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="(item,index) in newlist" :key="index" class="mui-table-view-cell mui-media">
        <router-link  :to="'/home/newinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" src="../../assets/img/timg.jpg" />
          <div class="mui-media-body">
            <p class="mui-ellipsis">{{item.zhaiyao}}</p>
            <div>
              <span style="float:left">发布时间:{{item.add_time | datefrom}}</span>
              <span style="float:right">点击:{{item.click}}次</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 新闻列表数据源
      newlist: []
    };
  },
  methods: {
    getnewlist() {
      this.$http({
        method: "get",
        url: "http://127.0.0.1:8888/api/getnewslist"
      }).then(res => {
        console.log(res);
        let { message, status } = res.data;
        if (status == 0) {
          this.newlist = message;
        }
      });
    }
  },
  mounted() {
    this.getnewlist();
  }
};
</script>

<style>
.mui-table-view p {
  font-size: 12px;
}
.mui-table-view span {
  color: blue;
  font-size: 12px;
}
.mui-table-view {
  margin-bottom: 50px;
}
</style>
