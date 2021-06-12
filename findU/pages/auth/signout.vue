<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="text-center">
          <v-card-text class="text-h6 black--text"> Sign Out </v-card-text>
          <v-card-text> You are signing out now... </v-card-text>
          <v-card-text>
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Signout',
  layout: 'AuthLayout',
  mounted() {
    if (this.$store.state.user) {
      this.$fire.auth
        .signOut()
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
          this.$router.push('/')
        })
    } else {
      this.$router.push('/')
    }
  },
}
</script>
