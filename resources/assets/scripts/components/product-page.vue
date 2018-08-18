<template>
  <div v-if=!loaded class="loading rel"></div>
  <div v-else class="product-page">
    <main class="product">
        <ImageComponent class="image image-frame" :src=product.image :alt=product.name></ImageComponent>
        <div class="details">
          <h1 class="details__name" v-text=product.name></h1>
          <p class="details__category" v-text=product.category.name></p>
          <p class="details__info" v-text=product.content></p>
          <a class="details__more">Contact for price</a>
        </div>
    </main>
    <WriteFeedbackComponent :id=id></WriteFeedbackComponent>
    <RatingFeedbacksComponent :id=id></RatingFeedbacksComponent>
    <ListFeedbacksComponent :id=id></ListFeedbacksComponent>
  </div>
</template>

<script>
import WriteFeedback from './writefeedback';
import ListFeedbacks from './listfeedbacks';
import RatingFeedbacks from './ratingfeedbacks';
import Image from './image';

export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      loaded : false,
      product: {}
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      try {
        const response = await axios.get(`/api/products/${ parseInt(this.id) }`);
        this.product = response.data;
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    WriteFeedbackComponent  : WriteFeedback,
    ListFeedbacksComponent  : ListFeedbacks,
    RatingFeedbacksComponent: RatingFeedbacks,
    ImageComponent          : Image
  }
};
</script>
