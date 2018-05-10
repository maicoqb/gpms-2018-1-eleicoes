<template>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
            <div class="md-title">Resultados</div>
        </md-card-header>

        <md-card-content>
            <template
                    v-for="candidato in this.candidatos"
            >
                <p>{{candidato.nome_candidato}} - {{candidato.numero}} - {{candidato.cargo}} - {{candidato.regiao}} - {{candidato.votos}}</p>
            </template>
        </md-card-content>

        <md-card-actions>
            <md-button @click="carregarMaisResultados" class="md-primary" :disabled="sending">Carregar Mais</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    import VotoResource from "@/resources/VotoResource";

    export default {
        name: 'pages-boca-de-urna_result',

        data() {
            return {
                sending: false,

                candidatos: [],

                limit: 10,
                offset: 0,
                perPage: 10
            }
        },

        created() {
            this.carregarMaisVotados();
        },
        methods: {
            carregarMaisResultados: _.debounce(function() {
                this.offset += 1;
                this.limit = (this.offset+1) * this.perPage;

                this.carregarMaisVotados();
            }),
            carregarMaisVotados() {
                this.sending = true;
                VotoResource
                    .getTopRated(this.limit, this.offset)
                    .then((candidatos) => {
                        this.candidatos = this.candidatos.concat(candidatos);
                    })
                    .finally(() => this.sending = false);
            }
        }
    }
</script>