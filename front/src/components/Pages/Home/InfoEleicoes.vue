<template>
  <b-jumbotron :class="[$style.infoBlock]" >
    <template slot="header">
      Eleições 2018
    </template>

    <template slot="lead">
      Morbi vulputate lacus eu mauris scelerisque iaculis. 
      Praesent posuere, magna in maximus tempus, urna orci venenatis justo. 
    </template>

    <div v-show="isExpanded">
      <hr class="my-4">

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur molestie sapien eget euismod consectetur. 
        Ut maximus justo diam, quis faucibus nisi consequat id. 
        Mauris vulputate fermentum lorem rhoncus eleifend. 
        Quisque mattis mollis ex quis cursus. 
        Etiam ligula eros, tempor eu convallis id, vehicula a orci. 
        Nullam vehicula pellentesque quam, a maximus velit congue a. 
        Fusce rhoncus ornare nisi, nec imperdiet sem scelerisque ac.
      </p>
      <p>
        Suspendisse ipsum felis, suscipit ac laoreet eget, gravida sed tellus. 
        Morbi tincidunt mi sit amet odio malesuada fringilla. 
        Ut id lorem neque. In pharetra tincidunt ullamcorper. 
        Mauris non quam luctus, viverra nisl ut, sagittis odio. 
        Nam lobortis ipsum vitae urna finibus, eu blandit augue pellentesque. 
        Morbi vulputate lacus eu mauris scelerisque iaculis. 
        Praesent posuere, magna in maximus tempus, urna orci venenatis justo. 
        Vestibulum auctor, massa eget placerat fermentum, libero risus molestie orci. 
        Nullam eu nulla at risus condimentum rhoncus ut eu est. 
        Mauris dui libero, facilisis vel iaculis non, venenatis sit amet magna. 
        Vivamus ut aliquam nibh. Etiam non dictum nibh, a laoreet lacus. 
        Nulla dolor eros, consequat eget metus eu, feugiat interdum elit.
      </p>

      <b-btn variant="link" @click.prevent="showLess">Menos...</b-btn>
    </div>

    <b-btn variant="link" v-show="!isExpanded" @click.prevent="showMore">Mais Informações</b-btn>
  </b-jumbotron>
</template>

<script>
export default {
  name: "pages-partial-info-eleicoes",
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    showMore() {
      this.isExpanded = true;
    },

    showLess() {
      this.isExpanded = false;
    }
  }
};
</script>

<style module>
.infoBlock {
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
