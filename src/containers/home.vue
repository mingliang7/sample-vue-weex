<template>
    <div class="wrapper">
        <text class="weex">Hello From Home</text>
        <text @click="gotoPost">Go to post</text>
    </div>
</template>

<script>
    export default {
        methods: {
            gotoPost(){
                this.$router.push('post')
            }
        }
    }
</script>