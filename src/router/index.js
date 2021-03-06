import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyFavorite from '../views/MyFavorite.vue'
import BookInformation from '../views/BookInformation.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fav',
    name: 'MyFavorite',
    component: MyFavorite
  },
  {
    path: '/book-info/:id',
    name: 'BookInformation',
    component: BookInformation
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
