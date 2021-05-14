<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="text-center">
          <v-card-text class="text-h6 black--text"> Log in </v-card-text>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      prepend-inner-icon="mdi-email"
                      append-outer-icon="mdi-check"
                      clearable
                      required
                      outlined
                      @click:append-outer="validate"
                      @keydown.enter.prevent="validate"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-btn
                      block
                      :disabled="!valid"
                      color="secondary"
                      @click="sendEmail"
                      >Send Login Link</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4" class="d-flex justify-center">
        <v-btn
          class="text-none text-body-2 black--text"
          outlined
          text
          elevation="0"
          width="100%"
          to="/auth/signup"
        >
          Don't have a FindU account yet?
          <span class="text-none secondary--text"> Sign up </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  layout: 'AuthLayout',
  data() {
    return {
      valid: false,
      email: '',
      emailChecked: false,
      emailExist: false,
      items: ['apple', 'pineapple', 'orange', 'melon'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        (v) => this.emailChecked || 'E-mail should be checked',
        (v) => this.emailExist || 'Given E-mail does not exist, Sign Up First',
      ],
      actionCodeSettings: {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:3000/auth/redirect',
        // url: 'https://apcfindu.web.app/auth/redirect',
        // This must be true.
        handleCodeInApp: true,
        dynamicLinkDomain: 'apcfindu.page.link',
      },
    }
  },
  mounted() {
    if (this.$store.state.user) {
      this.$router.push('/')
    }
    this.resetValidation()
  },
  methods: {
    validate() {
      this.checkEmail()
    },
    sendEmail() {
      if (this.$refs.form.validate()) {
        this.$router.push('/auth/vertification')
        this.$fire.auth
          .sendSignInLinkToEmail(this.email, this.actionCodeSettings)
          .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', this.email)
            // ...
          })
          // eslint-disable-next-line node/handle-callback-err
          .catch((error) => {})
      }
      return false
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    checkEmail() {
      this.emailChecked = true
      this.$fire.auth
        .fetchSignInMethodsForEmail(this.email)
        .then((result) => {
          this.emailExist = result.length === 1
          this.$refs.form.validate()
          this.emailChecked = result.length === 1
          console.log(result, result.length)
        })
        .catch((error) => {
          console.log(error)
          this.emailExist = false
          this.$refs.form.validate()
        })
    },
  },
}
</script>
