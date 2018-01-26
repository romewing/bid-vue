<template>
  <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
    <span class="sr-only">Toggle sidebar</span>

    <span class="icon-bar"></span>

    <span class="icon-bar"></span>

    <span class="icon-bar"></span>
  </button>

</template>

<script>
  export default {
    name: 'menu-toggle',
    data () {
      return {
        num: 3
      }
    }
  }
</script>
