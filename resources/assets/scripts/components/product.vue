<template>
  <main class="main-wrapper">
    <div v-if="!loaded" class="loading"></div>
    <div v-else class="product-wrapper">
      <h1 class="category">{{ product.category.name }}</h1>
      <div class="product">
          <figure class="image-frame">
            <img :src="`/storage/app/${product.image}`" :alt="product.name">
          </figure>
          <div class="details">
            <h2 class="name">{{ product.name }}</h2>
            <p class="contents">{{ product.content }}</p>
            <button class="more">Contact for price</button>
          </div>
      </div>

      <writefeedback :id="id"></writefeedback>

      <ratingfeedbacks :id="id"></ratingfeedbacks>

      <listfeedbacks :id="id"></listfeedbacks>
    </div>
  </main>
</template>

<script>
import WriteFeedback from './writefeedback';
import ListFeedbacks from './listfeedbacks';
import RatingFeedbacks from './ratingfeedbacks';

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
        const response = await axios.get('/api/products/' + parseInt(this.id));
        this.product = response.data;
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    writefeedback  : WriteFeedback,
    listfeedbacks  : ListFeedbacks,
    ratingfeedbacks: RatingFeedbacks
  }
};
</script>

<style lang="scss" scoped>
@import "~@/_settings.scss";

.main-wrapper {
  position: relative;
  width: 80%;
  min-height: 300px;
  margin: 4rem auto;
}

.product-wrapper {
  padding: 5rem;
  background: #ffffff;

  .category {
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }

  .product {
    display: flex;
    justify-content: space-between;

    .image-frame {
      flex-basis: 46%;
      overflow: hidden;

      img {
        transition: all 300ms ease-in-out;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .details {
      flex-basis: 50%;

      .name {
        font-size: 2rem;
        font-weight: 600;
      }

      .contents {
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 0.95rem;
        line-height: 2rem;
        text-align: justify;
      }

      .more {
        padding: 0.5rem 2rem;
        border: 1px solid #ffffff;
        background: $secondary-color;
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;

        &:hover {
          background: $primary-color;
        }
      }
    }
  }
}
</style>
