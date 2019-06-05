<template>
<div>
  <form-helper>
    <div slot="form-header">
      <h1>Add post</h1>
    </div>
    <div slot="form-fields">
      <b-form-group id="fieldset1" label="Enter the title" label-for="select-topic">
        <b-form-input v-model="addedPost.title" type="text" placeholder="title" required />
      </b-form-group>
      <b-form-group id="fieldset1" label="Enter the content or specific question" label-for="select-topic">
        <b-form-textarea v-model="addedPost.content" type="text" placeholder="Your post or question" :rows="3" :max-rows="6" required />
      </b-form-group>
      <b-form-group id="fieldset1" description="If there is no matching topic, contact the administrator." label="Choose the topic from the list" label-for="select-topic">
        <b-form-select v-model="addedPost.selectedTopic" id="select-topic">
          <option v-for="topic in topics">{{topic.name}}</option>
        </b-form-select>
      </b-form-group>
    </div>
    <div slot="form-controls">
      <b-button variant="primary" v-on:click="showPrewiew = !showPrewiew">Show post preview</b-button>
      <b-button variant="primary" v-on:click.prevent="handleSubmit">Submit</b-button>
    </div>
  </form-helper>
  <b-jumbotron bg text-variant="white" border-variant="dark" class="navColor">
    <template>
      <pre v-show="showPrewiew">
        <h1>{{addedPost.selectedTopic}}</h1>
        <h2>{{addedPost.title}}</h2>
        <p>{{addedPost.content}}</p>
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

      addedPost: {
        title: "",
        content: "",
        selectedTopic: ""
      },

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
    handleSubmit: function() {

      //ustawiony  adres zgodny z tym zdefiniowanym w proxy w pliku webpack.config to plus origin * w backendzie pozwala sie łaczyć
      this.$http.post('/api/post/create.php', this.addedPost)
        .then(response => {
          // success callback
        }, response => {

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
