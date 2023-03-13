import { ref, inject } from 'vue';
import { defineStore } from 'pinia';
import { SALE_SERVICE } from "@/DependencyInjection";
import { CreateSaleRequest, CreateSaleUseCase, Price, Sale, SaleService } from "@poc-clean-archi/domain";

export const useSaleStore = defineStore('sale', () => {
    const saleService = inject(SALE_SERVICE) as SaleService;
    const createSaleUC = new CreateSaleUseCase(saleService);

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
            // sale.value = undefined; // TODO: Remove
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
