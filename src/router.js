import Vue from 'vue';
import VueRouter from 'vue-router';
import ConfirmationPage from './application-pages/ConfirmationPage.vue';
import HomePage from './application-pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/confirmation',
    name: 'ConfirmationPage',
    component: ConfirmationPage,
    props: route => ({
      shoppingList: route.params.shoppingList,
      total: route.params.total
    })
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;



