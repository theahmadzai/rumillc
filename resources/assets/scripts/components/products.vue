<template>
  <div v-if="!loaded" class="loading rel"></div>
  <div v-else class="columns is-multiline">
    <div class="column is-one-third" v-for="(product,key) in products" :key="key">
      <a :href="`product/${product.id}-${product.slug}`">
        <figure class="image is-1by1">
          <img class="zoomer" :src="product.image"/>
        </figure>
        <div class="has-background-white product-details">
          <p class="prodname">{{product.name}}</p>
          <p class="catname">{{product.category.name}}</p>
          <p class="viewmore">View More</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type    : Number,
      default : null,
      required: false
    },
    limit: {
      type    : Number,
      default : null,
      required: false
    }
  },
  data() {
    return {
      products: null,
      loaded  : false
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
        this.loaded = false;
        const response = await axios.get('/api/products', {
          params: {
            category: this.category,
            limit   : this.limit
          }
        });
        this.products = response.data;
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    category() {
      this.refreshProducts();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/_settings.scss";

.columns {
  width: 95%;
  margin: 0 auto;
}

.product-details {
  padding: 1rem;

  .prodname {
    text-align: center;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 1.5rem;
    color: #555;
  }

  .catname {
    color: #555;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 300;
  }

  .viewmore {
    background: $secondary-color;
    text-align: center;
    color: white;
    margin-top: 0.5rem;
    padding: 0.2rem;
    font-size: 0.8rem;
    font-weight: 400;
    border: 2px solid $secondary-color;
  }
}

.image {
  overflow: hidden;
}

.zoomer {
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
