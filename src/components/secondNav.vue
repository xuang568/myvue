<style lang="scss">
  .secondNav{
    width: 200px;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    padding-top: 80px;
    border-right: 1px solid #d6dadb;
    a{
      color: #3b4142;
      text-decoration: none;
    }
    .navItem{
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      cursor: pointer;
    }
    .navItem:hover{
      background: #ecf2f3;
      color: #38b0c5;
    }
    .activeNav{
      background: #ecf2f3;
      a{
        color: #38b0c5;
      }
    }
  }
</style>
<template>
  <div class="secondNav">
    <div class="navItem" v-for="(item,index) in list[active.num]" v-bind:key="index" :class="{'activeNav': active.name === item.eName}">
      <router-link :to="item.link">{{item.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['active'],
  data () {
    return {
      list: [
        [
          {name: '◆ 用户管理', link: '/systemManage/user', eName: 'user'},
          {name: '◆ 角色管理', link: '/systemManage/role', eName: 'role'},
          {name: '◆ 资源管理', link: '/systemManage/resource', eName: 'resource'}
        ],
        [
          {name: '◆ 首次查询', link: '/preApproval/first', eName: 'first'},
          {name: '◆ 结果查询', link: '/preApproval/result', eName: 'result'}
        ],
        [{name: '◆ 预授信统计', link: '/charts/preChart', eName: 'preChart'}]
      ]
    }
  }
}
</script>
