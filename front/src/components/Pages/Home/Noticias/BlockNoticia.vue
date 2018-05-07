<template>
    <b-jumbotron bg-variant="light" :class="$style.blockNoticia" >
        <h3>{{noticia.titulo | title}}</h3>
        <p>{{noticia.corpo | body}}</p>
    </b-jumbotron>
</template>

<script>
export default {
  name: 'pages-partial-info-candidatos-card',
  props: {
      noticia: {
          type: Object,
          required: true
      }
  },
  filters: {
        title: (str) => {
            return str.replace(/(.{0,40}).*/,"$1");
        },
        body: (str) => {
            return str.replace(/(.{0,250}).*/,"$1");
        }
  }
}
</script>

<style module>
.blockNoticia {
    padding: 10px;
    margin: 10px 0px;
}
</style>
