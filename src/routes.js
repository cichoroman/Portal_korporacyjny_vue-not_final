
import Ninjas from './Ninjas.vue';
//import Temat from './components/Temat.vue';
import Login from './components/loginForm.vue';
//import Statystyki from './components/Statystyki.vue';
//import DodajMaterialy from './components/DodajMaterialy.vue';
import NotFound from './components/NotFound.vue';

export default [
    { path: '/', component: Ninjas},

//    { path: '/tematy/:id', component: Temat},

    { path: '/login', component: Login},


  //  { path: '/dodajmaterialy/:id', component: DodajMaterialy},

    { path: '/404', component: NotFound },
     { path: '*', redirect: '/404' },

]
