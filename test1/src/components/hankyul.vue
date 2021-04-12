<template>
    <div>
        <h1>{{title}}</h1>
        <p>header</p>
        <slot name="header"></slot>
        <p>Body</p>
        <slot></slot>
        <p>footer</p>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>    
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: "Should select title"
        },
        name: {
            type: String,
            require: false,
            default: "Your Name"
        }
    },
    name: "hankyul",
    data() {
        return {
            // name: "hankyul"
        }
    },
    methods: {
        updateName() {
            this.name = "hankyul name updated";
        }
    }
}
</script>

<style scoped>

</style>