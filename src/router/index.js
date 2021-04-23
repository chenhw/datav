import Vue from 'vue'
import Router from 'vue-router'
import Gjt from '@/components/Gjt'
import  Test1 from  '@/components/Test1'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
