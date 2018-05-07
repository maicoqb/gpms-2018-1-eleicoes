<template>
  <b-container>
    <b-row>
      <b-col>
        <app-header></app-header>
      </b-col>
    </b-row>
    
    <b-row>
        <b-col>
            <slot name="content">
                <pages-home></pages-home>
            </slot>
        </b-col>
    </b-row>

  </b-container>
</template>

<script>
import Header from '@components/App/Header.vue'
import HomePage from '@components/Pages/Home.vue'

export default {
  name: 'app-layout',
  components: {
      'app-header': Header,
      'pages-home': HomePage
  }
}
</script>
