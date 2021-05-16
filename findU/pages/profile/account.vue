<template>
  <base-section class>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-container>
          <p class="text-h5 font-weight-bold text-center">My Account</p>
          <v-card elevation="0" outlined class="d-flex pa-2 align-center">
            <v-card-text>
              <v-row>
                <v-col> Email </v-col>
                <v-col>
                  <v-chip> {{ userEmail }} </v-chip>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-col> Username </v-col>
                <v-col>
                  <v-chip> {{ userName }} </v-chip>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-col> FindU Subscription </v-col>
                <v-col>
                  <v-chip> {{ userMembership }} </v-chip>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <v-card
                elevation="0"
                outlined
                class="d-flex pa-2 align-center"
                style="border-color: red"
              >
                <v-card-text class="black--text"
                  >I agree with policy</v-card-text
                >
                <v-btn class="red" dark width="150">Check policy</v-btn>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card
                elevation="0"
                outlined
                class="d-flex pa-2 align-center"
                style="border-color: red"
              >
                <v-card-text class="black--text">Delete my account</v-card-text>
                <v-btn class="red" dark width="150">Delete account</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
import BaseSection from '@/components/base/Section'
export default {
  name: 'Account',
  components: { BaseSection },
  layout: 'DashboardLayout',
  data() {
    return {
      userMembership: 'Free',
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
  },
  mounted() {
    this.fetchMembership()
  },
  methods: {
    fetchMembership() {
      while (!this.user) {
        console.log('un fetched yet')
      }
      const prevThis = this
      const docRef = this.$fire.firestore.collection('user').doc(this.userEmail)
      // eslint-disable-next-line vue/no-async-in-computed-properties
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log('Document data:', doc.data())
            const data = doc.data()
            prevThis.userMembership = data.membership
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
    },
  },
}
</script>
