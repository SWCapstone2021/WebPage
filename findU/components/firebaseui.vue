<template>
  <v-container>
    <h1 class="text-center">{{ title }}</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </v-container>
</template>

<script>
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'Firebaseui',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const firebaseui = require('firebaseui')
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(this.$fire.auth)
    }
    const prevThis = this
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          return true
        },
        uiShown() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none'
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      // eslint-disable-next-line no-undef
      signInSuccessUrl: `/profile/account`,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        prevThis.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
        prevThis.$fireModule.auth.FacebookAuthProvider.PROVIDER_ID,
        prevThis.$fireModule.auth.TwitterAuthProvider.PROVIDER_ID,
        prevThis.$fireModule.auth.GithubAuthProvider.PROVIDER_ID,
        prevThis.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      // tosUrl: '/profile',
      // Privacy policy url.
      // privacyPolicyUrl: '<your-privacy-policy-url>'
    }

    ui.start('#firebaseui-auth-container', uiConfig)
  },
}
</script>
