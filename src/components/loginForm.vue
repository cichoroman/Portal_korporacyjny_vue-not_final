<template>
  <div>
    <h1>{{title}}</h1>
    <form-helper>
      <div slot="form-header">
        <h3>Login form</h3>
      </div>
      <div slot="form-fields">
        <input type = "text" placeholder="name" required />
        <input type = "password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="submitHandle">Submit</button>
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
