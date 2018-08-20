<template>
  <div v-if=loading class="loading rel"></div>
  <div v-else class="container section columns has-background-white" style="margin:2rem auto;">
    <nav class="panel column is-one-fifth">
      <p class="panel-heading">Spices</p>
      <a class="panel-block" v-for="category in categories.filter(({name}) => this.spices.includes(name))" :key=category.id @click="select(category.id)" :class="{'is-active': selected == category.id}">
          <span class="panel-icon">
            <i class="fas fa-shopping-basket"></i>
          </span>
          {{category.name}}
      </a>
      <p class="panel-heading">Nuts</p>
      <a class="panel-block" v-for="category in categories.filter(({name}) => this.nuts.includes(name))" :key=category.id @click="select(category.id)" :class="{'is-active': selected == category.id}">
          <span class="panel-icon">
            <i class="fas fa-shopping-basket"></i>
          </span>
          {{category.name}}
      </a>
      <p class="panel-heading">Dried Fruits</p>
      <a class="panel-block" v-for="category in categories.filter(({name}) => this.dried.includes(name))" :key=category.id @click="select(category.id)" :class="{'is-active': selected == category.id}">
          <span class="panel-icon">
            <i class="fas fa-shopping-basket"></i>
          </span>
          {{category.name}}
      </a>
      <p class="panel-heading">Services</p>
      <a class="panel-block" @click="select(99)" :class="{'is-active': selected == 99}">
          <span class="panel-icon">
            <i class="fas fa-shopping-basket"></i>
          </span>
          Logistics
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
      selected  : null,
      spices    : [ 'Saffron' ],
      nuts      : [ 'Almonds', 'Walnut', 'Pistachios', 'Pine Nuts' ],
      dried     : [ 'Dried Apricot', 'Raisins', 'Dried Figs' ],
      categories: {}
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    select(id) {
      this.selected = id;
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
