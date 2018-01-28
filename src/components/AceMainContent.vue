<template>
  <div class="main-content">
    <div class="main-content-inner">
      <ace-breadcrumbs></ace-breadcrumbs>
      <router-view class="page-content"></router-view>
    </div>
  </div>

</template>
<script>
  import AceBreadcrumbs from './AceBreadcrumbs'

  export default {
    name: 'main-content',
    components: {
      AceBreadcrumbs
    }
  }
</script>
<style>

</style>
