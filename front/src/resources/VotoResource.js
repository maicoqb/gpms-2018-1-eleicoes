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
}