<template>
    <div class="about">
        <h1>Sale</h1>
        <div>
            <p>ID: {{sale.id}}</p>
            <p>Date: {{sale.date}}</p>
            <p>Price: {{sale.price}}</p>
            <p>State: {{sale.state}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useSaleStore} from "@/stores/saleStore";
import {computed} from "vue";
import {SalePresenter} from "@poc-clean-archi/adapters";

const saleStore = useSaleStore();
const sale = computed(() => SalePresenter.fromDomain(saleStore.sale));

</script>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
