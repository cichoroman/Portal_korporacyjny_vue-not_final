<template>
  <div>

    <form-helper>
      <div slot="form-header">
        <h3>Login form</h3>
      </div>
      <div slot="form-fields">
        <b-form-input type="text"  v-model="login.mailuid" placeholder="login" required />
        <b-form-input type="password" v-model="login.pwd" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <b-button variant="outline-primary" v-on:click="handleSubmit">Submit</b-button>
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
      login: {
      mailuid : "",
      pwd : ""
    }

    }
  },
  methods: {
    handleSubmit: function() {
      this.$http.post('http://localhost/api/loginsys/login.php', this.login).then(function(data) {
        console.log(data);
      });
    }
  }
}
</script>

<style>

</style>
