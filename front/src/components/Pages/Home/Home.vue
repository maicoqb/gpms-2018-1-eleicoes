<template>
    <md-card>
        <md-card-content class="md-layout">

            <info-eleicoes class="info-card"></info-eleicoes>

            <md-card class="info-card md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
                <md-card-header>
                    <div class="md-title">Candidatos</div>
                </md-card-header>

                <md-card-content>
                    cards candidatos
                </md-card-content>
            </md-card>

            <div class="md-layout-item md-size-100">
                noticias
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
    import InfoEleicoes from "./InfoEleicoes.vue";
    //import Noticias from '@components/Pages/Home/Noticias.vue';
    //import InfoCandidatos from '@components/Pages/Home/InfoCandidatos.vue';

    export default {
        name: 'pages-home',

        components: {
            'info-eleicoes': InfoEleicoes
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