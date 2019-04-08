<template>
<div>

  <form-helper>
    <div slot="form-header">
      <h1>Add Comment</h1>
    </div>
    <div slot="form-fields">

      <b-form-group id="fieldset1" label="Enter the author" label-for="select-topic">
        <b-form-input v-model="addedComment.author" type="text" placeholder="title" required />
      </b-form-group>
      <b-form-group id="fieldset1" label="Enter the content or specific question" label-for="select-topic" >
        <b-form-textarea v-model="addedComment.content" type="text" placeholder="Your post or question" :rows="3" :max-rows="6" required />
      </b-form-group>
      <b-form-group id="fieldset1"  label="Select category of your comment" label-for="select-topic" >

        <b-form-select v-model="addedComment.category" id="select-topic">
          <option v-for="category in categories">{{category.name}}</option>
        </b-form-select>
      </b-form-group>
    </div>
    <div slot="form-controls">
      <b-button  variant="primary" v-on:click="showPrewiew = !showPrewiew">Show post preview</b-button>

      <b-button variant="primary" v-on:click.prevent="handleSubmit">Submit</b-button>
    </div>

  </form-helper>

  <b-jumbotron bg text-variant="white" border-variant="dark" class="navColor">

<template>
<pre v-show="showPrewiew">
<h1>{{addedComment.category}}</h1>
<h2>Written by {{addedComment.author}}</h2>
<p>
  {{addedComment.content}}
</p>
</pre>
</template>
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
      showPrewiew: false,

      addedComment: {
        category: "",
        content: "",
        postId: "",
        author: "",
        id: ""
      },

      categories: [{
          id: 1,
          name: 'Question'
        },
        {
          id: 2,
          name: 'Answer'
        },
        {
          id: 3,
          name: 'Other'
        }
      ]


    }
  },
  methods: { // zmienic na add coment (musi przesylac id dla postu)
    handleSubmit: function() {
      this.$http.post('http://demo9377995.mockable.io/addpost', this.addedPost).then(function(data) {
        console.log(data);
      });
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 2em;

}

pre {
  color: white;
  word-wrap: break-word;
  /* IE 5.5-7 */
  white-space: -moz-pre-wrap;
  /* Firefox 1.0-2.0 */
  white-space: pre-wrap;
  /* current browsers */
}
</style>
