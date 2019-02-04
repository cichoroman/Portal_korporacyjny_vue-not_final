<template>
<div id="main-page">
  <navbar>
    <div slot="menu">
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item v-on:click="component='app-tematy'" >Tematy</b-nav-item> -->
        <b-nav-item>
          <router-link to="/">Home </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/login">Log in</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/addPost">Add Post</router-link>
        </b-nav-item>
      </b-navbar-nav>

    </div>
  </navbar>



  <b-container class="bv-example-row">
    <b-row class="text-center">
          <b-col xs="0" sm="1" lg="2"></b-col>

          <b-col xs="12" sm="10" lg="8">
            <router-view></router-view>
          </b-col>
          <b-col xs="0" sm="1" lg="2"></b-col>
        </b-row>

  </b-container>

</div>
</template>

<script>
import navbar from './components/navbar.vue'
import loginForm from './components/loginForm.vue'
import addPost from './components/addPost.vue'
export default {
  components: {
    'navbar': navbar,
    'login-form': loginForm,
    'add-post': addPost

  },
  data() {
    return {
      title: 'App'
    }
  }
}
</script>

<style >
body {

 background-image: url("https://ak2.picdn.net/shutterstock/videos/19484962/thumb/1.jpg");   /*zmien obraz */
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
  background-size: cover;

background-color: rgb(182, 182, 182);
  }


</style>
