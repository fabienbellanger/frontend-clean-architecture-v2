import { ref } from 'vue';
import { defineStore } from 'pinia';
import { saleService } from 'boot/sale';
import { CreateSaleRequest, CreateSaleUseCase, Price, Sale, UpdateSalePriceUseCase } from "@poc-clean-archi/domain";

export const useSaleStore = defineStore('sale', () => {
    const createSaleUC = new CreateSaleUseCase(saleService);
    const updateSalePriceUC = new UpdateSalePriceUseCase(saleService);

    // State
    const sale = ref<Sale | undefined>(new Sale('id', new Date(), new Price(10.5, 'EUR'), 'open'));
    const loading = ref(false);
    const error = ref<Error>();

    // Actions
    async function createSale(request: CreateSaleRequest) {
        loading.value = true;
        setTimeout(async () => {
            try {
                sale.value = await createSaleUC.execute(request);
                error.value = undefined;
                loading.value = false;
            } catch (e) {
                // sale.value = undefined; // TODO: Remove
                error.value = e as Error;
                loading.value = false;
            }
        }, 2_000);
    }

    async function updateSalePrice(price: number) {
        if (sale.value && !isNaN(price)) {
            sale.value = await updateSalePriceUC.execute(sale.value, new Price(price, 'EUR'));
            error.value = undefined;
        } else {
            error.value = new Error('invalid price or undefined sale');
        }
    }

    return {
        sale,
        loading,
        error,
        createSale,
        updateSalePrice,
    };
})
