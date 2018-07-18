<style>
  .wrapper{
    height: 500px;
    width: 48%;
    float: left;
  }
  .chartBox{
    padding-top: 30px;
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="contentBox">
    <myHeader :active="pageName"></myHeader>
    <secondNav :active="secondNavData"></secondNav>
    <div class="content">
      <div class="selections">
        <div class="dzFormBox">
          <label for="first">时间</label>
          <select name="" id="first" class="dzSelect">
            <option value="">--请选择--</option>
            <option value="">近一周</option>
            <option value="">近一月</option>
            <option value="">近三月</option>
            <option value="">近半年</option>
          </select>
        </div>
        <div class="dzFormBox">
          <label for="second">门店号</label>
          <input type="text" id="second" placeholder="输入门店号" class="dzInput"/>
        </div>
      </div>
      <div class="chartBox">
        <schart class="wrapper" :canvasId="chartOne.canvasId" :type="chartOne.type" :data="chartOne.data" :options="chartOne.options"></schart>
        <schart class="wrapper" style="float: right;" :canvasId="chartTwo.canvasId" :type="chartTwo.type" :data="chartTwo.data" :options="chartTwo.options"></schart>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from '../../components/header.vue'
import secondNav from '../../components/secondNav.vue'
import Schart from 'vue-schart'
export default {
  components: {myHeader, secondNav, Schart},
  data () {
    return {
      pageName: 'charts',
      secondNavData: {
        name: 'preChart',
        num: 2
      },
      chartOne: {
        canvasId: 'myCanvas',
        type: 'bar',
        data: [
          {name: '2014', value: 1342},
          {name: '2015', value: 2123},
          {name: '2016', value: 1654},
          {name: '2017', value: 1795}
        ],
        options: {
          title: 'Total sales of stores in recent years',
          fillColor: '#38b0c5'
        }
      },
      chartTwo: {
        canvasId: 'myCanvasTwo',
        type: 'pie',
        data: [
          {name: '短袖', value: 1200},
          {name: '休闲裤', value: 1222},
          {name: '连衣裙', value: 1283},
          {name: '外套', value: 1314},
          {name: '羽绒服', value: 2314}
        ],
        options: {
          bgColor: '#ffffff', // 默认背景颜色
          title: '冬季服装销售类别饼图', // 图表标题
          titleColor: '#000000', // 图表标题颜色
          titlePosition: 'top', // 图表标题位置: top / bottom
          legendColor: '#000000', // 图例文本颜色
          legendTop: 40, // 图例距离顶部的长度
          colorList: ['#1E9FFF', '#13CE66', '#F7BA2A', '#FF4949', '#72f6ff'], // 饼图颜色列表
          radius: 100 // 饼图半径
        }
      }
    }
  }
}
</script>
