<template>
    <md-card class="md-layout-item">
        <md-card-header>
            <div class="md-title">Candidatos</div>
        </md-card-header>

        <md-card-content class="md-layout">
            <card-candidato
                    v-for="candidato in this.candidatos"
                    :key="candidato.id"
                    :candidato="candidato"
                    class="card-candidato"
            ></card-candidato>

            <md-card class="md-layout-item md-layout card-no-border">
                <md-button to="/candidatos" class="md-layout-item md-alignment-bottom-right">Ver Mais</md-button>
            </md-card>
        </md-card-content>
    </md-card>
</template>

<script>
    import CardCandidato from "./InfoCandidatos/CardCandidato.vue";
    import CandidatoResource from "@/resources/CandidatoResource";

    export default {
        name: "pages-home_info-candidatos",
        components: {
            "card-candidato": CardCandidato
        },
        data() {
            return {
                candidatos: []
            };
        },
        created() {
            this.loadCandidatos();
        },
        methods: {
            loadCandidatos() {
                CandidatoResource.getTop(5)
                    .then((candidatos) => {
                        this.candidatos = candidatos;
                    });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .card-candidato {
        margin: 5px;
    }
    .card-no-border {
        border: 0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
</style>