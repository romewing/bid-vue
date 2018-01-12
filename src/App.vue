<template>
  <div id="app">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    title () {
      console.log(this.$store.state.System.title)
      return this.$store.state.System.title
    }
  }
}
</script>

<style>

</style>
