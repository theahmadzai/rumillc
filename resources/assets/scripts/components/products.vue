<template>
  <div class="products">
    <button @click="refreshProducts()">reload</button>
    <ul>
      <div class="loading" v-if="loaded==false"></div>
      <li v-for="(product,key) in products" :key="key" v-show="loaded">
        <figure class="framer">
          <img :src="'storage/app/'+product.image"/>
        </figure>
        <p class="prodname">{{product.name}}</p>
        <p class="catname">{{product.category.name}}</p>
        <p class="pricetag">{{product.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type    : Number,
      required: true
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
            category: this.category
          }
        });

        this.products = response.data;
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/_settings.scss";
.products {
  position: relative;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5rem;
  transform: translate(-50%, -50%);
  border: 6px solid #f3f3f3;
  border-top: 6px solid #333333;
  border-right: 6px solid #333333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
button {
  background: white;
  border: 1px solid #eee;
  padding: 0.2rem 0.4rem;
  font-size: 0.7rem;
  position: absolute;
  bottom: 100%;
  right: 0;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #eee;
    color: #444;
  }
}
ul {
  display: flex;
  padding: 0.8rem;
  background: $primary-color;
  height: 370px;

  li {
    width: 24%;
    height: 100%;
    background: #fff;
    margin-right: 1.3%;
    display: block;
    padding: 0.4rem;
    overflow: hidden;

    &:last-child {
      margin-right: 0;
    }
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
    .pricetag {
      background: $secondary-color;
      text-align: center;
      color: white;
      margin-top: 0.5rem;
      padding: 0.2rem;
      font-weight: 800;
      border: 2px solid $secondary-color;
    }
  }
}

.framer {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  transition: all 500ms ease;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
