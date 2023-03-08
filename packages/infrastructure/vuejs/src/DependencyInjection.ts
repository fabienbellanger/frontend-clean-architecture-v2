import type {App, InjectionKey} from 'vue';
import type {HttpClient, HttpHeader} from "@poc-clean-archi/adapters";
import {SaleRepositoryHttp} from "@poc-clean-archi/adapters";
import type {SaleRepository} from "@poc-clean-archi/domain";

export const SALE_REPOSITORY = Symbol() as InjectionKey<SaleRepository>;

export const dependencies = (app: App) => {
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
                .then(value => value.json());
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
                .then(value => value.json());
        },
    };

    // Repositories
    const saleRepository = new SaleRepositoryHttp(httpClient);

    app.provide(SALE_REPOSITORY, saleRepository);
}