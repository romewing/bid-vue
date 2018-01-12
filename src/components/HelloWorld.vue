<template>
  <div class="hello">
    <input v-model="msg"/>
    {{msg}}
    <span v-for="item in list" v-text="item" v-on:click="click(item)"></span>
    <router-link to="/a">Go to A</router-link>
    <router-link to="/b">Go to B</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        list: ['apple', 'bannaer']
      }
    },
    methods: {
      click (msg) {
        alert(msg)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
