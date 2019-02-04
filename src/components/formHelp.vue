<template>
  <div>
    <b-card bg
                  text-variant="white"
                  
                  class="text-center navColor">

    <b-form>
      <b-form-group>
        <div id="form-header">
          <slot name="form-header">

          </slot>
        </div>
      </b-form-group>

      <div id="form-fields">
        <slot name="form-fields">

        </slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls">

        </slot>
       </div>

    </b-form>
  </b-card>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>
input {margin-top: 1em;
  margin-bottom: 1em },
b-card{
  margin-top: 2em;
}

</style>
