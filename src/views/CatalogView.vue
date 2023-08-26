<template>
  <div>Catalog</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "@/stores/products";

const store = useProductsStore();

onMounted(async () => {
  await store.fetchProductsFromDB();
});
</script>

<style scoped></style>
