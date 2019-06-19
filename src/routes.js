import ShowPosts from './components/showPosts.vue';
import AddPost from './components/addPost.vue';
import AddMeating from './components/AddMeating.vue';
import NotFound from './components/NotFound.vue';
import AddUser from './components/addUser.vue';
import Login from './components/loginForm.vue';

export default [
    { path: '/', component: ShowPosts},
    { path: '/showPosts', component: ShowPosts},
    { path: '/addPost', component: AddPost},
    { path: '/addMeating', component: AddMeating},
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
    { path: '/addUser', component: AddUser},
    { path: '/login', component: Login},
]
