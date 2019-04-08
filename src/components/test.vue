<template>
  <div>



  </div>
</template>

<script>


export default {
  components:{

  },
  data () {
    return {
        posts: []
                   //uwaga shardkodzone!!! buttony maja być do tego i maja być pobrane getem

    }
  },
  methods: {

  },
  created() {
  	this.$http.get( "http://localhost/api/post/read.php").then(function(data){
  	console.log(data);
  	this.posts = data.body;})
  }


}
</script>

<style>

</style>
