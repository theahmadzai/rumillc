<template>
  <div v-if=loading class="loading center"></div>
  <div v-else class="columns is-multiline">
      <product-component class="column is-one-third"
        v-for="(product,key) in products"
        :key="key"
        :product=product
      ></product-component>
  </div>
</template>

<script>
import Product from './product';

export default {
  props: {
    category: {
      type: Number
    },
    limit: {
      type: Number
    }
  },
  data() {
    return {
      loading : true,
      products: null
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    refreshProducts() {
      this.loadProducts();
    },
    async loadProducts() {
      try {
        this.loading = true;
        const response = await axios.get('/api/products', {
          params: {
            category: this.category,
            limit   : this.limit
          }
        });
        this.products = response.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    category() {
      this.refreshProducts();
    }
  },
  components: {
    'product-component': Product
  }
};
</script>
