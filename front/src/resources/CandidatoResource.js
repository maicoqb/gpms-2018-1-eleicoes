import Vue from 'vue';
import {parseUrl} from "./resource";

export default class CandidatoResource {
    static getTop(amount) {
        const url = '/candidatos/random';
        return Vue.http.get(parseUrl(url), {params:{amount: amount}})
            .then((response) => response.body)
            .catch(err => console.error(err));
    }
}