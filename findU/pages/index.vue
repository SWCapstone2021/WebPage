<template>
  <v-container>
    <v-row v-for="n in 2" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
      <v-col v-for="k in n + 1" :key="k">
        <v-btn large to="/Download">Download</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  layout: 'SampleLayout',
  data() {
    return {
      justify: ['start', 'center', 'end', 'space-around', 'space-between'],
      alignments: ['start', 'center', 'end'],
    }
  },
}
</script>
