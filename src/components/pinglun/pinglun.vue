<template>
  <div class="box">
    <h4>发表评论</h4>
    <hr />
    {{content}}
    <textarea
      v-model="content"
      class="txt"
      placeholder="请输入要BB的内容(最多BB120个字)"
      maxlength="120"
    ></textarea>
    <!-- <mt-button type='primary' size='large'>发表评论</mt-button> -->
    <button @click="addpl">发表评论</button>

    <div class="list" v-for="(item,index) in pl" :key="index">
      <div class="item">
        <div class="title">
          <p>第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|datefrom}}</p>
        </div>
        <div class="mybody">{{item.content}}</div>
      </div>
    </div>
    <button @click="btn">加载更多</button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // 评论数据源
      pl: [],
      // 评论页数
      pagenum: 1,
      // 评论内容
      content: ""
    };
  },
  methods: {
    // 获取评论数据
    getcomten() {
      this.$http({
        method: "get",
        url: `http://127.0.0.1:8888/api/getcomments/${this.id}?pageindex=${this.pagenum}`
      }).then(res => {
        console.log(res);
        // let {message} = res.data;
        if (res.data.message.length == 0) {
          Toast("无更多评论");
        } else {
          if (res.data.status == 0) {
            // 拼接评论concat
            this.pl = this.pl.concat(res.data.message);
          }
        }
      });
    },
    // 加载更多评论
    btn() {
      this.pagenum = this.pagenum + 1;
      this.getcomten();
    },
    // 发表评论
    addpl() {
      this.$http({
        method: "post",
        url: `http://127.0.0.1:8888/api/postcomment/${this.id}`,
        data: {
          content: this.content
        }
      }).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.getcomten();
  },
  // 接受父组件的id
  props: ["id"]
};
</script>

<style>
.box {
  margin-bottom: 50px;
}
.txt {
  margin: 0;
  height: 100px;
  font-size: 14px;
}
.title {
  background-color: #ccc;
}
.title p {
  line-height: 30px;
  color: red;
}
.list {
  margin-top: -10px;
}
.mybody {
  text-indent: 1em;
  font-size: 14px;
}
</style>
