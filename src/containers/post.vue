<template>
    <div class="wrapper">
        <text class="weex">Hello From Post</text>
        <text @click="home">Home</text>

    </div>
</template>

<script>
    export default {
        methods: {
            home(){
                this.$router.push('/')
            }
        }
    }
</script>