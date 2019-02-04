<template>
  <div>
    <h1>{{title}}</h1>
    <form-helper>
      <div slot="form-header">
        <h3>Another form</h3>
      </div>
      <div slot="form-fields">
        <b-form-input type="text" placeholder="name" required />
        <b-form-input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <b-button v-on:click="submitHandle">Submit</b-button>
      </div>
    </form-helper>

  </div>
</template>

<script>
import formHelp from './formHelp.vue'

export default {
  components:{
    'form-helper':formHelp
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
