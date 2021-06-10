<template>
  <base-section>
    <v-img
      :src="require('@/assets/logo-com.svg')"
      class="mx-auto mb-8"
      max-width="128"
    />

    <base-section-heading title="Subscription Plan">
      Get the PRO version of <strong>FindU</strong> and utilize vast
      functionality<br />with our smart AI <strong>FindBot</strong>
    </base-section-heading>

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7">
          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th class="text-body-1 font-weight-bold text-center">
                  What's in the Free version?
                </th>
                <th class="text-body-1 font-weight-bold text-center">
                  What's in the PRO version?
                </th>
              </tr>
            </thead>

            <tbody class="text-body-1">
              <tr v-for="([name, one, two], i) in features" :key="i">
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof two === 'boolean'">
                    <v-icon :color="two ? 'success' : 'error'">
                      mdi-{{ two ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ two }}
                  </template>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>

        <v-col cols="12" md="5">
          <v-card elevation="16" class="mb-12">
            <base-image max-width="100%" :src="require('@/assets/pro.jpg')" />
          </v-card>

          <div class="text-center">
            <v-btn
              :tile="false"
              min-width="164"
              class="font-weight-bold secondary rounded-pill"
              x-large
              rounded
              @click="isUserLogin"
            >
              Buy Pro Now

              <v-icon right> mdi-rocket </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
import BaseSection from '@/components/base/Section'
export default {
  name: 'Fragment5',
  components: { BaseSection },
  data: () => ({
    features: [
      ['Reliability Prediction', true, true],
      ['Searching Video', true, true],
      ['Advanced Searching Option', false, true],
      ['Video Summarization', false, true],
      ['Theme Customization', false, true],
      ['Price', 'Free', '$1/month'],
    ],
  }),
  methods: {
    isUserLogin() {
      if (
        this.$store.state.user !== null &&
        this.$store.state.user !== undefined
      ) {
        this.$route.push('/profile/subscribe')
      } else {
        alert('Login First')
      }
    },
  },
}
</script>
