<template>
  <div class="main-container ace-save-state" id="main-container">
    <ace-sidebar></ace-sidebar>
    <ace-main-content></ace-main-content>
  </div>
</template>
<script>
  import AceSidebar from './AceSidebar'
  import AceMainContent from './AceMainContent'

  export default {
    name: 'main-container',
    components: {
      AceSidebar,
      AceMainContent
    }
  }
</script>
<style>

</style>
