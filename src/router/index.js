import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customs1 from '../views/customs1/Index.vue'
import Slide from '../views/customs1/slide.vue'
import Seesaw from '../views/customs1/seesaw.vue'
import Swing from '../views/customs1/swing.vue'
import Roundabout from '../views/customs1/roundabout.vue'
import Checking from '../views/customs1/checking.vue'
import Practicing from '../views/customs1/practicing.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
  	path:'/customs1',
  	name:'customs1',
  	component:Customs1
  },
  {
  	path:'/slide',
  	name:'slide',
  	component:Slide
  },
  {
  	path:'/seesaw',
  	name:'seesaw',
  	component:Seesaw
  },
  {
  	path:'/swing',
  	name:'swing',
  	component:Swing
  },
  {
  	path:'/roundabout',
  	name:'roundabout',
  	component:Roundabout
  },
  {
    path:'/checking',
    name:'checking',
    component:Checking
  },
  {
    path:'/practicing',
    name:'practicing',
    component:Practicing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
