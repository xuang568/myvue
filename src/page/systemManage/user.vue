<template>
  <div class="contentBox">
    <myHeader :active="pageName"></myHeader>
    <secondNav :active="secondNavData"></secondNav>
    <div class="content">
      <div class="addBtn" @click="modalShow('edit')"><span style="padding-right: 5px;" >✚</span> 新增</div>
      <table class="dzTable" border="0">
        <thead>
        <th style="width: 5%;">ID</th>
        <th style="width: 10%;">账户名</th>
        <th style="width: 10%;">昵称</th>
        <th style="width: 5%;">性别</th>
        <th style="width: 10%;">电话</th>
        <th style="width: 12%;">邮箱</th>
        <th style="width: 8%;">住址</th>
        <th style="width: 8%;">删除状态</th>
        <th style="width: 8%;">锁定</th>
        <th style="width: 8%;">创建时间</th>
        <th style="width: 16%;">操作</th>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" v-bind:key="index">
          <td></td>
          <td>admin</td>
          <td>lalllll</td>
          <td>女</td>
          <td>13987879090</td>
          <td>997876456@qq.com</td>
          <td>上海浦东新区</td>
          <td><span class="yesState">已删除</span></td>
          <td><span class="noState">未锁定</span></td>
          <td>2019-09-08</td>
          <td>
            <span class="optionBtn" @click="modalShow('edit')">编辑</span>
            <span class="optionBtn" @click="modalShow('role')">分配角色</span>
            <span class="optionBtn" @click="modalShow('deleteBtn')">删除</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--删除模态框-->
    <div class="modal" v-if="showModal.deleteBtn">
      <div class="modalContent">
        <div class="deleteBox">
          <div class="modalTitle">删除用户 <span @click="modalHide('deleteBtn')">✖</span></div>
          <div class="modalBody">确定要删除?</div>
          <div class="modalBtns">
            <span class="sure">确定</span>
            <span class="cancel" @click="modalHide('deleteBtn')">取消</span>
          </div>
        </div>
      </div>
    </div>
    <!--编辑或者添加模态框-->
    <div class="modal" v-if="showModal.edit">
      <div class="modalContent">
        <div class="addUserBox">
          <div class="modalTitle">添加用户/编辑用户 <span @click="modalHide('edit')">✖</span></div>
          <div class="modalBody">
            <div class="selections">
              <div class="dzFormBox">
                <label>账&nbsp;户&nbsp;名&nbsp;</label>
                <input type="text" class="dzInput" placeholder="输入账户名" v-model="requestData.username"/>
              </div>
              <div class="dzFormBox">
                <label>昵&nbsp;&nbsp;称</label>
                <input type="text" class="dzInput" placeholder="输入昵称"/>
              </div>
              <div class="dzFormBox">
                <label>头像URL</label>
                <input type="text" class="dzInput" placeholder="输入头像URL"/>
              </div>
              <div class="dzFormBox">
                <label>性&nbsp;&nbsp;别</label>
                <select name="" class="dzSelect">
                  <option value="">女</option>
                  <option value="">男</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>出生日期</label>
                <input type="date" class="dzInput" placeholder="输入出生日期"/>
              </div>
              <div class="dzFormBox">
                <label>电&nbsp;&nbsp;话</label>
                <input type="text" class="dzInput" placeholder="输入电话"/>
              </div>
              <div class="dzFormBox">
                <label>&nbsp;E-mail&nbsp;&nbsp;</label>
                <input type="text" class="dzInput" placeholder="输入E-mail"/>
              </div>
              <div class="dzFormBox">
                <label>地&nbsp;&nbsp;址</label>
                <input type="text" class="dzInput" placeholder="输入地址"/>
              </div>
              <div class="dzFormBox">
                <label>&nbsp;&nbsp;状&nbsp;&nbsp;态&nbsp;&nbsp;&nbsp;</label>
                <select name="" class="dzSelect">
                  <option value="">锁定</option>
                  <option value="">未锁定</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>描&nbsp;&nbsp;述</label>
                <input type="text" class="dzInput" placeholder="输入描述"/>
              </div>
            </div>
          </div>
          <div class="modalBtns">
            <span class="sure">确定</span>
            <span class="cancel"  @click="modalHide('edit')">取消</span>
          </div>
        </div>
      </div>
    </div>
    <!--分配角色模态框-->
    <div class="modal" v-if="showModal.role">
      <div class="modalContent">
        <div class="roleBox">
          <div class="modalTitle">角色分配 <span  @click="modalHide('role')">✖</span></div>
          <div class="modalBody">
            <label for="administrator" class="firstLabel">
              <span class="userCheck active"></span>
              <input type="checkbox" id="administrator"/> administrator
            </label>
            <label for="operator" class="firstLabel">
              <span class="userCheck"></span>
              <input type="checkbox" id="operator"/> operator
            </label>
            <label for="user" class="firstLabel">
              <span class="userCheck"></span>
              <input type="checkbox" id="user"/> user
            </label>
          </div>
          <div class="modalBtns">
            <span class="sure">确定</span>
            <span class="cancel"  @click="modalHide('role')">取消</span>
          </div>
        </div>
      </div>
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
      pageName: 'systemManage',
      secondNavData: {
        name: 'user',
        num: 0
      },
      showModal: {
        deleteBtn: false,
        edit: false,
        role: false
      },
      requestData: {

        username: '',
        password: ''
      },
      list: [{}, {}]
    }
  },
  methods: {
    modalShow: function (type) {
      this.showModal[type] = true
    },
    modalHide: function (type) {
      this.showModal[type] = false
    },
    getList: function () {
    }
  }
}
</script>
