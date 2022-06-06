import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import bus from '../utils/bus'
import { store } from '../store/index'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch((error) => {
          console.log(error);
        })
      },
      component: NewsView,
    },
    {
      path: '/ask',
      name: 'ask',
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch((error) => {
          console.log(error);
        })
      },
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch((error) => {
          console.log(error);
        })
      },
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});