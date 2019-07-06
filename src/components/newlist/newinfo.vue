<template>
  <div class="newinfo">
    <h3 class="title">{{newlist.title}}</h3>
    <p class="sub">
      <span>发布时间:{{newlist.add_time|datefrom}}</span>
      <span>点击:{{newlist.click}}次</span>
    </p>
    <hr />
    <div v-html="newlist.content"></div>
    <pinglun :id='this.id'></pinglun>
  </div>
</template>

<script>
// 引入评论组件
import pinglun from "../pinglun/pinglun";
export default {
  components: {
    pinglun
  },
  data() {
    return {
      // 获取页面id
      id: this.$route.params.id,
      // 新闻列表
      newlist: {}
    };
  },
  methods: {
    // 获取新闻方法
    getconten() {
      this.$http({
        method: "get",
        url: `http://127.0.0.1:8888/api/getnew/${this.id}`
      }).then(res => {
        // console.log(res);
        let { message } = res.data;
        if (status == 0) {
          this.newlist = message[0];
        }
      });
    }
  },
  mounted() {
    this.getconten();
  }
};
</script>

<style>
.newinfo {
  margin: 0 4px;
  overflow: hidden;
}
.newinfo .title {
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  color: red;
}
.newinfo .sub {
  font-size: 13px;
  color: green;
  display: flex;
  justify-content: space-between;
}
</style>
 