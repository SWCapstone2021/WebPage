<template>
  <base-section id="theme-features" dark class="primary">
    <base-section-heading dark class="primary--text" title="Download">
      <a
        href="https://chrome.google.com/webstore/category/extensions"
        class="white--text text-decoration-none"
      >
        Download Require to Install Chrome
      </a>
      <br />
      <span class="white--text"
        >Click Below to Get Latest Version from Chrome AppStore</span
      >
    </base-section-heading>

    <div class="d-flex justify-center">
      <v-btn
        elevation="0"
        large
        target="_blank"
        href="https://github.com/SWCapstone2021/chrome-extension/archive/refs/tags/v0.1.zip"
        class="secondary mx-auto mb-8"
        max-width="280"
      >
        <v-icon left>mdi-download</v-icon>
        Download Latest Version</v-btn
      >
    </div>
  </base-section>
</template>

<script>
export default {
  name: 'Fragment4',
}
</script>
