<template>
  <div
    class="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen p-4 text-gray-800 flex justify-center"
  >
    <div class="max-w-5xl w-full">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div
          class="bg-white p-4 rounded-xl shadow-md cursor-pointer transition-shadow hover:shadow-lg"
          v-for="product in store.products"
          :key="product.id"
          @click="goToProductPage(product.id)"
        >
          <div
            class="w-48 h-48 mx-auto mb-4 bg-center bg-cover rounded-xl"
            :style="{ backgroundImage: `url(${product.thumbnail})` }"
          ></div>
          <h2 class="text-xl font-semibold mb-2 text-center text-gray-700">
            {{ product.brand }}
          </h2>
          <p class="text-sm mb-2 text-center text-gray-600">
            Description: {{ product.description }}
          </p>
          <p class="text-lg font-bold text-center text-gray-800">
            Price: ${{ product.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "../stores/products";
import { useRouter } from "vue-router";

const store = useProductsStore();
const router = useRouter();

const goToProductPage = (id) => {
  router.push({
    name: "ProductView",
    params: {
      id,
    },
  });
};

onMounted(async () => {
  await store.fetchProductsFromDB();
});
</script>

<style scoped></style>
