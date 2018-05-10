<template>
    <md-card class="md-layout-item">
        <md-card-header>
            <div class="md-title">Noticias</div>
        </md-card-header>

        <md-card-content class="md-layout">
            <card-noticia
                    v-for="(noticia, index) in this.noticias"
                    :key="noticia.id"
                    :noticia="noticia"
                    class="card-noticia"
                    :class="{
                        'card-left': index % 2 == 0,
                        'card-right': index % 2 == 1
                    }"
            ></card-noticia>
        </md-card-content>

        <md-card-actions>
            <md-button @click="loadMoreNoticias" class="md-layout-item md-alignment-bottom-right">Carregar Mais</md-button>
        </md-card-actions>
    </md-card>

</template>

<script>
    import _ from 'lodash';
    import CardNoticia from './Noticias/CardNoticia.vue';
    import NoticiaResource from '@/resources/NoticiaResource';

    export default {
        name: "pages-home_noticias",
        data() {
            return {
                noticias: [],
                offset: 0,
                limit: 10,
                perPage: 10
            }
        },
        components: {
            'card-noticia': CardNoticia
        },
        created() {
            this.loadNoticias();
        },
        methods: {
            loadMoreNoticias: _.debounce(function() {
                this.offset += 1;
                this.limit = (this.offset+1) * this.perPage;

                this.loadNoticias();
            }),
            loadNoticias() {
                NoticiaResource
                    .getRecent(this.limit, this.offset)
                    .then((noticias) => {
                        this.noticias = this.noticias.concat(noticias);
                    });
            }

        }
    }
</script>


<style lang="scss" scoped>
    .card-noticia {
        margin: 10px;
        display: inline-block;

        &.card-left {
            margin-left: -10px;
        }

        &.card-right {
            margin-right: -10px;
        }
    }
</style>