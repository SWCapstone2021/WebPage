<template>
  <div :class="classes">
    <base-avatar
      v-if="icon"
      :icon="icon"
      :outlined="outlined"
      class="mb-4"
      color="primary"
      dark
    />

    <base-subtitle v-if="subtitle" :title="subtitle" space="1" tag="h2" />

    <base-subheading
      v-if="title"
      :align="align"
      :title="title"
      class="text-uppercase"
      space="2"
    />

    <base-divider :color="color" />

    <base-body v-if="$slots.default || text" class="mx-auto" max-width="700">
      <slot v-if="$slots.default" />

      <template v-else>
        {{ text }}
      </template>
    </base-body>
  </div>
</template>

<script>
import BaseSubheading from '@/components/base/SubHeading'
export default {
  name: 'SectionHeading',
  components: { BaseSubheading },
  props: {
    align: {
      type: String,
      default: 'center',
    },
    color: {
      type: String,
      default: 'primary',
    },
    icon: String,
    outlined: Boolean,
    space: {
      type: [Number, String],
      default: 12,
    },
    subtitle: String,
    text: String,
    title: String,
  },

  computed: {
    classes() {
      return [`text-${this.align}`, `mb-${this.space}`]
    },
  },
}
</script>
