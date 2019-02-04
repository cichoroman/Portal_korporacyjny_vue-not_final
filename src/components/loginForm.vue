<template>
  <div>

    <form-helper>
      <div slot="form-header">
        <h3>Login form</h3>
      </div>
      <div slot="form-fields">
        <b-form-input type="text" placeholder="login" required />
        <b-form-input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <b-button variant="outline-primary" v-on:click="submitHandle">Submit</b-button>
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
