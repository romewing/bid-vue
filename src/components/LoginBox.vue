<template>
  <div id="login-box" class="login-box widget-box no-border" :class="{visible}">
    <div class="widget-body">
      <div class="widget-main">
        <h4 class="header blue lighter bigger">
          <i class="ace-icon fa fa-coffee green"></i>
          Please Enter Your Information
        </h4>

        <div class="space-6"></div>

        <form>
          <fieldset>
            <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" placeholder="Username" v-model="username"/>
															<i class="ace-icon fa fa-user"></i>
														</span>
            </label>

            <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" placeholder="Password" v-model="password"/>
															<i class="ace-icon fa fa-lock"></i>
														</span>
            </label>

            <div class="space"></div>

            <div class="clearfix">
              <label class="inline">
                <input type="checkbox" class="ace" v-model="rememberme"/>
                <span class="lbl"> Remember Me</span>
              </label>

              <button type="button" class="width-35 pull-right btn btn-sm btn-primary" @click="login">
                <i class="ace-icon fa fa-key"></i>
                <span class="bigger-110">Login</span>
              </button>
            </div>

            <div class="space-4"></div>
          </fieldset>
        </form>

        <div class="social-or-login center">
          <span class="bigger-110">Or Login Using</span>
        </div>

        <div class="space-6"></div>

        <div class="social-login center">
          <a class="btn btn-primary">
            <i class="ace-icon fa fa-facebook"></i>
          </a>

          <a class="btn btn-info">
            <i class="ace-icon fa fa-twitter"></i>
          </a>

          <a class="btn btn-danger">
            <i class="ace-icon fa fa-google-plus"></i>
          </a>
        </div>
      </div><!-- /.widget-main -->

      <div class="toolbar clearfix">
        <div>
          <a href="#" data-target="#forgot-box" class="forgot-password-link" @click="clickForget">
            <i class="ace-icon fa fa-arrow-left"></i>
            I forgot my password
          </a>
        </div>

        <div>
          <a href="#" data-target="#signup-box" class="user-signup-link" @click="clickSignup">
            I want to register
            <i class="ace-icon fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div><!-- /.widget-body -->
  </div><!-- /.login-box -->
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        rememberme: false
      }
    },
    props: {
      visible: {
        default: true,
        required: false
      }
    },
    methods: {
      clickForget () {
        this.$emit('forget-click')
      },
      clickSignup () {
        this.$emit('sigup-click')
      },
      login () {
        console.log(this.username, this.rememberme)
      }
    }
  }
</script>

<style>

</style>
