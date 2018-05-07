<template>
  <b-jumbotron header-tag="p" header-level="4" :class="[$style.infoBlock]">
    <template slot="header">
      Candidatos
    </template>

    <b-container>
      <b-row>
        <b-col md="4" lg="6" v-for="candidato in candidatos" :key="candidato.id">
            <card-candidato :candidato="candidato"></card-candidato>
        </b-col>
      </b-row>
    </b-container>

  </b-jumbotron>
</template>

<script>
import CardCandidato from "@components/Pages/Home/InfoCandidatos/CardCandidato.vue";
import CandidatoService from "@/services/CandidatoService.js";

export default {
  name: "pages-partial-info-candidatos",
  data() {
    return {
      candidatos: []
    };
  },
  components: {
    "card-candidato": CardCandidato
  },
  created() {
    this.loadCandidatos();
  },
  methods: {
    loadCandidatos() {
      this.candidatos = CandidatoService.getCandidatos(6);
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

