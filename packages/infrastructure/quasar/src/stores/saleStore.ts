import {ref} from 'vue';
import { defineStore } from 'pinia';
import {saleRepository} from 'boot/sale';
import {CreateSaleRequest, CreateSaleUseCase, Price, Sale} from "@poc-clean-archi/domain";

export const useSaleStore = defineStore('sale', () => {
    const createSaleUC = new CreateSaleUseCase(saleRepository);

    // State
    const sale = ref<Sale | undefined>(new Sale('id', new Date(), new Price(10.0, 'EUR'), 'open'));
    const loading = ref(false);

    // Actions
    async function createSale(request: CreateSaleRequest) {
        loading.value = true;
        setTimeout(async () => {
            try {
                sale.value = await createSaleUC.execute(request);
                loading.value = false;
            } catch (e) {
                // sale.value = undefined; // TODO: Remove
                loading.value = false;
                console.error('[ERROR] createSale()', e);
            }
        }, 2_000);
    }

    return {
        sale,
        loading,
        createSale,
    };
})
