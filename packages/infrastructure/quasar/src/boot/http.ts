import { boot } from 'quasar/wrappers'
import type { HttpClient, HttpHeader } from "@poc-clean-archi/adapters"
import axios from 'axios'

const httpClient: HttpClient = {
    baseUrl: process.env.API_BASE_URL as string,

    // TODO: Use customHttpService

    // Get method
    get<T>(url: string, _headers?: HttpHeader[]): Promise<T> {
        return axios({
            url: this.baseUrl + url,
            method: 'get',
            responseType: 'json',
        }).then()
    },

    // Post method
    post<T, B>(url: string, body: B, _headers?: HttpHeader[]): Promise<T> {
        return axios({
            url: this.baseUrl + url,
            method: 'post',
            data: body,
            responseType: 'json',
        }).then()
    },
};

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot((_app) => {
})

export { httpClient };
