<style>
  .roleOption{
    display: block;
    height: 15px ;
    width:15px;
    position: absolute;
    top: 3px;
    left: -2px;
    z-index: 10;
  }
</style>
<template>
  <div class="contentBox">
    <myHeader :active="pageName"></myHeader>
    <secondNav :active="secondNavData"></secondNav>
    <div class="content">
      <div class="addBtn" @click="modalShow('edit')"><span style="padding-right: 5px;">✚</span> 新增</div>
      <table class="dzTable" border="0">
        <thead>
        <th style="width: 5%;">ID</th>
        <th style="width: 15%;">角色名称</th>
        <th style="width: 14%;">角色key</th>
        <th style="width: 10%;">角色状态</th>
        <th style="width: 10%;">角色描述</th>
        <th style="width: 14%;">创建时间</th>
        <th style="width: 14%;">更新时间</th>
        <th style="width: 18%;">操作</th>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>admin</td>
          <td>lalllll</td>
          <td><span class="noState">未删除</span></td>
          <td>13987879090</td>
          <td>20-09-09</td>
          <td>20-09-09</td>
          <td>
            <span class="optionBtn" @click="modalShow('edit')">编辑</span>
            <span class="optionBtn" @click="modalShow('resource')">分配资源</span>
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
        <div class="addUserBox" style="height: 250px;">
          <div class="modalTitle">添加角色/编辑角色 <span @click="modalHide('edit')">✖</span></div>
          <div class="modalBody">
            <div class="selections">
              <div class="dzFormBox">
                <label>角色&nbsp;&nbsp;key</label>
                <input type="text" class="dzInput" placeholder="输入角色key"/>
              </div>
              <div class="dzFormBox">
                <label>&nbsp;&nbsp;状&nbsp;&nbsp;态&nbsp;&nbsp;&nbsp;</label>
                <select name="" class="dzSelect">
                  <option value="">正常</option>
                  <option value="">禁用</option>
                </select>
              </div>
              <div class="dzFormBox">
                <label>角色名称</label>
                <input type="text" class="dzInput" placeholder="输入角色名称"/>
              </div>
              <div class="dzFormBox">
                <label>&nbsp;&nbsp;描&nbsp;&nbsp;述&nbsp;&nbsp;&nbsp;</label>
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
    <!--分配资源模态框-->
    <div class="modal" v-if="showModal.resource" style="overflow: auto;">
      <div class="modalContent" style="width: 500px;margin: 60px auto;position: static;">
        <div class="roleBox" style="width: 500px;min-height:300px;position: relative;padding-bottom: 50px;">
          <div class="modalTitle">角色分配 <span @click="modalHide('resource')">✖</span></div>
          <div class="modalBody" style="background: #fff;">
            <div class="firstBox" style="min-height: 30px;">
              <div class="firstItem">
                <div class="resourceItem">
                  <label for="" class="firstLabel">
                    <img src="../../../static/image/open.png" alt="" class="roleOption" v-if="!firstShow" @click.stop="firstShowFunc"/>
                    <img src="../../../static/image/close.png" alt="" class="roleOption" v-if="firstShow" @click.stop="firstShowFunc"/>
                    <span class="roleCheck"></span>
                    <input type="checkbox" id=""/>&nbsp;&nbsp;菜单
                  </label>
                </div>
              </div>
              <div class="secBox" v-for="(item, index) in secList" v-bind:key="index" v-if="firstShow">
                <div class="firstItem">
                  <div class="resourceItem">
                    <label for="" class="firstLabel">
                      <img src="../../../static/image/open.png" alt="" class="roleOption" v-show="index!==3 && !item.show" @click.stop="secondShowFunc(index)"/>
                      <img src="../../../static/image/close.png" alt="" class="roleOption" v-show="index!==3 && item.show" @click.stop="secondShowFunc(index)"/>
                      <span class="roleCheck"></span>
                      <input type="checkbox"/> {{item.name}}
                    </label>
                  </div>
                </div>
                <div class="secBox" v-for="(third,indexs) in thirdList[index]" v-bind:key="indexs" v-if="item.show">
                  <div class="firstItem">
                    <div class="resourceItem">
                      <label for="" class="firstLabel">
                        <img src="../../../static/image/open.png"  alt="" class="roleOption" v-show="third.nextList.length>0 && !third.show" @click="thirdShowFunction(index,indexs)"/>
                        <img src="../../../static/image/close.png" alt="" class="roleOption" v-show="third.nextList.length>0 && third.show" @click="thirdShowFunction(index,indexs)"/>
                        <span class="roleCheck"></span>
                        <input type="checkbox" /> {{third.name}}
                      </label>
                    </div>
                  </div>
                  <div class="secBox" v-if="third.show" v-for="(four,indexf) in thirdList[index][indexs].nextList" v-bind:key="indexf">
                    <div class="firstItem">
                      <div class="resourceItem">
                        <label for="administrator" class="firstLabel">
                          <img src="../../../static/image/open.png" alt="" class="roleOption"  v-show="four.nextList.length>0"/>
                          <span class="roleCheck"></span>
                          <input type="checkbox" id="administrator"/> {{four.name}}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="height: 30px;">
              <div class="modalBtns">
                <span class="sure">确定</span>
                <span class="cancel"  @click="modalHide('resource')">取消</span>
              </div>
            </div>
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
        name: 'role',
        num: 0
      },
      showModal: {
        deleteBtn: false,
        edit: false,
        resource: false
      },
      firstShow: true,
      secList: [{name: '系统管理', show: false}, {name: '预授信管理', show: false}, {name: '统计管理', show: false}, {name: '消息中心', show: false}],
      thirdList: []
    }
  },
  created () {
    this.thirdList = this.$resource.list
    console.log(this.thirdList)
  },
  methods: {
    firstShowFunc: function () {
      this.firstShow = !this.firstShow
      console.log(this.firstShow)
    }, // 二级菜单显示隐藏
    secondShowFunc: function (index) {
      this.secList[index].show = !this.secList[index].show
    }, // 三级菜单显示隐藏
    thirdShowFunction: function (index1, index2) {
      this.thirdList[index1][index2].show = !this.thirdList[index1][index2].show
    }, // 司机菜单显示隐藏
    modalShow: function (type) {
      this.showModal[type] = true
    }, // 模态框的显示
    modalHide: function (type) {
      this.showModal[type] = false
    } // 模态框的隐藏
  }
}
</script>
