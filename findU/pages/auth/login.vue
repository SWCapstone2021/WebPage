<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title> Login to FindU </v-card-title>
          <v-card-subtitle>
            This will send login link to your email
          </v-card-subtitle>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      append-outer-icon="mdi-check"
                      clearable
                      required
                      @click:append-outer="validate"
                      @keydown.enter.prevent="validate"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="12" class="d-flex justify-center">
                    <v-btn :disabled="!valid" color="success" @click="sendEmail"
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
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  layout: 'SampleLayout',
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
        // This must be true.
        handleCodeInApp: true,
        dynamicLinkDomain: 'apcfindu.page.link',
      },
    }
  },
  mounted() {
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
