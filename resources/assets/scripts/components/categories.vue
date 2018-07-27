<template>
  <div>
      <div class="category" v-for="(category,key) in categories" :key="key">
        <h2>{{ category.name }}</h2>
          <products :category="category.id"></products>
      </div>
  </div>
</template>

<script>
import Products from './products';

export default {
  data() {
    return {
      categories: {}
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get('/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    products: Products
  }
};
</script>

<style lang="scss" scoped>
.category {
  background: white;
  padding: 2rem;

  h2 {
    color: #555;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Roboto";
    background: #f9f9f9;
    padding: 1rem;
    text-transform: uppercase;
  }
}
</style>
