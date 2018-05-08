<template>
    <md-toolbar class="md-primary">

        <router-link to="/" class="md-title" style="flex: 1">
            {{title}}
        </router-link>

        <md-button
                v-for="item in this.menuItems"
                :key="item.to"
                :to="item.to"
        >{{item.title}}</md-button>

        <div :class="[$style.searchBar]">
            <md-field md-inline>
                <label :class="[$style.searchBarLabel]">Buscar Candidato</label>
                <md-input v-model="searchText" :class="[$style.searchBarInput]"></md-input>
                <md-button class="md-button md-icon-button md-dense" @click="searchCandidate">
                    <md-icon>search</md-icon>
                </md-button>
            </md-field>
        </div>

    </md-toolbar>

    <!--<b-navbar-nav class="ml-auto">-->
        <!--<b-nav-form>-->
            <!--<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscar candidato"/>-->
            <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>-->
        <!--</b-nav-form>-->
    <!--</b-navbar-nav>-->

</template>

<script>
export default {
    name: 'app-header',

    data() {
        return {
            title: "Eleições 2018",

            menuItems: [
                { to: "boca-de-urna", title: "Boca de Urna"},
                { to: "candidatos", title: "Candidatos"}
            ],

            searchText: ""
        }
    },

    methods: {
        searchCandidate() {
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
