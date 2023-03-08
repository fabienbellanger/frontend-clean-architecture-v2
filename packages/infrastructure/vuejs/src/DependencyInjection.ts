import type {App, InjectionKey} from 'vue';
import type {HttpClient, HttpHeader} from "@poc-clean-archi/adapters";
import {SaleRepositoryHttp} from "@poc-clean-archi/adapters";
import type {SaleRepository} from "@poc-clean-archi/domain";

export const SALE_REPOSITORY = Symbol() as InjectionKey<SaleRepository>;

export const dependencies = (app: App) => {
    const httpClient: HttpClient = {
        baseUrl: 'http://localhost/api/v1',

        // Get method
        get<T>(url: string): Promise<T> {
            return fetch(this.baseUrl + url).then(value => value.json()); // Can use Axios instead
        },

        // Post method
        post<T, B>(url: string, body: B, _headers?: HttpHeader[]): Promise<T> {
            return fetch(this.baseUrl + url, {
                method: 'POST',
                body: JSON.stringify(body),
                // headers: ... // TODO
            })
                .then(value => value.json());
        },
    };

    // Repositories
    const saleRepository = new SaleRepositoryHttp(httpClient);

    app.provide(SALE_REPOSITORY, saleRepository);
}