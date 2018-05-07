<template>
    <b-card no-body
            :img-src="candidato.foto" :img-alt="candidato.nome" img-top
            :header="candidato.nome" :header-class="$style.cardHeader"
            :class="$style.cardCandidato"
        >
        <b-list-group flush :class="$style.cardBody">
            <b-list-group-item :class="$style.cardBody_cargo">{{candidato.cargo}}</b-list-group-item>
            <b-list-group-item :class="$style.cardBody_partido">{{candidato.partido}}</b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
export default {
  name: 'pages-partial-info-candidatos-card',
  props: {
      candidato: {
          type: Object,
          required: true
      }
  }
}
</script>

<style module>
.cardCandidato {
    margin-bottom: 10px;
}
.cardHeader {
    padding: 5px 10px;
}
.cardBody {
    padding: 0;
}
.cardBody_cargo, .cardBody_partido {
    padding: 5px 10px;
}
</style>
