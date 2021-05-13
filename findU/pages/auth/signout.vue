<template>
  <v-card>
    <v-card-title>Sign Out</v-card-title>
    <v-card-text> You are signing out now... </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Signout',
  mounted() {
    if (this.$store.state.user) {
      this.$fire.auth
        .signOut()
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
</script>
