<template>
  <div class="contentBox">
    <myHeader :active="pageName"></myHeader>
    <secondNav :active="secondNavData"></secondNav>
    <div class="content">
      <div class="selections">
        <div class="dzFormBox">
          <label for="codeNum">身份证</label>
          <input type="text" id="codeNum" class="dzInput" placeholder="输入身份证号"/>
        </div>
        <div class="dzFormBox">
          <div class="searchBtn">查询</div>
        </div>
      </div>
      <table class="dzTable" border="0">
        <thead>
        <th>ID</th>
        <th>申请编号</th>
        <th>姓名</th>
        <th>身份证类型</th>
        <th>身份证号</th>
        <th>申请人角色</th>
        <th>查询原因</th>
        <th>手机号码</th>
        <th>查询时间</th>
        <th>查询结果</th>
        <th>门店Id</th>
        </thead>
        <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import myHeader from '../../components/header.vue'
import secondNav from '../../components/secondNav.vue'
export default {
  components: {myHeader, secondNav},
  data () {
    return {
      pageName: 'preApproval',
      secondNavData: {
        name: 'result',
        num: 1
      }
    }
  }
}
</script>
