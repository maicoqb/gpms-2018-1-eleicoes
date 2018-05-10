<template>
    <md-card class="md-layout-item md-size-100">
        <md-card-header>
            <div class="md-title">Boca de Urna</div>
        </md-card-header>

        <md-card-content class="md-layout">
            <boca-de-urna-form
                    class="no-border"
                    v-if="!jaVotou"
                    @sendVoto="jaVotou = true"
            ></boca-de-urna-form>
            <boca-de-urna-result
                    class="no-border"
                    v-if="jaVotou"
            ></boca-de-urna-result>
        </md-card-content>
    </md-card>
</template>

<script>
    import BocaDeUrnaForm from "./BocaDeUrnaForm.vue";
    import BocaDeUrnaResult from "./BocaDeUrnaResult.vue";

    export default {
        name: 'pages-boca-de-urna',

        components: {
            'boca-de-urna-form': BocaDeUrnaForm,
            'boca-de-urna-result': BocaDeUrnaResult
        },

        data() {
            return {
                jaVotou: false
            }
        }

    }
</script>

<style lang="scss" scoped>
    .no-border {
        border-color: transparent;
        box-shadow: none;
    }
</style>