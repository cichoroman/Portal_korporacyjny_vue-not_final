<template>
<div id="main-page">
  <navbar>
    <div slot="menu">
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/" ><b-button>Home</b-button></router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/login"><b-button>Log in</b-button></router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/addPost"><b-button variant="primary" >Add post</b-button></router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/addMeating"><b-button variant="primary" >Add meating</b-button></router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/addUser"><b-button variant="primary" >Add user</b-button></router-link>
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
import showPosts from './components/showPosts.vue'
import test from './components/test.vue'
import addComment from './components/addComment.vue'
export default {
  components: {
    'navbar': navbar,
    'login-form': loginForm,
    'add-post': addPost,
    'show-posts': showPosts,
    'test': test,
    'add-comment': addComment

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

 background-image: url("assets/backgroung1.png" );
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
  background-size: cover;


background-color: rgb(182, 182, 182);
  }
  .text-muted {

    color: #b4bbc2 !important;
}

</style>
