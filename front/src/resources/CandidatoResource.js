import Vue from 'vue';
import config from '@/config';

const RESOURCE_PATH = '/candidatos';
const RESOURCE_URL = `//${config.serverHost}${RESOURCE_PATH}`;

function parseUrl(url) {
    return `${RESOURCE_URL}${url}`;
}

export default class CandidatoResource {
    static getTop(limit=10) {
        const url = `/top/${limit}`;
        return Vue.http.get(parseUrl(url))
            .then((response) => response.body)
            .catch(err => console.error(err));
    }
}