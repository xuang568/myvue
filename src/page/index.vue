<style>
  .homeTitle{
    font-size: 20px;
    padding: 20px;
    color: #0f4049;
    font-weight: bold;
  }
  .homeItem{
    font-size: 15px;
    padding:2px 18px;
    color: #0f4049;
  }
  .homeItem span{
    color: #38b0c5;
    font-weight: bold;
    padding-right:10px;
  }
</style>
<template>
  <div class="contentBox">
    <Header :active="pageName"></Header>
    <div class="homeTitle">
      欢迎使用东正汽车金融预授信管理系统
    </div>
    <p class="homeItem"><span>▶</span>东正汽车金融预授信管理系统，包括客户预授信首次查询功能，历史授信结果查询功能，门店客户预售信统计信息等后续更多功能敬请期待。</p>
    <p class="homeItem"><span>▶</span>欢迎使用东正汽车金融预授信管理系统，软件使用中如遇问题，请联系管理员</p>
    <p class="homeItem"><span>▶</span>管理员邮箱：xuang@dongzhengafc.com</p>
    <p class="homeItem"><span>▶</span>谢谢配合！！！</p>
    <div class="article_list" v-if="false">
      <ul>
        <li v-for="i in list" :key="i.id">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components: {Header},
  data () {
    return {
      pageName: 'home',
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
<style>
  @import "../style/scss/index.scss";
</style>
