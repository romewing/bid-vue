<template>
  <div :id="id" class="navbar navbar-default    navbar-collapse       ace-save-state">
    <slot name="navbar-container"></slot>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        id: 'navbar'
      }
    },
    components: {
    }
  }
</script>
