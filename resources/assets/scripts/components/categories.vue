<template>
  <div v-if=loading class="loading rel"></div>
  <div v-else class="container section columns has-background-white" style="margin:2rem auto;">
    <nav class="panel column is-one-fifth">
      <p class="panel-heading">Categories</p>
      <a class="panel-block" v-for="(category,key) in categories" :key=key @click="select(key)" :class="{'is-active': selected == category.id}">
          <span class="panel-icon">
            <i class="fas fa-shopping-basket"></i>
          </span>
          {{category.name}}
      </a>
      <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth" @click=reload>Refresh</button>
      </div>
    </nav>
    <div class="column">
      <ProductsComponent :category=selected v-model=selected></ProductsComponent>
    </div>
  </div>
</template>

<script>
import Products from './products';

export default {
  data() {
    return {
      loading   : true,
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
        this.loading = true;
        const response = await axios.get('/api/categories');
        this.categories = response.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    ProductsComponent: Products
  }
};
</script>
