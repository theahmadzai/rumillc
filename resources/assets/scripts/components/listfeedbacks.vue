<template>
  <div v-if=loading class="loading rel"></div>
  <div v-else class="review-block">
    <p class="review-heading">Reviews ({{feedbacks.length}})</p>
    <div class="review" v-for="(feedback, key) in feedbacks" :key=key>
      <p class="review-title">{{ feedback.title }}<span> - {{ feedback.date }}</span></p>
      <div class="rating">
        <span class="fa fa-star" :class="{checked: feedback.rating > 0}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 1}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 2}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 3}"></span>
        <span class="fa fa-star" :class="{checked: feedback.rating > 4}"></span>
      </div>
      <p class="review-message" v-text=feedback.message></p>
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
      loading  : true,
      feedbacks: {}
    };
  },
  mounted() {
    this.getFeedbacks();
    this.$parent.$on('newFeedback', this.updateFeedbacks);
  },
  methods: {
    updateFeedbacks() {
      this.getFeedbacks();
    },
    async getFeedbacks() {
      try {
        this.loading = true;
        const response = await axios.get('/api/feedbacks', {
          params: {
            product: parseInt(this.id)
          }
        });
        this.feedbacks = response.data;
        this.loading = false;
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
