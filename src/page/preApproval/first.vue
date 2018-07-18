<template>
  <div class="contentBox">
    <myHeader :active="pageName"></myHeader>
    <secondNav :active="secondNavData"></secondNav>
    <div class="content">
      <div class="selections">
        <div class="dzFormBox">
          <label for="name">姓名</label>
          <input type="text" id="name" class="dzInput" placeholder="输入姓名"/>
        </div>
        <div class="dzFormBox">
          <label for="phone">手机号</label>
          <input type="text" id="phone" class="dzInput" placeholder="输入手机号"/>
        </div>
        <div class="dzFormBox">
          <label for="cardType">证件类型</label>
          <select name="" id="cardType" class="dzSelect">
            <option value="">--请选择--</option>
            <option value="">身份证</option>
          </select>
        </div>
        <div class="dzFormBox">
          <label for="cardNum">身份证</label>
          <input type="text" id="cardNum" class="dzInput" placeholder="输入身份证号"/>
        </div>
        <div class="dzFormBox">
          <label for="role">申请人角色</label>
          <select name="" id="role" class="dzSelect">
            <option value="">--请选择--</option>
            <option value="">申请人</option>
          </select>
        </div>
        <div class="dzFormBox">
          <label for="reason">查询原因</label>
          <select name="" id="reason" class="dzSelect">
            <option value="">--请选择--</option>
            <option value="">贷款审批</option>
          </select>
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
        name: 'first',
        num: 1
      }
    }
  }
}
</script>
