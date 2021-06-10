<template>
  <base-section class>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-container>
          <p class="text-h5 font-weight-bold text-center">FindU Subscription</p>
          <v-divider class="my-5"></v-divider>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-hover v-slot="{ hover }">
                  <v-card
                    :elevation="!isPro ? 12 : hover ? 12 : 2"
                    :class="{
                      'on-hover': !isPro ? true : hover,
                    }"
                    class="mx-auto"
                  >
                    <v-img :src="require('@/assets/free.jpg')" height="200px">
                    </v-img>
                    <v-card-title>Free</v-card-title>
                    <v-card-subtitle> 0$ per month </v-card-subtitle>
                    <v-card-text>
                      <div
                        v-for="(item, idx) in memberFree"
                        :key="idx"
                        class="d-flex align-center"
                      >
                        <v-icon :color="item.can ? 'success' : 'error'">
                          mdi-{{ item.can ? 'check' : 'close' }}
                        </v-icon>
                        <span>{{ item.description }}</span>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12" md="6">
                <v-hover v-slot="{ hover }">
                  <v-card
                    :elevation="isPro ? 12 : hover ? 12 : 2"
                    :class="{
                      'on-hover': isPro ? true : hover,
                    }"
                    class="mx-auto"
                  >
                    <v-img
                      :src="require('@/assets/preminum.jpg')"
                      height="200px"
                    ></v-img>
                    <v-card-title>Pro</v-card-title>
                    <v-card-subtitle> 1$ per month </v-card-subtitle>
                    <v-card-text>
                      <div
                        v-for="(item, idx) in memberPro"
                        :key="idx"
                        class="d-flex align-center"
                      >
                        <v-icon :color="item.can ? 'success' : 'error'">
                          mdi-{{ item.can ? 'check' : 'close' }}
                        </v-icon>
                        <span>{{ item.description }}</span>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn
                        :disabled="isPro"
                        text
                        color="teal accent-4"
                        @click="upgradeToPro"
                      >
                        {{ proBTN }}
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseSection from '@/components/base/Section'
export default {
  name: 'Subscribe',
  components: { BaseSection },
  layout: 'DashboardLayout',
  data() {
    return {
      memberFree: [
        { description: 'enhance search result by reliability', can: true },
        { description: 'find video by using keyword', can: true },
        { description: 'read summary of video', can: false },
      ],
      memberPro: [
        { description: 'enhance search result by reliability', can: true },
        { description: 'find video by using keyword', can: true },
        { description: 'find video with advanced option', can: true },
        { description: 'read summary of video', can: true },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    userName() {
      return this.user ? this.user.displayName : 'APC'
    },
    userEmail() {
      return this.user ? this.user.email : 'example@abcd.email'
    },
    proBTN() {
      return this.isPro ? 'Currently Using it' : 'Upgrade to PRO'
    },
    ...mapGetters(['isPro']),
  },
  mounted() {
    if (!this.$store.state.user) {
      this.$router.push({ path: '/auth/login' })
    }
  },
  methods: {
    upgradeToPro() {
      const prevThis = this
      this.$dialog
        .confirm({
          text: 'This is FindU Agreement Statement',
          title: 'Please confirm to continue',
        })
        .then(function (dialog) {
          if (dialog) {
            console.log('Clicked on proceed!')
            prevThis.$router.push('/profile/purchase')
          } else {
            console.log('Clicked on cancel!')
          }
        })
        .catch(function () {
          console.log('Clicked on cancel')
        })
    },
    updateToFree() {
      const userRef = this.$fire.firestore.collection('user')

      userRef.doc(this.userEmail).set({
        membership: 'Free',
      })
    },
  },
}
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>
