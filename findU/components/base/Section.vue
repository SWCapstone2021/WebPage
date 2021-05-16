<template>
  <v-sheet :style="style" tile v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-sheet>
</template>

<script>
export default {
  name: 'BaseSection',

  props: {
    space: {
      type: [Number, String],
      default: 96,
    },
  },

  computed: {
    style() {
      const space = this.$vuetify.breakpoint.mdAndUp
        ? this.space
        : this.space / 2
      return { padding: `${space}px 0` }
    },
  },
}
</script>
