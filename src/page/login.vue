<style lang="scss">
  .loginBox{
    height: 100%;
    width: 100%;
    background: #eee;
    position: relative;
    .bg{
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      filter: blur(7px);
      background: url("../../static/image/bg.png") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover;
    }
    p{
      text-align: center;
      color: #909db7;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .loginCon{
      padding: 30px;
      width: 300px;
      height: 390px;
      background: #fff;
      position: absolute;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .headerUrl{
      height: 100px;
      width: 100px;
      padding: 10px;
      margin: 0 auto 25px;
      background: #38b0c5;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      img{
        display: block;
        width: 80px;
        height: 80px;
        background: #38b0c5;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
    .loginInputBox{
      width: 100%;
      height: 44px;
      line-height: 44px;
      background: #fff;
      border: 1px solid #e7ecee;
      padding: 5px 10px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      input{
        box-sizing: border-box;
        display: block;
        border: none;
        width: 100%;
        height: 100%;
        padding: 0 10px;
        color: #555;
      }
    }
    button{
      display: block;
      height: 40px;
      width:100%;
      border: none;
      background: #38b0c5;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      color: #fff;
      outline: none;
      cursor: pointer;
      margin-top: 30px;
    }
  }
</style>
<template>
  <div class="loginBox">
    <div class="bg"></div>
    <div class="loginCon">
      <div class="headerUrl">
        <img src="../../static/image/loginLogo.png" alt="">
      </div>
      <p>东正汽车金融预授信管理系统</p>
      <div class="loginInputBox" style="border-bottom: none;"><input type="text" placeholder="输入用户名" name="username" v-model="username"/></div>
      <div class="loginInputBox"><input type="password" placeholder="输入密码" name="password" v-model="password"/></div>
      <button @click='submitFunc'>登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    submitFunc: function () {
      var that = this
      let param = new URLSearchParams()
      param.append('username', that.username)
      param.append('password', that.password)
      this.$api.post('login', param, function (res) {
        alert('成功')
        localStorage.setItem('token', '')
        that.$router.push('/')
      }, function () {
        console.log('fail')
      })
    }
  }
}
</script>
