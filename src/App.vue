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
              <login-box v-if="type===1" @forget-click="clickForget" @sigup-click="clickSignup"></login-box>
              <forgot-box v-if="type===2" @login-click="clickLogin"></forgot-box>
              <signup-box v-if="type===3" @login-click="clickLogin"></signup-box>
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
      clickForget () {
        this.type = 2
      },
      clickSignup () {
        this.type = 3
      },
      clickLogin () {
        this.type = 1
      }
    }
  }
</script>

<style>


</style>
