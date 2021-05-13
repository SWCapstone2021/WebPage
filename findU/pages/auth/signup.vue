<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title> SignUp to FindU </v-card-title>
          <v-card-subtitle>
            This will send SignUp link to your email
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
                  <v-checkbox v-model="checkbox">
                    <template #label>
                      <div>
                        I agree with
                        <v-tooltip bottom>
                          <template #activator="{ on }">
                            <a @click="openDialog" v-on="on">
                              FindU's Policy
                            </a>
                          </template>
                          Opens in Dialog
                        </v-tooltip>
                      </div>
                    </template>
                  </v-checkbox>
                </v-row>
                <v-row>
                  <v-col md="12" class="d-flex justify-center">
                    <v-btn
                      :disabled="!valid || !checkbox"
                      color="success"
                      @click="sendEmail"
                      >Send Signup Link</v-btn
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
  name: 'SignIn',
  layout: 'SampleLayout',
  data() {
    return {
      valid: false,
      email: '',
      emailChecked: false,
      emailExist: false,
      checkbox: false,
      items: ['apple', 'pineapple', 'orange', 'melon'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        (v) => this.emailChecked || 'E-mail should be checked',
        (v) => this.emailExist || 'Given E-mail already exist, go to login',
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
    async openDialog() {
      // eslint-disable-next-line no-unused-vars
      const res = await this.$dialog.confirm({
        text: 'This is FindU Contract',
        title: 'Find U Policy Statement',
      })
    },
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
          this.emailExist = result.length !== 1
          this.$refs.form.validate()
          this.emailChecked = result.length !== 1
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
