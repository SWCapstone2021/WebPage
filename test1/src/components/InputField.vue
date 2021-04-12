<template>
    <div>
        <label for="">Name</label>
        <input type="text" :value="value" @input="$emit('input', $event.target.value)" style="padding: 30px; border: 2px solid green">
        <br><button submit>Submit</button>
    </div>
</template>

<script>
export default {
    name:"InputField",
    props:{
        value:{
            type:String,
            required:true,
        }
    },
    methods:{
        updateName(e){
            console.log(e.target.value);
            this.$emit('update-name', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>