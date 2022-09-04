import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home.vue'
import Service from '../components/Service.vue'
import Work from '../components/Work.vue'
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
    path: '/work',
    name: 'work',
    component: Work
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
