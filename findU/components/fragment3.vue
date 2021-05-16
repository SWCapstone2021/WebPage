<template>
  <base-section id="theme-features">
    <base-section-heading title="FindU Features">
      FindU give user a powerful functionalities saving users time and giving
      valuable informations. These below features show key features of our
      product.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
          <base-avatar-card v-bind="feature" align="left" horizontal>
            {{ feature.text }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionThemeFeatures',

  data: () => ({
    features: [
      {
        title: 'Generate Accurate SubText',
        icon: 'mdi-fountain-pen-tip',
        text: "Our STT model' is trained on AI HUB Data. This model can make so high quality subtext that user can have good experience.",
      },
      {
        title: 'Calculate Keyword Based Reliability',
        icon: 'mdi-calculator-variant-outline',
        text: 'To give reliability per video during searching youtube, we calculate how many keywords are appear on subtext',
      },
      {
        color: 'secondary',
        dark: true,
        title: 'Summarize Video',
        icon: 'mdi-lightbulb-on-outline',
        text: "You don't need to watch too long video all day, just read the core concept of video made by our summarization model",
      },
      {
        title: 'Search Video Like Reading Text',
        icon: 'mdi-clipboard-text-search-outline',
        text: 'There are many occurrence where you only interested in specific information of video. In this case, you can search video like you do in text document',
      },
      {
        title: 'Personalize Feature',
        icon: 'mdi-account',
        text: 'Plenty of Features are ready to use. Just pick your favorite options',
      },
      {
        title: 'Visualize Result',
        icon: 'mdi-play-box-outline',
        text: "Isn't it too difficult to get used to new tool? Our tools give straightforward Searching Result and is designed with easy-to-use UI",
      },
    ],
  }),
}
</script>
