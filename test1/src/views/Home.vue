<template>
  <div>
    <h1>
      This is Home page
    </h1>
    <form action="">
      <InputField v-model="name"/>
    </form>
    {{ name }}
    <hankyul title="Home"/>
  </div>  
</template>

<script>
import hankyul from '@/components/hankyul.vue';
import InputField from '@/components/InputField.vue'

export default {
  components:{
    hankyul,
    InputField
  },

  data() {
    return {
      name: ""
    }
  },
  
  methods:{
    updateName(name){
      this.name = name;
    }
  },

  
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>

