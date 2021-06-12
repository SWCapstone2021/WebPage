<template>
  <v-app style="background: #fafafa">
    <v-card
      style="background: #fafafa"
      flat
      tile
      width="100%"
      class="d-flex justify-center mt-10"
      app
    >
      <v-img
        :src="require('@/assets/logo-name.svg')"
        contain
        width="100%"
        max-width="100"
      ></v-img>
    </v-card>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer light padless absolute class="mb-10" app>
      <v-card
        style="background: #fafafa"
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-title class="d-flex justify-center">
          <v-img
            :src="require('@/assets/logo-black.svg')"
            contain
            width="100%"
            max-width="30"
          ></v-img>
        </v-card-title>
        <v-card-text>
          <nuxt-link class="black--text text-decoration-none" to="/"
            >Privacy</nuxt-link
          >
          <span>|</span>
          <nuxt-link class="black--text text-decoration-none" to="/"
            >@ APC 2021
          </nuxt-link>
          <span>|</span>
          <a
            class="black--text text-decoration-none"
            href="mailto:consistant1y@ajou.ac.kr"
            >Contact us</a
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
  data() {
    return {}
  },
}
</script>
