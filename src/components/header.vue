<style lang="scss">
  header{
    position: fixed;
    height: 80px;
    background: #38b0c5;
    padding: 20px ;
    width: 100%;
    top: 0;
    z-index: 100;
  }
  .logo{
    height: 40px;
    width: 156px;
    background: url("../../static/image/logo.png") no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
    float: left;
  }
  .list{
    height: 40px;
    float: left;
    margin-left: 40px;
    line-height: 40px;
    color: #fff;
  }
  .item{
    height: 100%;
    padding: 0 20px;
    float: left;
    cursor: pointer;
    margin-left: 20px;
    a{
      color: #fff;
      text-decoration: none;
    }
  }
  .item:hover{
    background: #96f6ff;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    a{
      color: #0f4049;
    }
  }
  .activeClass{
    background: #96f6ff;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    a{
      color: #0f4049;
    }
  }
  .userRight{
    height: 40px;
    line-height:40px;
    float: right;
    color: #fff;
    a{
      color: #fff;
      text-decoration: none;
    }
  }
  .userLeft{
    height: 40px;
    line-height:40px;
    float: right;
    margin-right: 20px;
    color: #fff;
    img{
      float: left;
      height: 40px;
      width: 40px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background: #96f6ff;
    }
    .name{
      float: left;
      margin-left: 10px;
    }
  }
</style>
<template>
  <header class="header">
    <div class="logo"></div>
    <div class="list">
      <div class="item" :class="{'activeClass': active === 'home'}">
        <router-link :to="'/'">首页</router-link>
      </div>
      <div class="item" :class="{'activeClass': active === 'systemManage'}">
        <router-link :to="'/systemManage/user'">系统管理</router-link>
      </div>
      <div class="item" :class="{'activeClass': active === 'preApproval'}">
        <router-link :to="'/preApproval/first'">预授信管理</router-link>
      </div>
      <div class="item" :class="{'activeClass': active === 'charts'}">
        <router-link :to="'/charts/preChart'">数据管理</router-link>
      </div>
      <div class="item" :class="{'activeClass': active === 'info'}">
        <router-link :to="'/charts/preChart'">消息管理</router-link>
      </div>
    </div>
    <div class="userRight"><router-link :to="'/login'">退出</router-link></div>
    <div class="userLeft">
      <img src="" alt="">
      <div class="name">雨停了</div>
    </div>
  </header>
</template>
<script>
export default {
  props: ['active']
}
</script>
