<template>
  <ul class="nav nav-list">
    <li v-for="item in items">
      <router-link :to="item.path||'#'" :class="{'dropdown-toggle': item.children!=0}">
        <i class="menu-icon fa fa-tachometer"></i>
        <span class="menu-text" v-text="item.name"></span>
        <b class="arrow fa fa-angle-down" v-if="item.children.length!=0"></b>
      </router-link>
      <b class="arrow"></b>
      <ul class="submenu" v-if="item.children.length!=0">
        <li class="" v-for="child in item.children">
          <a :href="child.path">
            <i class="menu-icon fa fa-caret-right"></i>
            {{child.name}}
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>

  </ul>
</template>
<script>
  export default {
    name: 'navList',
    data () {
      return {
        items: [
          {
            name: '系统首页',
            path: '/dashboard',
            children: []
          },
          {
            name: '市场信息',
            path: '',
            children: [
              {
                name: '招标公告',
                path: '/info/biding'
              },
              {
                name: '中标公告',
                path: '/info/bided'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style>

</style>
