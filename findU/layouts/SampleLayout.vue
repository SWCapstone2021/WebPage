<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" fixed class="d-sm-none">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="require('@/assets/logo.svg')"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">FIND U</v-list-item-title>
            <v-list-item-subtitle>Find You Point</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            :to="item.to"
            nuxt
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat absolute class="background">
      <v-app-bar-nav-icon
        class="d-sm-none"
        @click="sideNav = !sideNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <NuxtLink to="/" class="d-flex">
          <v-img
            left
            :src="require('@/assets/logo.svg')"
            contain
            width="100%"
            max-width="46"
          ></v-img>
          <v-img
            left
            :src="require('@/assets/logo-name.svg')"
            contain
            width="100%"
            max-width="96"
          ></v-img>
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-for="(item, i) in menuItems"
        :key="i"
        class="d-none d-sm-inline"
      >
        <v-btn text :to="item.to" nuxt>
          <v-icon color="primary" left>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer dark padless absolute app>
      <v-card flat tile width="100%" class="primary white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in footerItems"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          This is made by APC for class of 2021 Spring AJOU SW CAPSTONE
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>APC</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'SampleLayout',
  data: () => ({
    sideNav: false,
    footerItems: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    selectedItem: 0,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
    userIsAuthenticated() {
      return this.user !== null && this.user !== undefined
    },
    menuItems() {
      let menuItems = [
        { text: 'Home', icon: 'mdi-home', to: '/' },
        { text: 'Sign Up', icon: 'mdi-face', to: '/auth/signup' },
        { text: 'Log In', icon: 'mdi-login', to: '/auth/login' },
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { text: 'Home', icon: 'mdi-home', to: '/' },
          { text: 'Profile', icon: 'mdi-account', to: '/profile/account' },
          { text: 'Sign Out', icon: 'mdi-logout', to: '/auth/signout' },
        ]
      }
      return menuItems
    },
  },
}
</script>
