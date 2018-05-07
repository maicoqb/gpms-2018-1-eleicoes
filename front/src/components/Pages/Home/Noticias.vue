<template>
  <b-jumbotron header-tag="p" header-level="4" :class="$style.infoBlock">
    <template slot="header">
      Notícias
    </template>

    <b-container :class="$style.noPadding">
      <b-row :class="$style.noPadding">
        <b-col md="12" lg="12" v-for="noticia in noticias" :key="noticia.id" :class="$style.noPadding">
            <block-noticia :noticia="noticia"></block-noticia>
        </b-col>
      </b-row>
    </b-container>

  </b-jumbotron>
</template>

<script>
import BlockNoticia from '@components/Pages/Home/Noticias/BlockNoticia.vue';
import NoticiaService from '@/services/NoticiaService.js';

export default {
  name: 'pages-partial-noticias',
  data() {
    return {
      noticias: []
    }
  },
  components: {
    'block-noticia': BlockNoticia
  },
  created() {
    this.loadNoticias();
  },
  methods: {
    loadNoticias() {
      this.noticias = NoticiaService.getNoticias(5)
    }

  }
}
</script>

<style module>
.infoBlock {
  padding-top: 20px;
  padding-bottom: 20px;
}
.noPadding {
  padding: 0px;
  margin: 0px;
}
</style>

