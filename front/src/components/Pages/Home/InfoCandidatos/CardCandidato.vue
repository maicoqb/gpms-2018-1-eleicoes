<template>
    <md-card class="card-candidato md-layout-item md-large-size-45 md-medium-size-100 md-small-size-45 md-xsmall-size-100">
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">{{this.candidato.nome_candidato}}</div>
                <div class="md-subhead">{{this.candidato.nome_real}}</div>
            </md-card-header-text>

            <md-card-media>
                <img :src="imgPath" alt="Avatar">
            </md-card-media>
        </md-card-header>
    </md-card>
</template>

<script>
    export default {
        name: 'pages-home_info-candidatos_card-candidato',
        props: {
            candidato: {
                type: Object,
                required: true
            }
        },
        computed: {
            imgPath() {
                const normalizedId = (this.candidato.id % 99) + 1;
                const gender = (this.candidato.id - 100) > 0 ? 'men' : 'women' ;
                return `https://randomuser.me/api/portraits/${gender}/${normalizedId}.jpg`;
            }
        }
    }
</script>
