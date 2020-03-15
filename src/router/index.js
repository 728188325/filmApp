import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '@/views/center'
import Film from '@/views/film'
import Cinema from '@/views/cinema'
import NowPlaying from '@/views/film/nowPlaying'
import ComingSoon from '@/views/film/comingSoon'
import Detail from '@/views/detail'
import City from '@/views/city'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: 'nowPlaying',
          component: NowPlaying
        }, {
          path: 'comingSoon',
          component: ComingSoon
        }, {
          path: '',
          redirect: 'nowPlaying'
        }
      ]
    }, {
      path: '/cinema',
      component: Cinema
    }, {
      path: '/center',
      component: Center
    }, {
      path: '/detail/:id',
      name: 'customDetail',
      component: Detail
    }, {
      path: '/city',
      component: City
    }, {
      path: '*',
      redirect: '/film'
    }
  ]
})

// 全局路由拦截
router.beforeEach((to, from, next) => {
  console.log(to.path, from.path, '全局路由守卫')
  next()
})
export default router
