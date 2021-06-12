<template>
  <v-btn
    :color="color"
    :depressed="depressed"
    :min-width="minWidth"
    :tile="tile"
    class="font-weight-bold secondary rounded-pill"
    x-large
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseBtn',

  props: {
    color: {
      type: String,
      default: 'secondary',
    },
    depressed: {
      type: Boolean,
      default: true,
    },
    minWidth: {
      type: [Number, String],
      default: 164,
    },
    tile: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
