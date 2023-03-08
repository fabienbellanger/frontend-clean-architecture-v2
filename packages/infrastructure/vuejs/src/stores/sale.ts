import {ref, inject} from 'vue';
import { defineStore } from 'pinia';
import {SALE_REPOSITORY} from "@/DependencyInjection";
import {CreateSaleRequest, CreateSaleUseCase, Price, Sale} from "@poc-clean-archi/domain";
import {SaleRepositoryHttp} from "@poc-clean-archi/adapters";

export const useSaleStore = defineStore('sale', () => {
    const saleRepository = inject(SALE_REPOSITORY) as SaleRepositoryHttp;
    const createSaleUC = new CreateSaleUseCase(saleRepository);

    // State
    const sale = ref<Sale | undefined>(new Sale('id', new Date(), new Price(10.0, 'EUR'), 'open'));
    const loading = ref(false);

    // Actions
    async function createSale(request: CreateSaleRequest) {
        loading.value = true;
        try {
            sale.value = await createSaleUC.execute(request);
            loading.value = false;
        } catch (e) {
            // sale.value = undefined;
            loading.value = false;
            console.error('[ERROR] createSale()', e);
        }
    }

    return {
        sale,
        loading,
        createSale,
    };
})
