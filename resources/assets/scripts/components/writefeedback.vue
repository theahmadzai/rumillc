<template>
  <div v-if="!loaded" class="loading"></div>
  <div v-else class="review-block">
    <p class="review-heading">Write a public review</p>
    <div v-if="sentFeedback" class="notification">
      <button class="delete" @click="sentFeedback = false"></button>Thanks for your feedback.
    </div>
    <form class="review-write" method="POST" action="/api/feedbacks" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
      <div class="rating" @click="changeRating">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <span class="help is-danger" v-if="form.errors.has('rating')" v-text="form.errors.get('rating')"></span>
      <input type="text" name="name" placeholder="Full Name" v-model="form.name">
      <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
      <input type="text" name="title" placeholder="Title" v-model="form.title">
      <span class="help is-danger" v-if="form.errors.has('title')" v-text="form.errors.get('title')"></span>
      <textarea placeholder="Message" name="message" v-model="form.message"></textarea>
      <span class="help is-danger" v-if="form.errors.has('message')" v-text="form.errors.get('message')"></span>
      <div class="process-button" v-if="this.processing">
        <div class="loading left"></div>
      </div>
      <button type="submit" v-else :disabled="form.errors.any()" :class="{disabled:form.errors.any()}">Send Feedback</button>
    </form>
  </div>
</template>

<script>
class Error {
  constructor() {
    this.errors = {};
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }

  get(field) {
    if (this.has(field)) {
      return this.errors[field][0];
    }
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    if (field) {
      Vue.delete(this.errors, field);
      return;
    }

    this.errors = {};
  }
}

class Form {
  constructor(fields) {
    this.errors = new Error();
    this.fields = fields;

    for (let field in fields) {
      this[field] = fields[field];
    }
  }

  data() {
    let fields = {};

    for (let field in this.fields) {
      fields[field] = this[field];
    }

    return fields;
  }

  reset() {
    for (let field in this.fields) {
      this[field] = this.fields[field];
    }

    this.errors.clear();
  }

  submit(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post('/api/feedbacks', this.data());
        this.reset();
        resolve(response.data);
      } catch (error) {
        this.errors.record(error.response.data.errors);
        reject(error.response.data.errors);
      }
    });
  }
}

export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      loaded      : false,
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
    this.loaded = true;
  },
  methods: {
    changeRating(event) {
      if (event.target.tagName == 'DIV') return;

      const stars = event.target.parentNode.children;

      Array.from(stars).forEach(star => {
        star.classList.remove('checked');
      });

      let rating = 0;

      for (let star of stars) {
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
        console.log(error);
        this.processing = false;
      }
    }
  }
};
</script>
