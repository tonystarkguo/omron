import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import NorFind from '@/components/404'
import Home from '@/components/Home'
import Finishedproduct from '@/components/Finishedproduct.vue'
import Ministryproducts from '@/components/Ministryproducts.vue'
import FinishedproductNew from '@/components/FinishedproductNew.vue'
import MinistryproductsNew from '@/components/MinistryproductsNew.vue'
import Partnumber from '@/components/Partnumber.vue'
import StartPag from '@/components/StartPag.vue'
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
        { path: "", component: StartPag, name: "StartPag"},
        { path: '/Home/Product', component: Finishedproduct,name:"Product" },
        { path: '/Home/Ministry', component: Ministryproducts, name: "Ministry" },
        { path: '/Home/ProductNew', component: FinishedproductNew, name: "ProductNew" },
        { path: '/Home/MinistryNew', component: MinistryproductsNew, name: "MinistryNew" },
         { path: '/Home/Partnumber', component: Partnumber, name: "Partnumber" },
      ]
    },
  ]
})
