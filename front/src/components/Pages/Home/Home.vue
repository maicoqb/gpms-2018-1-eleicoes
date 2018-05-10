<template>
    <md-card class="info-card md-layout-item md-size-100">
        <md-card-content class="md-layout">
            <info-eleicoes class="info-card md-size-50 md-small-size-100 md-xsmall-size-100"></info-eleicoes>
            <info-candidatos class="info-card md-size-50 md-small-size-100 md-xsmall-size-100"></info-candidatos>
            <noticias class="info-card md-layout-item md-size-100"></noticias>
        </md-card-content>
    </md-card>
</template>

<script>
    import InfoEleicoes from "./InfoEleicoes.vue";
    import InfoCandidatos from './InfoCandidatos.vue';
    import Noticias from './Noticias.vue'

    export default {
        name: 'pages-home',

        components: {
            'info-eleicoes': InfoEleicoes,
            'info-candidatos': InfoCandidatos,
            'noticias': Noticias
        }
    }
</script>

<style lang="scss" scoped>
    .md-card.info-card {
        text-align: justify;
        border-color: transparent;
        box-shadow: none;
    }
</style>