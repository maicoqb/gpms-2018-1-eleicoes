<template>
    <div class="page-container">
        <layout-header></layout-header>

        <div class="md-layout">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/App/Header.vue";

    export default {
        name: 'app',

        components: {
            "layout-header": Header,
        }
    }
</script>

<style>
</style>
