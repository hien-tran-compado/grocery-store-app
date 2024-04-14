import Vue from 'vue';
import VueRouter from 'vue-router';
import ConfirmationPage from './application-pages/ConfirmationPage.vue';
import HomePage from './application-pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: HomePage},
  {path: '/confirmation', component: ConfirmationPage },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;



