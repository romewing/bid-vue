<template>
  <div class="navbar-buttons navbar-header pull-right" role="navigation">
    <ul class="nav ace-nav">
      <ace-task-navbar-button></ace-task-navbar-button>
      <ace-message-navbar-button></ace-message-navbar-button>
      <ace-notifications-navbar-button></ace-notifications-navbar-button>
      <ace-navbar-user></ace-navbar-user>
    </ul>
  </div>

</template>

<script>
  import AceTaskNavbarButton from './AceTaskNavbarButton'
  import AceMessageNavbarButton from './AceMessageNavbarButton'
  import AceNotificationsNavbarButton from './AceNotificationsNavbarButton'
  import AceNavbarUser from './AceNavbarUser'

  export default {
    name: 'navbar-buttons',
    components: {
      AceTaskNavbarButton,
      AceMessageNavbarButton,
      AceNotificationsNavbarButton,
      AceNavbarUser
    }
  }
</script>


<style>

</style>
