<template>
  <v-card elevation="0">
    <v-card-title> Log in Link has been sent to your Mailbox </v-card-title>
    <v-card-text>
      Please check your email. If there is no new email, check your spam box or
      <nuxt-link to="/auth/login">resend email</nuxt-link>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Vertification',
  layout: 'SampleLayout',
}
</script>
