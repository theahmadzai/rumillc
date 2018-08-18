<template>
  <div v-if=!loaded class="loading rel"></div>
  <div v-else class="review-block">
    <p class="review-heading">Public reviews</p>
    <div class="blocks">

      <div class="block">
        <div class="rating">
          <p class="avg">Average Rating</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star" :class="{checked: average>1}"></span>
          <span class="fa fa-star" :class="{checked: average>2}"></span>
          <span class="fa fa-star" :class="{checked: average>3}"></span>
          <span class="fa fa-star" :class="{checked: average>4}"></span>
          <span class="total">{{total}} reviews</span>
        </div>
      </div>

      <div class="block">
        <div class="rating" v-for="(rating, key) in ratings" :key=key>
          <span class="count" v-text=rating></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star" :class="{checked: key>0}"></span>
          <span class="fa fa-star" :class="{checked: key>1}"></span>
          <span class="fa fa-star" :class="{checked: key>2}"></span>
          <span class="fa fa-star" :class="{checked: key>3}"></span>
        </div>
      </div>

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
      loaded : false,
      total  : 0,
      average: 0,
      ratings: [ 0, 0, 0, 0, 0 ]
    };
  },
  mounted() {
    this.$parent.$on('updateRating', this.updateRating);
  },
  methods: {
    updateRating(feedbacks) {
      this.total = 0;
      this.average = 0;
      this.ratings = [ 0, 0, 0, 0, 0 ];
      feedbacks.forEach(feedback => {
        this.ratings[feedback - 1]++;
        this.average += feedback;
      });
      this.total = feedbacks.length;
      this.average /= this.total;
      this.average = Math.floor(this.average);
      this.loaded = true;
    }
  }
};
</script>
