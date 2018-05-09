<template>
    <md-card>
        <md-card-content class="md-layout">

            <info-eleicoes class="info-card"></info-eleicoes>

            <info-candidatos class="info-card"></info-candidatos>

            <div class="md-layout-item md-size-100">
                noticias
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
    import InfoEleicoes from "./InfoEleicoes.vue";
    import InfoCandidatos from './InfoCandidatos.vue';
    //import Noticias from '@components/Pages/Home/Noticias.vue';

    export default {
        name: 'pages-home',

        components: {
            'info-eleicoes': InfoEleicoes,
            'info-candidatos': InfoCandidatos
        }
    }
</script>

<style>
    .md-card.info-card {
        text-align: justify;
        border-color: transparent;
        box-shadow: none;
    }
</style>