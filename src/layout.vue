<template>
    <div class="app-layout">
        <router-view></router-view>
    </div>
</template>

<script>
    import appMenu from './appMenu.vue'
    export default { 
        components: {
            appMenu
        }
    }
</script>