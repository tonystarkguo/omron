import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import NorFind from '@/components/404'
import Home from '@/components/Home'
import Finishedproduct from '@/components/Finishedproduct.vue'
import Ministryproducts from '@/components/Ministryproducts.vue'
Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NorFind',
      component: NorFind
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        { path: '/Home/Product', component: Finishedproduct,name:"Product" },
        { path: '/Home/Ministry', component: Ministryproducts, name: "Ministry" },
      ]
    },
  ]
})
