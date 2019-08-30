import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './views/Home.vue';
import EditComponent from './components/post/Edit.vue';
import CreateComponent from './components/post/Create.vue';
import PostComponent from './components/post/Post.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'Home'},
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent,
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateComponent,
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: EditComponent,
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: PostComponent,
    },
    {
      path: '/delete/:id',
      name: 'Delete',
      component: HomeComponent
    }
  ]
})
