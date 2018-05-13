<template>
    <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
            <div class="md-title">Resultados</div>
        </md-card-header>

        <md-card-content>
            <div class="md-layout">
                <md-field class="md-layout-item filtro-resultados">
                    <label for="cargo">Cargo</label>
                    <md-select name="cargo" id="cargo" v-model="filtro.cargo" md-dense :disabled="sending">
                        <md-option></md-option>
                        <md-option
                                v-for="cargo in this.input.cargos"
                                :key="cargo.cargo"
                                :value="cargo.cargo"
                        >{{cargo.cargo}}
                        </md-option>
                    </md-select>
                </md-field>

                <md-field class="md-layout-item filtro-resultados">
                    <label for="regiao">Região</label>
                    <md-select name="regiao" id="regiao" v-model="filtro.regiao" md-dense :disabled="sending">
                        <md-option></md-option>
                        <md-option
                                v-for="regiao in this.input.regioes"
                                :key="regiao.regiao"
                                :value="regiao.regiao"
                        >{{regiao.regiao}}
                        </md-option>
                    </md-select>
                </md-field>
            </div>

            <md-table>
                <md-table-row>
                    <md-table-cell>Nome Candidato</md-table-cell>
                    <md-table-cell>Numero de Votação</md-table-cell>
                    <md-table-cell>Cargo</md-table-cell>
                    <md-table-cell>Região</md-table-cell>
                    <md-table-cell>Quantidade de Votos</md-table-cell>
                </md-table-row>

                <md-table-row v-for="candidato in this.candidatos">
                    <md-table-cell>{{candidato.nome_candidato}}</md-table-cell>
                    <md-table-cell>{{candidato.numero}}</md-table-cell>
                    <md-table-cell>{{candidato.cargo}}</md-table-cell>
                    <md-table-cell>{{candidato.regiao}}</md-table-cell>
                    <md-table-cell>{{candidato.votos}}</md-table-cell>
                </md-table-row>
            </md-table>
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

                filtro: {
                    cargo: null,
                    regiao: null,
                    limit: 10,
                    offset: 0
                },

                input: {
                    cargos: [],
                    regioes: []
                },

                candidatos: [],

                perPage: 10
            }
        },

        watch: {
            'filtro.cargo': function() {
                this.carregarMaisVotados(false);
            },
            'filtro.regiao': function() {
                this.carregarMaisVotados(false);
            },
        },

        created() {
            this.carregarRegioes();
            this.carregarCargos();
            this.carregarMaisVotados();
        },

        methods: {
            carregarRegioes() {
                this.sending = true;
                VotoResource
                    .getRegioes()
                    .then((regioes) => {
                        this.input.regioes = regioes;
                    })
                    .finally(() => this.sending = false);
            },

            carregarCargos() {
                this.sending = true;
                VotoResource
                    .getCargos()
                    .then((cargos) => {
                        this.input.cargos = cargos;
                    })
                    .finally(() => this.sending = false);
            }
            ,

            carregarMaisResultados: _.debounce(function() {
                this.filtro.offset += 1;
                this.filtro.limit = (this.filtro.offset+1) * this.perPage;

                this.carregarMaisVotados();
            }),
            carregarMaisVotados(append=true) {
                this.sending = true;
                VotoResource
                    .getTopRated(this.filtro)
                    .then((candidatos) => {
                        if(!append) {
                            this.candidatos = candidatos
                        } else {
                            this.candidatos = this.candidatos.concat(candidatos);
                        }
                    })
                    .finally(() => this.sending = false);
            }
        }
    }
</script>

<style>
    .filtro-resultados {
        margin: 5px;
    }
</style>