<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-container>
          <v-row>
            <v-col>
              <v-card ref="form" class="text-center">
                <v-card-text class="text-h6"> Create Account </v-card-text>
                <v-card-text>
                  <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Full Name"
                    placeholder="Hong Gil Dong"
                    clearable
                    required
                  ></v-text-field>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                  <v-btn text @click="cancel"> Cancel </v-btn>
                  <v-spacer></v-spacer>
                  <v-slide-x-reverse-transition>
                    <v-tooltip v-if="formHasErrors" left>
                      <template #activator="{ on, attrs }">
                        <v-btn
                          icon
                          class="my-0"
                          v-bind="attrs"
                          @click="resetForm"
                          v-on="on"
                        >
                          <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                      </template>
                      <span>Refresh form</span>
                    </v-tooltip>
                  </v-slide-x-reverse-transition>
                  <v-btn color="primary" text @click="submit"> Submit </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Newuser',
  layout: 'AuthLayout',
  data() {
    return {
      name: null,
      formHasErrors: false,
    }
  },
  computed: {
    form() {
      return {
        name: this.name,
      }
    },
  },
  watch: {
    name() {
      this.errorMessages = ''
    },
  },
  mounted() {
    if (this.$store.state.user) {
      this.$router.push('/')
    }
  },
  methods: {
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })

      if (!this.formHasErrors) {
        const user = this.$fire.auth.currentUser
        const prevThis = this
        console.log(prevThis.name)
        user
          .updateProfile({
            displayName: prevThis.name,
            photoURL: 'https://example.com/jane-q-user/profile.jpg',
          })
          .then(function () {
            // Update successful.
            prevThis.$store.commit('UPDATE_USER_INFO', {
              displayName: prevThis.name,
            })
            prevThis.$router.push('/')
          })
          .catch(function (error) {
            // An error happened.
            console.log(error)
          })
      }
    },
    cancel() {
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
