import Vue from 'vue';
import config from '@/config';

const RESOURCE_PATH = '/noticias';
const RESOURCE_URL = `//${config.serverHost}${RESOURCE_PATH}`;

function parseUrl(url) {
    return `${RESOURCE_URL}${url}`;
}

export default class NoticiaResource {
    static getRecent(limit, offset) {
        const url = `/recent/${limit}/${offset}`;
        return Vue.http.get(parseUrl(url))
            .then((response) => response.body)
            .catch(err => console.error(err));
    }
}