<template>
  <base-section class>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <p class="text-h5 font-weight-bold text-center">FindU Billing</p>
        <v-container>
          <v-row>
            <v-col>
              <v-card elevation="0" outlined class="d-flex pa-2 align-center">
                <v-card-text class="black--text">Payment Method</v-card-text>
                <v-btn class="secondary" dark width="250"
                  >Update Payment Method</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card elevation="0" outlined class="d-flex pa-2 align-center">
                <v-card-text class="black--text"
                  >Change Subscription</v-card-text
                >
                <v-btn class="secondary" dark width="250" click="updateToFree"
                  >Stop Subscription</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-card elevation="0" outlined class="d-flex pa-2 align-center">
            <v-card-text class="black--text">
              <v-row>
                <v-col> FindU Subscription </v-col>
                <v-col>
                  <v-chip> {{ userMembership }} </v-chip>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-col> Last Order Date </v-col>
                <v-col>
                  <v-chip> {{ lastOrderDate }} </v-chip>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-col> Next Order Date </v-col>
                <v-col>
                  <v-chip> {{ nextOrderDate }} </v-chip>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-col> Next Payment Amount </v-col>
                <v-col>
                  <v-chip> {{ paymentAmount }} </v-chip>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
import BaseSection from '@/components/base/Section'
export default {
  name: 'Billing',
  components: { BaseSection },
  layout: 'DashboardLayout',
  data() {
    return {
      userMembership: 'Free',
      lastOrderDate: 'Not Available',
      nextOrderDate: 'Not Available',
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
    userID() {
      return this.user ? this.user.userId : '0'
    },
    paymentAmount() {
      return this.userMembership === 'PRO' ? '6$' : '0$'
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
            if (data.membership === 'PRO') {
              prevThis.lastOrderDate = data.last_order
              prevThis.nextOrderDate = data.next_order
            }
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error)
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
