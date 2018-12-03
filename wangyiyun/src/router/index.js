import Vue from 'vue'
import Router from 'vue-router'
import foundTheMic from '../view/foundTheMic.vue'
import tuJian from '../components/foundTheMic/tuijian.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'foundTheMic',
    component: foundTheMic,
    children: [{
      path: 'tujian',
      name: 'tujian',
      component: tuJian
    },
    {
      path: 'paihangbang',
      name: 'paihangbang',
      component: (resolve) => require(['../components/foundTheMic/paihangbang.vue'], resolve)
      // component: () => import( /* webpackChunkName: "paihangbang" */ '../components/foundTheMic/paihangbang.vue')
    }
    ],
    redirect: 'tujian' // 默认第一次进来打开的子路由    :重定向
  },
  {
    path: '/myMusic',
    name: 'myMusic',
    component: (resolve) => require(['../view/myMusic.vue'], resolve)
    // component: () => import( /* webpackChunkName: "myMusic" */ '../view/myMusic.vue')
  },
  {
    path: '/friend',
    name: 'friend',
    component: (resolve) => require(['../view/friend.vue'], resolve)
    // component: () => import( /* webpackChunkName: "friend" */ '../view/friend.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: (resolve) => require(['../view/shopping.vue'], resolve)
    // component: () => import( /* webpackChunkName: "shopping" */ '../view/shopping.vue')
  },
  {
    path: '/musicPeople',
    name: 'musicPeople',
    component: (resolve) => require(['../view/musicPeople.vue'], resolve)
    // component: () => import( /* webpackChunkName: "musicPeople" */ '../view/musicPeople.vue')
  },
  {
    path: '/DownLoad',
    name: 'DownLoad',
    component: (resolve) => require(['../view/DownLoad.vue'], resolve)
    // component: () => import( /* webpackChunkName: "DownLoad" */ '../view/DownLoad.vue')
  }
  ]
})
