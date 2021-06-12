<template>
  <v-container fluid class="ma-0 pa-0">
    <Fragment1></Fragment1>
    <Fragment2></Fragment2>
    <Fragment3></Fragment3>
    <Fragment4></Fragment4>
    <Fragment5></Fragment5>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  layout: 'SampleLayout',
  data() {
    return {}
  },
  mounted() {
    console.log('process', this.$config.baseURL)
  },
  created() {
    this.mock()
  },
  methods: {
    mock() {},
  },
}
</script>
