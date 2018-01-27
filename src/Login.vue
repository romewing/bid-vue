<template>
  <div class="main-container">
    <div class="main-content">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
          <div class="login-container">
            <div class="center">
              <h1>
                <i class="ace-icon fa fa-leaf green"></i>
                <span class="red">Ace</span>
                <span class="white" id="id-text2">Application</span>
              </h1>
              <h4 class="blue" id="id-company-text">&copy; Company Name</h4>
            </div>

            <div class="space-6"></div>

            <div class="position-relative">
              <login-box v-if="type===1" @forget-click="changeView(2)" @sigup-click="changeView(3)"></login-box>
              <forgot-box v-if="type===2" @login-click="changeView(1)"></forgot-box>
              <signup-box v-if="type===3" @login-click="changeView(1)"></signup-box>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginBox from './components/LoginBox'
  import ForgotBox from './components/ForgotBox'
  import SignupBox from './components/SignupBox'

  export default {
    name: 'app',
    computed: {
      title () {
        console.log(this.$store.state.System.title)
        return this.$store.state.System.title
      }
    },
    data () {
      return {
        type: 1
      }
    },
    components: {
      LoginBox,
      ForgotBox,
      SignupBox
    },
    methods: {
      changeView (type) {
        this.type = type
      }
    }
  }
</script>

<style>


</style>
