<template>
  <base-section class>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <p class="text-h5 font-weight-bold text-center">FindU Billing</p>
        <v-container>
          <v-row>
            <v-col>
              <v-card elevation="0" outlined class="d-flex pa-2 align-center">
                <v-card-text class="black--text"
                  >Change Subscription Status</v-card-text
                >
                <v-dialog v-model="dialog" width="1000" height="800">
                  <template #activator="{ on, attrs }">
                    <v-btn
                      class="secondary"
                      dark
                      width="250"
                      v-bind="attrs"
                      v-on="on"
                      >Change Subscription</v-btn
                    >
                  </template>
                  <payment></payment>
                </v-dialog>
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
                  <v-chip> {{ membership }} </v-chip>
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
import { mapGetters } from 'vuex'
export default {
  name: 'Billing',
  components: { BaseSection },
  layout: 'DashboardLayout',
  data() {
    return { dialog: false }
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
      return this.isPro ? '6$' : '0$'
    },
    ...mapGetters(['isPro', 'membership', 'lastOrderDate', 'nextOrderDate']),
  },
  methods: {
    updateToFree() {
      const prevThis = this
      this.$dialog
        .confirm({
          text: 'Do you really stop subscription?',
          title: 'Please confirm to continue',
        })
        .then(function (dialog) {
          console.log(dialog)
          if (dialog) {
            const userRef = prevThis.$fire.firestore.collection('user')

            userRef.doc(prevThis.userEmail).set({
              membership: 'Free',
            })
            prevThis.userMembership = 'Free'
          } else {
            console.log('Clicked on cancel!')
          }
        })
        .catch(function (error) {
          console.log(error)
          console.log('Clicked on cancel')
        })
    },
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
  },
}
</script>
