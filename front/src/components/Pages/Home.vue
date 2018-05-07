<template>
    <b-container>
        <b-row>
            <b-col lg="8" md="12" >
                <b-row>
                    <b-col>
                        <a-info-eleicoes></a-info-eleicoes>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <a-noticias></a-noticias>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="4" md="12">
                <a-info-candidatos></a-info-candidatos>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import InfoEleicoes from '@components/Pages/Home/InfoEleicoes.vue';
import Noticias from '@components/Pages/Home/Noticias.vue';
import InfoCandidatos from '@components/Pages/Home/InfoCandidatos.vue';

export default {
  name: 'pages-home',
  components: {
      'a-info-eleicoes': InfoEleicoes,
      'a-noticias': Noticias,
      'a-info-candidatos': InfoCandidatos
  }
}
</script>
