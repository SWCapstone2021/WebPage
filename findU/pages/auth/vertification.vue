<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="text-center">
          <v-card-text class="text-h6 black--text"> Link Sent </v-card-text>
          <v-card-text> Link has been sent to your Mailbox </v-card-text>
          <v-card-text>
            Please check your email. If there is no new email, check your spam
            box or resent email
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4" class="d-flex justify-center">
        <v-btn
          class="text-none text-body-2 black--text"
          outlined
          text
          elevation="0"
          width="100%"
          to="/auth/login"
        >
          <nuxt-link to=""></nuxt-link>
          Don't receive e-mail yet?
          <span class="text-none secondary--text"> Resend Email </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Vertification',
  layout: 'AuthLayout',
  mounted() {
    if (this.$store.state.user) {
      this.$router.push('/')
    }
  },
}
</script>
