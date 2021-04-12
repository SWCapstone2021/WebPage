<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hankyul :title="title" name="hello">
      <template v-slot:header>
        <p>header1</p>
      </template>
      <template v-slot:default>
        <p>body1</p>
      </template>
    </hankyul>
  </div>
</template>

<script>
import hankyul from '@/components/hankyul.vue';

export default {
  components: {
    hankyul
  },
  data(){
    return {
      title:"about"
    }
  }
}
</script>
