import Vue from 'vue';
import config from '@/config';

const RESOURCE_PATH = '/candidatos';
const RESOURCE_URL = `${config.serverHost}${RESOURCE_PATH}`;

export default class CandidatoResource {
    static getTop(limit=10) {
        const url = `${RESOURCE_URL}/top/${limit}`;
        Vue.http.get(url).then((response) => {
            console.log(response);
        }).catch(err => console.error(err));
    }
}