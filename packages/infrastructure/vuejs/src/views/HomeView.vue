<template>
    <main>
        <div v-if="saleStore.loading">Loading...</div>
        <div v-else>
            <label for="sale_id">ID</label>
            <input type="text" id="sale_id" name="sale_id" v-model="sale.id">
            <br>
            <label for="sale_date">Date</label>
            <input type="text" id="sale_date" name="sale_date" v-model="sale.date">
            <br>
            <label for="sale_price">Price</label>
            <input type="number" id="sale_price" name="sale_price" v-model="sale.price">
            <br>
            <label for="sale_state">State</label>
            <input type="text" id="sale_state" name="sale_state" v-model="sale.state">
            <br>
            <br>
            <button @click="createSale">
                Create Sale
            </button>
        </div>
    </main>
</template>

<script setup lang="ts">
import {useSaleStore} from "@/stores/saleStore";
import {onMounted, ref} from "vue";
import type {CreateSaleRequest} from "@poc-clean-archi/domain";

const saleStore = useSaleStore();
const sale = ref<CreateSaleRequest>({
    id: '1',
    date: '2023-02-03',
    price: 10.0,
    state: 'open',
});

onMounted(async () => {
    await saleStore.createSale({
        id: '1',
        date: '2023-03-01',
        price: 10.0,
        state: 'open',
    });
})

async function createSale() {
    console.log(sale.value);
    await saleStore.createSale(sale.value);
}

</script>