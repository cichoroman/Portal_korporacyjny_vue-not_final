<template>
<div>

  <form-helper>
    <div slot="form-header">
      <h1>Add post</h1>
    </div>
    <div slot="form-fields">

      <b-form-group
            id="fieldset1"

            label="Enter the title"
            label-for="select-topic"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
        >
      <b-form-input  v-model="addedPost.title" type="text" placeholder="title"  required />
    </b-form-group>
      <b-form-group
            id="fieldset1"

            label="Enter the content or specific question"
            label-for="select-topic"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
        >
      <b-form-textarea v-model="addedPost.content" type="text" placeholder="Your post or question" :rows="3"
                     :max-rows="6" required />
</b-form-group>
                     <b-form-group
                           id="fieldset1"
                           description="If there is no matching topic, contact the administrator."
                           label="Choose the topic from the list"
                           label-for="select-topic"
                           :invalid-feedback="invalidFeedback"
                           :valid-feedback="validFeedback"
                           :state="state"
                       >

      <b-form-select v-model="addedPost.selectedTopic" id="select-topic">
        <option v-for="topic in topics" >{{topic.name}}</option>
      </b-form-select>
</b-form-group>
    </div>
      <div slot="form-controls">
        <b-button v-on:click.prevent="handleSubmit">Submit</b-button>
      </div>

  </form-helper>

  <b-jumbotron bg text-variant="white" border-variant="dark" class="navColor">
  <template slot="header">
    Post preview
  </template>
  <template slot="lead">

  </template>
  <hr class="my-4">
  <pre >
<h1>{{addedPost.selectedTopic}}</h1>
<h2>{{addedPost.title}}</h2>
<p>
  {{addedPost.content}}
</p>
  </pre>
</b-jumbotron>



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

<style scoped>
pre{
  color: white;
}
</style>
