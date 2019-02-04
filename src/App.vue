<template>
<div>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col>


        <h1>{{title}}</h1>



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
  components: {
    'form-helper': formHelp,
    'login-form': loginForm
  },
  data() {
    return {
      title: 'App'
    }
  }
}
</script>

<style>

</style>
