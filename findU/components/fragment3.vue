<template>
  <base-section id="theme-features">
    <base-section-heading title="FindU Features">
      FindU give user a powerful functionalities saving users time and giving
      valuable informations. These below features show key features of our
      product.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12">
          <v-row>
            <v-col cols="12" md="6">
              <base-avatar-card v-bind="feature" align="left" horizontal>
                {{ feature.text }}
              </base-avatar-card>
            </v-col>
            <v-col cols="12" md="6">
              <iframe
                :src="feature.videoSrc"
                width="480"
                height="270"
                frameborder="0"
                framespacing="0"
              ></iframe>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionThemeFeatures',

  data: () => ({
    currentVideoSrc:
      'https://drive.google.com/file/d/174-2NffpHfFn_2L5qWjviegUvJhN5Rx9/preview',
    dialog: false,
    features: [
      {
        title: 'Generate Accurate SubText',
        icon: 'mdi-fountain-pen-tip',
        text: "Our STT model' is trained on AI HUB Data. This model can make so high quality subtext that user can have good experience.",
        videoSrc:
          'https://drive.google.com/file/d/174-2NffpHfFn_2L5qWjviegUvJhN5Rx9/preview',
      },
      {
        title: 'Calculate Keyword Based Reliability',
        icon: 'mdi-calculator-variant-outline',
        text: 'To give reliability per video during searching youtube, we calculate how many keywords are appear on subtext',
        videoSrc:
          'https://drive.google.com/file/d/17iq9wfw85UKb1Q4aPgfwos9zxZyX7fKr/preview',
      },
      {
        color: 'secondary',
        dark: true,
        title: 'Summarize Video',
        icon: 'mdi-lightbulb-on-outline',
        text: "You don't need to watch too long video all day, just read the core concept of video made by our summarization model",
        videoSrc:
          'https://drive.google.com/file/d/17kDDAgv7qTrNeIWb4VO5xS6WuQakQuPW/preview',
      },
      {
        title: 'Search Video Like Reading Text',
        icon: 'mdi-clipboard-text-search-outline',
        text: 'There are many occurrence where you only interested in specific information of video. In this case, you can search video like you do in text document',
        videoSrc:
          'https://drive.google.com/file/d/17vYfiM3OUCF5mywyZZs5jKJwqQsy25xQ/preview',
      },
      {
        title: 'Personalize Feature',
        icon: 'mdi-account',
        text: 'Plenty of Features are ready to use. Just pick your favorite options',
        videoSrc:
          'https://drive.google.com/file/d/174-2NffpHfFn_2L5qWjviegUvJhN5Rx9/preview',
      },
      {
        title: 'Visualize Result',
        icon: 'mdi-play-box-outline',
        text: "Isn't it too difficult to get used to new tool? Our tools give straightforward Searching Result and is designed with easy-to-use UI",
        videoSrc:
          'https://drive.google.com/file/d/17vloq8X_PUEPt0uxeqSoZelIqQBhtLpR/preview',
      },
    ],
  }),
  methods: {
    changeSrc(idx) {
      this.currentVideoSrc = this.features[idx].videoSrc
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
