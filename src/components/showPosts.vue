<template>
<div>
  <b-jumbotron bg text-variant="white" border-variant="dark" class="navColor">

    <template>

      <div v-for="p in posts">
        <h1 v-on:click="postId = p.id ">{{p.title}}</h1>
        <p v-if="p.id == postId">
          {{p.content}}
        </p>
      </div>
      <p>
        {{postId}}
      </p>
    </template>
  </b-jumbotron>
</div>





<!--  <h1 v-for="p in posts" v-if='p.selectedTopic == topic'>{{p.title}}</h1> -->
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      posts: [],
      topic: 'front',
      postId: -1
      //uwaga shardkodzone!!! buttony maja być do tego i maja być pobrane getem

    }
  },
  methods: {
    showThisPost: function(){
      this.$http.post('http://demo9377995.mockable.io/addpost', this.postId).then(function(data) {
        console.log(data);
      });

    }

  },
  created() {
    this.$http.get("http://localhost/api/post/read.php").then(function(data) {
      console.log(data);
      this.posts = data.body.records;
    })
  }


}
</script>

<style>

</style>
