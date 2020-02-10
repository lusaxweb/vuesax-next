<template>
  <div class="center">
    <vs-button border icon @click="openNotificationUser">
      Example User
    </vs-button>
    <vs-button border icon @click="openNotificationCookie">
      Example Cookie
    </vs-button>
    <vs-button border icon @click="openNotificationCall">
      Example Call
    </vs-button>
  </div>
</template>
<script>
import user from './user.vue'
import cookie from './cookie.vue'
import call from './call.vue'
export default {
  methods: {
    openNotificationCookie() {
      const noti = this.$vs.notification({
        duration: 'none',
        content: cookie,
      })
    },
    openNotificationUser() {
      const noti = this.$vs.notification({
        duration: 'none',
        width: 'auto',
        content: user,
      })
    },
    openNotificationCall() {
      const noti = this.$vs.notification({
        duration: 'none',
        width: 'auto',
        content: call,
        notPadding: true,
      })
    }
  }
}
</script>
