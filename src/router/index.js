import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home.vue'
import Infom from '../components/Info.vue'
import Service from '../components/Service.vue'
import Contact from '../components/Contact.vue'
import Thank from '../components/Thank.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'corporate', desc: 'コーポレートページ' }
  },
    {
    path: '/infomation',
    name: 'infomation',
    component: Infom
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/thank',
    name: 'thank',
    component: Thank
  },
]



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

    scrollBehavior (to) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }

});

export default router;
