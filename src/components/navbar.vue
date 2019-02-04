<template>
  <div>
    <b-navbar class="nawigacja" toggleable="md" type="dark" >

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Two heads are better than one</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="ml-auto">


      <slot name="menu">

      </slot>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>



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

<style>
.nawigacja{
  background-color: lightblue;
}
</style>
