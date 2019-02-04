<template>
  <div>
    <b-container class="bv-example-row">
    <b-row>
        <b-col></b-col>
        <b-col>


    <h1>{{title}}</h1>


    <form-helper>
      <div slot="form-header">
        <h3>Another form</h3>
      </div>
      <div slot="form-fields">
        <b-form-input type = "text" placeholder="name" required />
        <input type = "password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="submitHandle">Submit</button>
      </div>
    </form-helper>

    <login-form></login-form>
</b-col>
<b-col></b-col>
</b-row>
</b-container>

  </div>
</template>

<script>
import formHelp from './components/formHelp.vue'
import loginForm from './components/loginForm.vue'
export default {
  components:{
    'form-helper':formHelp,
    'login-form':loginForm
  },
  data () {
    return {
      title:'App'
    }
  }
}
</script>

<style>

</style>
