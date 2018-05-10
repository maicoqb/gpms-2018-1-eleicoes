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
                                v-for="(cargo, key) in this.input.cargos"
                                :key="key"
                                :value="key"
                        >{{cargo}}
                        </md-option>
                    </md-select>
                </md-field>

                <md-field class="md-layout-item filtro-resultados">
                    <label for="regiao">Região</label>
                    <md-select name="regiao" id="regiao" v-model="filtro.regiao" md-dense :disabled="sending">
                        <md-option></md-option>
                        <md-option
                                v-for="(regiao, key) in this.input.regioes"
                                :key="key"
                                :value="key"
                        >{{regiao}}
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

        created() {
            this.carregarMaisVotados();
        },
        methods: {
            carregarMaisResultados: _.debounce(function() {
                this.filtro.offset += 1;
                this.filtro.limit = (this.filtro.offset+1) * this.perPage;

                this.carregarMaisVotados();
            }),
            carregarMaisVotados() {
                this.sending = true;
                VotoResource
                    .getTopRated(this.filtro)
                    .then((candidatos) => {
                        this.candidatos = this.candidatos.concat(candidatos);
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