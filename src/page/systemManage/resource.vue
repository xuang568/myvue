<template>
  <div class="contentBox">
    <myHeader :active="pageName"></myHeader>
    <secondNav :active="secondNavData"></secondNav>
    <div class="content">
      <div class="addBtn" @click="modalShow('edit')"><span style="padding-right: 5px;">✚</span> 新增</div>
      <div class="selections">
        <div class="dzFormBox">
          <label for="first">一级条件</label>
          <select name="" id="first" class="dzSelect">
            <option value="">--请选择--</option>
            <option value="">系统管理</option>
            <option value="">预授信管理</option>
            <option value="">统计管理</option>
            <option value="">消息中心</option>
          </select>
        </div>
        <div class="dzFormBox">
          <label for="second">二级条件</label>
          <select name="" id="second" class="dzSelect">
            <option value="">--请选择--</option>
            <option value="">用户管理</option>
            <option value="">用户编辑</option>
            <option value="">用户添加</option>
            <option value="">用户删除</option>
          </select>
        </div>
      </div>
      <table class="dzTable" border="0">
        <thead>
        <th style="width: 10%;">资源名称</th>
        <th style="width: 5%;">ID</th>
        <th style="width: 10%;">资源key</th>
        <th style="width: 10%;">类型</th>
        <th style="width: 10%;">资源url</th>
        <th style="width: 5%;">层级</th>
        <th style="width: 5%;">排序</th>
        <!--<th style="width: 5%;">icon</th>-->
        <th style="width: 10%;">状态</th>
        <th style="width: 10%;">描述</th>
        <th style="width: 10%;">更新时间</th>
        <th style="width: 15%;">操作</th>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>lalllll</td>
          <td><span class="yesState">菜单</span></td>
          <td>13987879090</td>
          <td>2</td>
          <td>3</td>
          <td><span class="yesState">显示</span></td>
          <td></td>
          <td></td>
          <td>
            <span class="optionBtn" @click="modalShow('edit')">编辑</span>
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
          <div class="modalTitle">添加资源/编辑资源 <span @click="modalHide('edit')">✖</span></div>
          <div class="modalBody">
            <div class="selections">
              <div class="dzFormBox">
                <label>一级资源</label>
                <select name="" class="dzSelect">
                  <option value="all">菜单</option>
                  <option value="0">--系统管理</option>
                  <option value="1">--预授信管理</option>
                  <option value="2">--统计管理</option>
                  <option value="3">--消息中心</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>二级资源</label>
                <select name="" class="dzSelect">
                  <option value="">目录</option>
                  <option value="">菜单</option>
                  <option value="">按钮</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>三级资源</label>
                <select name="" class="dzSelect">
                  <option value="">目录</option>
                  <option value="">菜单</option>
                  <option value="">按钮</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>层级</label>
                <input type="text" class="dzInput" placeholder="输入层级"/>
              </div>
              <div class="dzFormBox">
                <label>资源名称</label>
                <input type="text" class="dzInput" placeholder="输入资源名称"/>
              </div>
              <div class="dzFormBox">
                <label>排序</label>
                <input type="text" class="dzInput" placeholder="输入排序"/>
              </div>
              <div class="dzFormBox">
                <label>唯一标识</label>
                <input type="text" class="dzInput" placeholder="输入唯一标识"/>
              </div>
              <div class="dzFormBox">
                <label>图标</label>
                <input type="text" class="dzInput" placeholder="输入图标"/>
              </div>
              <div class="dzFormBox">
                <label>资源类型</label>
                <select name="" class="dzSelect">
                  <option value="">目录</option>
                  <option value="">菜单</option>
                  <option value="">按钮</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>状态</label>
                <select name="" class="dzSelect">
                  <option value="">显示</option>
                  <option value="">隐藏</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>资源URL</label>
                <input type="text" class="dzInput" placeholder="输入资源URL"/>
              </div>
              <div class="dzFormBox">
                <label>描述</label>
                <input type="text" class="dzInput" placeholder="输入描述"/>
              </div>
            </div>
          </div>
          <div class="modalBtns">
            <span class="sure">确定</span>
            <span class="cancel" @click="modalHide('edit')">取消</span>
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
        name: 'resource',
        num: 0
      },
      showModal: {
        deleteBtn: false,
        edit: false
      }
    }
  },
  created () {
    console.log(this.$resource)
  },
  methods: {
    modalShow: function (type) {
      this.showModal[type] = true
    },
    modalHide: function (type) {
      this.showModal[type] = false
    }
  }
}
</script>
