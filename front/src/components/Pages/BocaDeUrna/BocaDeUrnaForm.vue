<template>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
            <div class="md-layout">
                <md-field>
                    <label for="titulo_eleitor">Número do Titulo de Eleitor</label>
                    <md-input name="titulo_eleitor" id="titulo_eleitor"
                              v-model="form.titulo_eleitor" :disabled="sending"
                              v-mask="'#### #### #### ##'"
                    />
                </md-field>
            </div>

            <div class="md-layout">
                <md-field>
                    <label for="cargo">Cargo</label>
                    <md-select name="cargo" id="cargo" v-model="form.cargo" md-dense :disabled="sending">
                        <md-option></md-option>
                        <md-option
                                v-for="(cargo, key) in this.cargos"
                                :key="key"
                                :value="key"
                        >{{cargo}}
                        </md-option>
                    </md-select>
                </md-field>
            </div>

            <div class="md-layout">
                <md-field>
                    <label for="numero_candidato">Número do Candidato</label>
                    <md-input name="numero_candidato" id="numero_candidato"
                              v-model="form.numero_candidato"
                              :disabled="sending || !form.cargo"
                              v-mask="candidatoMask"
                    />
                </md-field>
            </div>

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

        <md-card-actions>
            <md-button @click="skipVote" :disabled="sending">Mostrar Resultados</md-button>
            <md-button @click="sendVote" class="md-primary" :disabled="sending">Votar</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    import VotoResource from "@/resources/VotoResource";

    export default {
        name: 'pages-boca-de-urna_form',


        data() {
            return {
                sending: false,

                form: {
                    cargo: null,
                    titulo_eleitor: null,
                    numero_candidato: null
                },

                cargos: {
                    'Presidente': 'Presidente',
                    'Governador': 'Governador',
                    'Senador': 'Senador',
                    'Deputado E': 'Deputado Estadual',
                    'Deputado F': 'Deputado Federal'
                }
            }
        },

        computed: {
            candidatoMask() {
                switch (this.form.cargo) {
                    case 'Presidente':
                    case 'Governador':
                        return '##';
                    case 'Senador':
                        return '###';
                    case 'Deputado F':
                        return '####';
                    case 'Deputado E':
                        return '#####';
                }
                return '';
            }
        },

        methods: {
            sendVote() {
                VotoResource
                    .vote(this.form)
                    .then((result) => {
                        this.form.cargo = '';
                        this.form.numero_candidato = '';
                        this.$toasted.success("Voto concluído!");
                    }).catch(err => {
                        (((err || {}).body || {}).errors || []).forEach(e => {
                            this.$toasted.error(e);
                        });
                    }).finally(() => this.$emit('sendVoto'));
            },

            skipVote() {
                this.$emit('sendVoto')
            }
        }
    }
</script>