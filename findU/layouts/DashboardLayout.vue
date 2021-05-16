<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" absolute temporary app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-avatar color="primary" class="text-uppercase">{{
              userNameCap
            }}</v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ userName }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in navItems"
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
    <v-app-bar flat absolute app class="primary" height="40">
      <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
      <nuxt-link to="/profile/account">
        <span
          class="
            text-decoration-none text-h6
            background--text
            font-weight-medium
          "
          >FINDU</span
        >
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-for="(item, i) in menuItems"
        :key="i"
        class="d-none d-sm-inline"
      >
        <v-btn text :to="item.to" nuxt>
          <v-icon color="background">{{ item.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
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
    navItems: [
      { text: 'Account', icon: 'mdi-account', to: '/profile/account' },
      {
        text: 'FindU Subscribe',
        icon: 'mdi-youtube-subscription',
        to: '/profile/subscribe',
      },
      {
        text: 'FindU Billing',
        icon: 'mdi-credit-card',
        to: '/profile/billing',
      },
      { text: 'Home', icon: 'mdi-home', to: '/' },
      { text: 'Sign Out', icon: 'mdi-logout', to: '/auth/signout' },
    ],
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
    userNameCap() {
      if (this.userIsAuthenticated) {
        return this.user.displayName[0]
      } else {
        return 'A'
      }
    },
    userName() {
      return this.userIsAuthenticated ? this.user.displayName : 'APC'
    },
    userIsAuthenticated() {
      return this.user !== null && this.user !== undefined
    },
    menuItems() {
      const menuItems = [
        { text: 'Home', icon: 'mdi-home', to: '/' },
        { text: 'Sign Out', icon: 'mdi-logout', to: '/auth/signout' },
      ]
      return menuItems
    },
  },
  mounted() {
    if (!this.userIsAuthenticated) {
      this.$router.push('/')
    }
  },
}
</script>
