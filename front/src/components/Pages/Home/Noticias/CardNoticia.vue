<template>
    <md-card class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-100 md-xsmall-size-100">
        <md-card-header>
            <div class="md-title">{{this.noticia.titulo}}</div>
            <div class="md-subhead">{{this.noticia.data}}</div>
        </md-card-header>

        <md-card-content>{{this.noticia.texto}}</md-card-content>
    </md-card>
</template>

<script>
    export default {
        name: 'pages-home_noticias_card-noticia',
        props: {
            noticia: {
                type: Object,
                required: true
            }
        }
    }
</script>
