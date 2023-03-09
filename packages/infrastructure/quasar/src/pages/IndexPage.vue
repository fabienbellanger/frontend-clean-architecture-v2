<template>
    <q-page class="row justify-evenly">
        <div>
            <h1>Sale</h1>
            <div v-if="!saleStore.loading">
                <p>ID: <b>{{ sale.id }}</b></p>
                <p>Date: <b>{{ sale.date }}</b></p>
                <p>Price: <b>{{ sale.price }}</b></p>
                <p>State: <b>{{ sale.state }}</b></p>

                <p v-if="saleStore.error" class="text-red">{{ saleStore.error }}</p>

                <q-btn color="primary" @click="create">Create</q-btn>
                &nbsp;
                <q-btn @click="updatePrice">Set Price to 20 €</q-btn>
            </div>
            <q-circular-progress
                v-else
                indeterminate
                size="64px"
                color="primary"
                track-color="grey-3"
                class="q-ma-md"
            />
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { useSaleStore } from "stores/saleStore";
import { computed, ref } from "vue";
import { SalePresenter } from "@poc-clean-archi/adapters";
import { CreateSaleRequest } from "@poc-clean-archi/domain";

const saleStore = useSaleStore();
const sale = computed(() => SalePresenter.fromDomain(saleStore.sale));
const saleRequest = ref<CreateSaleRequest>({
    id: '1',
    date: '2023-02-03',
    price: 10.0,
    state: 'open',
});

async function create() {
    await saleStore.createSale(saleRequest.value);
}

function updatePrice() {
    saleStore.updateSalePrice(20.0);
}
</script>
