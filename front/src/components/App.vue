<template>
    <div class="page-container">
        <layout-header></layout-header>

        <div class="md-layout container-wrapper">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import Header from "@/components/App/Header.vue";

    export default {
        name: 'app',

        components: {
            "layout-header": Header
        }
    }
</script>

<style>
    .page-container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 600px) {
        .page-container {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        .page-container {
            max-width: 720px;
        }
    }

    @media (min-width: 945px) {
        .page-container {
            max-width: 920px;
        }
    }

    @media (min-width: 1200px) {
        .page-container {
            max-width: 1140px;
        }
    }
</style>
