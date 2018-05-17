import Vue from 'vue';
import {parseUrl} from "./resource";

export default class VotoResource {
    static vote(voteData) {
        const url = '/votos';
        return Vue.http.post(parseUrl(url), voteData)
            .then((response) => response.body)
    }

    static getTopRated(filtro) {
        const url = '/votos/top-rated';
        return Vue.http.get(parseUrl(url), {params:filtro})
            .then((response) => response.body)
            .catch(err => console.error(err));
    }

    static getRegioes() {
        const url = '/votos/regioes';
        return Vue.http.get(parseUrl(url))
            .then((response) => response.body)
            .catch(err => console.error(err));
    }

    static getCargos() {
        const url = '/votos/cargos';
        return Vue.http.get(parseUrl(url))
            .then((response) => response.body)
            .catch(err => console.error(err));
    }

}