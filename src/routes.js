
import Ninjas from './Ninjas.vue';
//import Temat from './components/Temat.vue';
import Login from './components/loginForm.vue';
import AddUser from './components/addUser.vue';
//import Statystyki from './components/Statystyki.vue';
//import DodajMaterialy from './components/DodajMaterialy.vue';
import AddMeating from './components/AddMeating.vue';
import AddPost from './components/addPost.vue';
import ShowPosts from './components/showPosts.vue';

import NotFound from './components/NotFound.vue';

export default [
    { path: '/', component: ShowPosts},
    { path: '/addPost', component: AddPost},
    { path: '/showPosts', component: ShowPosts},
    {path: '/addMeating', component: AddMeating},

//    { path: '/tematy/:id', component: Temat},

    { path: '/login', component: Login},

    { path: '/addUser', component: AddUser},
  //  { path: '/dodajmaterialy/:id', component: DodajMaterialy},

    { path: '/404', component: NotFound },
     { path: '*', redirect: '/404' },

]
