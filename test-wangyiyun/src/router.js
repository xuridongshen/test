import Vue from 'vue'
import Router from 'vue-router'
import foundTheMic from './views/foundTheMic.vue'
import tuJian from './components/foundTheMic/tuijian.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    //   linkActiveClass:'link-active',
    //   linkExactActiveClass:'active',
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
                    component: () => import( /* webpackChunkName: "paihangbang" */ './components/foundTheMic/paihangbang.vue')
                }
            ],
            redirect:'tujian'// 默认第一次进来打开的子路由    :重定向
        },
        {
            path: '/myMusic',
            name: 'myMusic',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "myMusic" */ './views/myMusic.vue')
        },
        {
            path: '/friend',
            name: 'friend',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "friend" */ './views/friend.vue')
        },
        {
            path: '/shopping',
            name: 'shopping',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "shopping" */ './views/shopping.vue')
        },
        {
            path: '/musicPeople',
            name: 'musicPeople',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "musicPeople" */ './views/musicPeople.vue')
        },
        {
            path: '/DownLoad',
            name: 'DownLoad',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "DownLoad" */ './views/DownLoad.vue')
        }
    ]
})