<template>
  <div class="navbar-container ace-save-state" id="navbar-container">
    <ace-menu-toggler></ace-menu-toggler>
    <ace-navbar-title></ace-navbar-title>
    <ace-navbar-buttons></ace-navbar-buttons>
  </div>

</template>
<script>
  import AceMenuToggler from './AceMenuToggler'
  import AceNavbarTitle from './AceNavbarTitle'
  import AceNavbarButtons from './AceNavbarButtons'
  export default {
    name: '',
    components: {
      AceMenuToggler,
      AceNavbarTitle,
      AceNavbarButtons
    }
  }
</script>

<style>

</style>
