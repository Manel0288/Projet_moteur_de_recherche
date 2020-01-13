import Vue from 'vue'
import VueRouter from 'vue-router'
import ContainerComponent from '../components/containerComponent/ContainerComponent'
import DetailComponent from '../components/detailComponent/DetailComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ContainerComponent
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailComponent,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router
