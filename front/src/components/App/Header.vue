<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Eleições 2018</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="#">Boca de Urna</b-nav-item>
                <b-nav-item href="#">Candidatos</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscar candidato"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'app-header'
};
</script>
