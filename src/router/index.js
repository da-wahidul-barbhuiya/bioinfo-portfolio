import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import Projects from '../views/Projects.vue';
import Hobbies from '../views/hobbies.vue';
import PhotoCollection from '../views/PhotoCollection.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: Blogs },
    { path: '/projects', component: Projects },
    { path: '/hobbies', component: Hobbies },
    {path:'/gallery',component:PhotoCollection},
  ],
});

export default router;
