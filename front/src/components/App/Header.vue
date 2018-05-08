<template>
    <md-toolbar class="md-primary">

        <md-menu class="md-layout menu-hide">
            <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>menu</md-icon>
            </md-button>

            <md-menu-content>
                <md-menu-item
                        v-for="item in this.menuItems"
                        :key="item.to"
                        :to="item.to"
                >
                    <span>{{item.title}}</span>
                </md-menu-item>
            </md-menu-content>
        </md-menu>

        <router-link to="/" class="md-title" style="flex: 1">
            {{title}}
        </router-link>

        <div class="md-layout md-small-hide" >
            <md-button
                    v-for="item in this.menuItems"
                    :key="item.to"
                    :to="item.to"
            >{{item.title}}</md-button>
        </div>

        <div class="md-layout" >
            <div :class="[$style.searchBar]">
                <md-field md-inline>
                    <label :class="[$style.searchBarLabel]">Buscar Candidato</label>
                    <md-input v-model="searchText" :class="[$style.searchBarInput]"></md-input>
                    <md-button class="md-button md-icon-button md-dense" @click="searchCandidate">
                        <md-icon>search</md-icon>
                    </md-button>
                </md-field>
            </div>
        </div>

    </md-toolbar>
</template>

<script>
export default {
    name: 'app-header',

    data() {
        return {
            title: "Eleições 2018",

            menuItems: [
                { to: "boca-de-urna", title: "Boca de Urna"},
                { to: "candidatos", title: "Candidatos"},
                { to: "propostas", title: "Propostas"},
            ],

            searchText: ""
        }
    },

    methods: {
        searchCandidate() {
            // TODO fazer a chamada ao componente de busca de candidatos
            console.log(this.searchText, "searching...");
        }
    }
};
</script>

<style module>
    .searchBar {
        width: 250px;
        padding-left: 20px;
    }

    .searchBarLabel, .searchBarInput {
        color: white !important;
        -webkit-text-fill-color: white !important;
    }
</style>

<style>
    @media (min-width: 945px) {
        .menu-hide {
            display: none;
        }
    }
</style>
