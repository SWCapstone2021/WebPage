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
                  <v-chip> {{ membership }} </v-chip>
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

                <div class="text-center">
                  <v-dialog v-model="dialog1" width="500">
                    <template #activator="{ on, attrs }">
                      <v-btn
                        class="red"
                        dark
                        width="150"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Check policy
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="headline grey lighten-2">
                        Privacy Policy
                      </v-card-title>

                      <v-card-text>
                        You agree with our term of service by sign in our web
                        page. If you do not agree with us, please delete your
                        account by clicking below red button yourself. We does
                        not prepare details of our system yet.
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog1 = false">
                          I accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
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

                <div class="text-center">
                  <v-dialog v-model="dialog2" width="500">
                    <template #activator="{ on, attrs }">
                      <v-btn
                        class="red"
                        dark
                        width="150"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Delete account
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="headline grey lighten-2">
                        Delete Account
                      </v-card-title>

                      <v-card-text>
                        This action cannot be undo. Do you really want to delete
                        user?
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-btn color="primary" text @click="dialog2 = false"
                          >Cancel
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="deleteUser"
                          >I want to Delete
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
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
import { mapGetters } from 'vuex'
export default {
  name: 'Account',
  components: { BaseSection },
  layout: 'DashboardLayout',
  data() {
    return {
      dialog1: false,
      dialog2: false,
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
    ...mapGetters(['isPro', 'membership']),
  },
  methods: {
    deleteUser() {
      this.dialog2 = false
      const user = this.$fire.auth.currentUser
      const prevThis = this
      user
        .delete()
        .then(function () {
          prevThis.$router.push('/')
        })
        .catch(function (error) {
          // An error happened.
          console.log(error)
        })
    },
  },
}
</script>
