import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: () => import('./views/UserList.vue'),
    },
    {
      path: '/message_thread',
      name: 'MessageThread',
      component: () => import('./views/MessageThread.vue'),
    },
  ],
});
