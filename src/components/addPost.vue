<template>
<div>

  <form-helper>
    <div slot="form-header">
      <h3>User registration form</h3>
    </div>
    <div slot="form-fields">

      <b-form-input  v-model="addedPost.title" type="text" placeholder="title"  required />
      <b-form-input v-model="addedPost.content" type="text" placeholder="content" required />
      <select v-model="addedPost.selectedTopic">
        <option v-for="topic in topics" >{{topic.name}}</option>
      </select>

    </div>
      <div slot="form-controls">
        <b-button v-on:click.prevent="handleSubmit">Submit</b-button>
      </div>

  </form-helper>

</div>
</template>

<script>
import formHelp from './formHelp.vue'

export default {
  components: {
    'form-helper': formHelp
  },
  data() {
    return {
      addedPost:{title: "", content: "", selectedTopic: ""},

//shardkodzone !!!!! ma być docelowo z geta!!!
      topics: [{
          id: 1,
          name: 'Frontend'
        },
        {
          id: 2,
          name: 'Backend'
        },
        {
          id: 3,
          name: 'Agile'
        },
        {
          id: 4,
          name: 'Testing'
        }
      ]

    }
  },
  methods: {
    handleSubmit: function(){
		    this.$http.post('https://demo9377995.mockable.io/addpost', this.addedPost ).then(function(data){
          console.log(data);
      });
    }}
          }

</script>

<style>

</style>
