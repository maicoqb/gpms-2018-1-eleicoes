import Vue from 'vue';
import {parseUrl} from "./resource";

export default class NoticiaResource {
    static getRecent(filtro) {
        const url = '/noticias/latest';
        return Vue.http.get(parseUrl(url), {params:filtro})
            .then((response) => response.body)
            .catch(err => console.error(err));
    }
}