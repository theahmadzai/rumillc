<template>
  <div v-if="!loaded" class="loading rel"></div>
  <div v-else class="container section columns">
    <nav class="panel column is-one-fifth">
      <p class="panel-heading">Categories</p>
      <a class="panel-block" v-for="(category,key) in categories" :key="key" @click="select(key)" :class="{'is-active': selected == category.id}">
          <span class="panel-icon">
            <i class="fas fa-shopping-basket"></i>
          </span>
          {{category.name}}
      </a>
      <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth" @click="reload">
            Refresh
          </button>
      </div>
    </nav>
    <div class="column">
      <products :category="selected" v-model="selected"></products>
    </div>
  </div>
</template>

<script>
import Products from './products';

export default {
  data() {
    return {
      loaded    : false,
      categories: {},
      selected  : null
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    select(key) {
      this.selected = this.categories[key].id;
    },
    reload() {
      this.selected = null;
      this.getCategories();
    },
    async getCategories() {
      try {
        this.loaded = false;
        const response = await axios.get('/api/categories');
        this.categories = response.data;
        this.loaded = true;
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
