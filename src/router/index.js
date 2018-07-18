import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import User from '@/page/systemManage/user'
import Role from '@/page/systemManage/role'
import Resource from '@/page/systemManage/resource'
import First from '@/page/preApproval/first'
import Result from '@/page/preApproval/result'
import PreChart from '@/page/charts/preChart'
import Login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: '首页'
      }
    }, {
      path: '/content/:id',
      component: Content
    }, {
      path: '/systemManage/user',
      component: User,
      meta: {
        title: '用户管理'
      }
    }, {
      path: '/systemManage/role',
      component: Role,
      meta: {
        title: '角色管理'
      }
    }, {
      path: '/systemManage/resource',
      component: Resource,
      meta: {
        title: '资源管理'
      }
    }, {
      path: '/preApproval/first',
      component: First,
      meta: {
        title: '首次查询'
      }
    }, {
      path: '/preApproval/result',
      component: Result,
      meta: {
        title: '结果查询'
      }
    }, {
      path: '/charts/preChart',
      component: PreChart,
      meta: {
        title: '预授信统计'
      }
    }, {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})
