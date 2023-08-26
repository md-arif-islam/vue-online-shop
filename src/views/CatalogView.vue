<template>
  <div class="products-list">
    <div class="product" v-for="product in store.products" :key="product.id">
      <img :src="product.thumbnail" alt="" />
      <h2>Brand: {{ product.brand }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "@/stores/products";

const store = useProductsStore();

onMounted(async () => {
  await store.fetchProductsFromDB();
});
</script>

<style scoped>
.products-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0px 0px 14px 1px #e6e6e6;
}

.product img {
  width: 70%;
}
</style>
