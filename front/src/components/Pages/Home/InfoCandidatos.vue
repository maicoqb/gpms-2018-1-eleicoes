<template>
    <md-card class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
        <md-card-header>
            <div class="md-title">Candidatos</div>
        </md-card-header>

        <md-card-content>
            <card-candidato
                    v-for="candidato in this.candidatos"
                    :key="candidato.id"
                    :candidato="candidato"
            ></card-candidato>
        </md-card-content>

        <md-card-actions>
            <md-button to="/candidatos">Ver Mais</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    import CardCandidato from "./InfoCandidatos/CardCandidato.vue";
    import CandidatoResource from "@/resources/CandidatoResource";

    export default {
        name: "pages-home_info-candidatos",
        data() {
            return {
                candidatos: []
            };
        },
        components: {
            "card-candidato": CardCandidato
        },
        created() {
            this.loadCandidatos();
        },
        methods: {
            loadCandidatos() {
                this.candidatos = CandidatoResource.getTop(10);
            }
        }
    };
</script>
