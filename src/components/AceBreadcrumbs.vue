<template>
  <div class="breadcrumbs ace-save-state" id="breadcrumbs">
    <ul class="breadcrumb">
      <!--<li>
        <i class="ace-icon fa fa-home home-icon"></i>
        <a href="#">Home</a>
      </li>
      <li class="active">Dashboard</li>-->

      <li v-for="(breadcrumb, i) in breadcrumbs" v-if="i!=breadcrumbs.length-1">
        <i class="ace-icon fa" :class="breadcrumb.icon"></i>
        <a href="#" v-text="breadcrumb.text"></a>
      </li>
      <li class="active" v-text="breadcrumbs[breadcrumbs.length-1].text"></li>
    </ul><!-- /.breadcrumb -->

    <div class="nav-search" id="nav-search">
      <form class="form-search">
								<span class="input-icon">
									<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
									<i class="ace-icon fa fa-search nav-search-icon"></i>
								</span>
      </form>
    </div><!-- /.nav-search -->
  </div>

</template>
<script>
  export default {
    name: 'breadcrumbs',
    data () {
      return {
        breadcrumbs: [
          {
            icon: 'fa-home home-icon',
            text: '系统首页'
          },
          {
            icon: '',
            text: '系统控制台'
          }
        ]
      }
    }
  }
</script>
<style>

</style>
