import Vue from 'vue';
import Router from 'vue-router';
import SendMessage from '../components/SendMessage.vue';
import ViewMessages from '../components/ViewMessages.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/send-message',
      name: 'SendMessage',
      component: SendMessage
    },
    {
      path: '/view-messages',
      name: 'ViewMessages',
      component: ViewMessages
    }
  ]
});

export default router;
