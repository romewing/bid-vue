<template>
  <body class="no-skin">
  <ace-navebar></ace-navebar>
  <ace-main-container></ace-main-container>

  </body>
</template>
<script>
  import AceNavebar from './components/AceNavebar'
  import AceMainContainer from './components/AceMainContainer'

  export default {
    name: 'index',
    data () {
      return {}
    },
    components: {
      AceNavebar,
      AceMainContainer
    }
  }
</script>

<style>


</style>
