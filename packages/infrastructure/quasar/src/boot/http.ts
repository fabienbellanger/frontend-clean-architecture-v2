import { boot } from 'quasar/wrappers'
import type {HttpClient, HttpHeader} from "@poc-clean-archi/adapters"

const httpClient: HttpClient = {
    baseUrl: 'http://localhost/api/v1', // TODO: From config file

    // TODO: Use Axios or customHttpService

    // Get method
    get<T>(url: string, _headers?: HttpHeader[]): Promise<T> {
        return fetch(
            this.baseUrl + url,
            {
                method: 'GET',
                // headers: ... // TODO
            }
        )
            .then(value => value.json())
    },

    // Post method
    post<T, B>(url: string, body: B, _headers?: HttpHeader[]): Promise<T> {
        return fetch(
            this.baseUrl + url,
            {
                method: 'POST',
                body: JSON.stringify(body),
                // headers: ... // TODO
            }
        )
            .then(value => value.json())
    },
};

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(() => {

})
export {httpClient};
