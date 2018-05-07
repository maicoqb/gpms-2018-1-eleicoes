<template>
    <app-layout>
        <div slot="content">
            It`s ok!
            <!--<pages-home v-if="isPage(Pages.HOME_PAGE)"></pages-home>-->
            <!--<pages-home v-if="isPage(Pages.BOCA_DE_URNA)"></pages-home>-->
        </div>
    </app-layout>
</template>

<script>
    //import Layout from '@components/App/Layout.vue';

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            //    'app-layout': Layout
        }
    }
</script>

<style>
</style>
