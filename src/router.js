import Vue from 'vue'
import Router from 'vue-router'
import Config from './views/Config.vue'
import Game from './views/Game.vue'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/',
      name: 'config',
      component: Config
    },
    {
      path: '/game',
      name: 'game',
      component: Game
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/Game.vue')
    }
  ]
})
