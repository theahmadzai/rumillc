<template>
  <div v-if="!loaded" class="loading rel"></div>
  <div v-else class="review-block">
    <p class="review-heading">Reviews ({{feedbacks.length}})</p>

    <div class="review" v-for="(feedback, key) in feedbacks" :key="key">
      <p class="review-title">{{ feedback.title }}<span> - {{ feedback.date }}</span></p>
      <div class="rating">
        <span class="fa fa-star" :class="{checked: feedback.rating > 0}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 1}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 2}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 3}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 4}"></span>
      </div>
      <p class="review-message">
        {{ feedback.message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      loaded   : false,
      feedbacks: {}
    };
  },
  mounted() {
    this.getFeedbacks();
    this.$parent.$on('newFeedback', this.updateFeedbacks);
  },
  methods: {
    updateFeedbacks() {
      this.loaded = false;
      this.getFeedbacks();
    },
    async getFeedbacks() {
      try {
        const response = await axios.get('/api/feedbacks', {
          params: {
            product: parseInt(this.id)
          }
        });
        this.feedbacks = response.data;
        this.loaded = true;
        this.$parent.$emit(
          'updateRating',
          this.feedbacks.map(feedback => feedback.rating)
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
