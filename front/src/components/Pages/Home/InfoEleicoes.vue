<template>
    <md-card class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
        <md-card-header>
            <div class="md-title">Informações Gerais</div>
        </md-card-header>

        <md-card-content>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac leo in purus blandit vehicula.
                Vivamus diam neque, pulvinar sit amet dolor a, venenatis consectetur sem. In eget felis scelerisque,
                lobortis libero ac, sollicitudin mi. Proin at sodales nibh. Nunc dignissim porta odio, nec tincidunt
                tortor hendrerit eu. Vivamus erat tellus, vestibulum vel dictum eu, condimentum ut quam. Nullam suscipit
                dolor non eros malesuada, in pretium orci tempus. Sed non turpis ut nunc posuere dapibus et vel tellu.
                Nunc et ultricies justo.
            </p>
            <p v-show="isExpanded">
                Donec vestibulum a velit et eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris tincidunt metus turpis, id suscipit arcu ultrices nec. Cras pharetra erat at sapien tincidunt
                accumsan. Nullam elementum luctus dictum. In arcu mi, hendrerit eget dapibus in, maximus eget ipsum.
                Cras eleifend sem ut urna mollis feugiat. Nullam dignissim dapibus lorem ut cursus. Maecenas ac orci
                in nulla vulputate sollicitudin. Nunc at varius orci. Etiam nisi magna, euismod sed tincidunt quis,
                finibus nec odio. Mauris laoreet, lorem ac ornare luctus, metus urna cursus dui, in malesuada urna
                mauris vitae dui. Nullam felis nisi, feugiat ac vehicula a, convallis eget dui. In sit amet neque
                sit amet nisi venenatis pellentesque. Phasellus pulvinar egestas neque, sed aliquam enim.
            </p>
        </md-card-content>

        <md-card-actions>
            <md-button @click="isExpanded = true" v-show="!isExpanded">Ver Mais</md-button>
            <md-button @click="isExpanded = false" v-show="isExpanded">Ver Menos</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>

    export default {
        name: "page-home_info-eleicoes",
        data() {
            return {
                isExpanded: false
            }
        }
    };

</script>
