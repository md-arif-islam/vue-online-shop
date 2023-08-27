<template>
  <div>{{ selectedProduct.price }}</div>
</template>

<script setup>
import { computed } from "vue";
import { useProductsStore } from "../stores/products";
import { useRoute, useRouter } from "vue-router";

const store = useProductsStore();
const router = useRouter();
const route = useRoute();

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});
</script>

<style scoped></style>
