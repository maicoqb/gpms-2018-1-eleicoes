import Vue from 'vue';
import config from '@/config';

const RESOURCE_PATH = '/votos';
const RESOURCE_URL = `//${config.serverHost}${RESOURCE_PATH}`;

function parseUrl(url) {
    return `${RESOURCE_URL}${url}`;
}

export default class VotoResource {
    static vote(voteData) {
        const url = ``;
        return Vue.http.post(parseUrl(url), voteData)
            .then((response) => response.body)
    }

    static getTopRated(filtro) {
        const url = `/top-rated`;
        return Vue.http.get(parseUrl(url), {params:filtro})
            .then((response) => response.body)
            .catch(err => console.error(err));
    }

    static getRegioes() {
        const url = `/regioes`;
        return Vue.http.get(parseUrl(url))
            .then((response) => response.body)
            .catch(err => console.error(err));
    }

    static getCargos() {
        const url = `/cargos`;
        return Vue.http.get(parseUrl(url))
            .then((response) => response.body)
            .catch(err => console.error(err));
    }

}