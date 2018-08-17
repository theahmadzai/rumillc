<template>
  <div class="product">
    <div v-if=loading class="loading rel"></div>
    <a v-show=!loading :href="`product/${product.id}-${product.slug}`">
      <div class="product-rating rating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star" :class="{checked: rating>1}"></span>
        <span class="fa fa-star" :class="{checked: rating>2}"></span>
        <span class="fa fa-star" :class="{checked: rating>3}"></span>
        <span class="fa fa-star" :class="{checked: rating>4}"></span>
      </div>
      <image-component :src=product.image :alt=product.alt></image-component>
      <p class="product-name" v-text=product.name></p>
      <p class="product-category" v-text=product.category.name></p>
      <p class="product-more">View More</p>
    </a>
  </div>
</template>

<script>
import Image from './image';

export default {
  props: {
    product: {
      type    : Object,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      rating : null
    };
  },
  mounted() {
    this.updateRating();
  },
  methods: {
    async updateRating() {
      try {
        const response = await axios.get('/api/feedbacks', {
          params: {
            product: parseInt(this.product.id)
          }
        });
        this.rating = this.calculateRating(response.data);
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    calculateRating(feedbacks) {
      if(feedbacks.length === 0){
        return 5;
      }
      return Math.floor(
        feedbacks.reduce((total, { rating }) => {
          return total + rating;
        }, 0) / feedbacks.length
      );
    }
  },
  components: {
    'image-component': Image
  }
};
</script>
