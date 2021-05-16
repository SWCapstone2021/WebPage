<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    class="base-body text-body-1"
  >
    <!-- Only use v-html for user data -->
    <div v-if="text" v-text="text" />

    <div v-else-if="html" v-html="html" />

    <slot v-else />
  </component>
</template>

<script>
export default {
  name: 'BaseBody',

  props: {
    html: String,
    maxWidth: {
      type: [Number, String],
      default: undefined,
    },
    space: {
      type: [Number, String],
      default: 10,
    },
    tag: {
      type: String,
      default: 'p',
    },
    text: String,
  },

  computed: {
    classes() {
      return ['grey--text', `text--center`, `mb-${this.space}`]
    },
    styles() {
      return {
        maxWidth: `${this.maxWidth}px`,
      }
    },
  },
}
</script>
