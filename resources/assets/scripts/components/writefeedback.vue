<template>
  <div v-if=loading class="loading rel"></div>
  <div v-else class="review-block">
    <p class="review-heading">Write a public review</p>
    <div v-if=sentFeedback class="notification">
      <button class="delete" @click="sentFeedback = false"></button>Thanks for your feedback.
    </div>
    <form class="review-write" @submit.prevent=onSubmit @keydown="form.errors.clear($event.target.name)">
      <div class="rating" @click=changeRating>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <span class="help is-danger" v-if="form.errors.has('rating')" v-text="form.errors.get('rating')"></span>
      <input type="text" name="name" placeholder="Full Name" v-model=form.name>
      <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
      <input type="text" name="title" placeholder="Title" v-model=form.title>
      <span class="help is-danger" v-if="form.errors.has('title')" v-text="form.errors.get('title')"></span>
      <textarea placeholder="Message" name="message" v-model=form.message></textarea>
      <span class="help is-danger" v-if="form.errors.has('message')" v-text="form.errors.get('message')"></span>
      <div v-if=processing class="process-button">
        <div class="loading left"></div>
      </div>
      <button v-else type="submit" :disabled="form.errors.any()" :class="{disabled:form.errors.any()}">Send Feedback</button>
    </form>
  </div>
</template>

<script>
import Form from '../classes/form.js';

export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      loading     : true,
      processing  : false,
      sentFeedback: false,
      form        : new Form({
        product: this.id,
        rating : null,
        name   : null,
        title  : null,
        message: null
      })
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    changeRating(event) {
      if (event.target.tagName == 'DIV') return;

      const stars = event.target.parentNode.children;

      Array.from(stars).forEach(star => {
        star.classList.remove('checked');
      });

      let rating = 0;

      for (const star of stars) {
        star.classList.add('checked');
        rating++;
        if (star === event.target) {
          break;
        }
      }

      this.form.rating = rating;
      this.form.errors.clear('rating');
    },
    async onSubmit() {
      try {
        this.processing = true;
        const response = await this.form.submit('/api/feedbacks');
        this.processing = false;
        this.sentFeedback = true;
        this.$parent.$emit('newFeedback');
        console.log(response.status);
      } catch (error) {
        this.processing = false;
        console.log(error);
      }
    }
  }
};
</script>
