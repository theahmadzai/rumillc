<template>
  <div v-if="!loaded" class="loading rel"></div>
  <form v-else @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" novalidate>
      <label for="name">Your Name</label>
      <input type="text" name="name" v-model="form.name">
      <span v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>

      <label for="email">Your Email</label>
      <input type="email" name="email" v-model="form.email">
      <span v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>

      <label for="subject">Subject</label>
      <input type="text" name="subject" v-model="form.subject">
      <span v-if="form.errors.has('subject')" v-text="form.errors.get('subject')"></span>

      <label for="message">Your Message</label>
      <textarea name="message" v-model="form.message"></textarea>
      <span v-if="form.errors.has('message')" v-text="form.errors.get('message')"></span>

      <div v-if="processing" class="process-button">
        <div class="loading left"></div>
      </div>
      <input v-else type="submit" :disabled="form.errors.any()" value="Send">
  </form>
</template>

<script>
import Form from '../classes/form.js';

export default {
  data() {
    return {
      loaded    : false,
      processing: false,
      form      : new Form({
        name   : null,
        email  : null,
        subject: null,
        message: null
      })
    };
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    async onSubmit() {
      try {
        this.processing = true;
        const response = await this.form.submit('/contact');
        this.processing = false;
        console.log(response.status);
      } catch (error) {
        this.processing = false;
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/_settings.scss";

form {
  display: flex;
  flex-direction: column;
  background: #f9f9f9;

  @media #{$medium} {
    padding: 2rem;
  }

  label {
    margin-bottom: 0.3rem;
    color: #333333;
  }

  span {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    color: red;
  }

  .error {
    border: 1px solid red !important;
  }

  input {
    height: 40px;
  }

  input:not([type="submit"]),
  textarea {
    margin-bottom: 0.3rem;
    padding: 0.25rem 1rem;
    outline: 0;
    border: 1px solid $secondary-color;
    font-weight: 400;
    color: #333333;
  }

  textarea {
    height: 180px;
    padding-top: 0.5rem;
  }

  input[type="submit"] {
    width: 150px;
    margin-top: 1rem;
    outline: 0;
    border: 0;
    background: $secondary-color;
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: darken($primary-color, 5%);
    }

    &.disabled {
      background: darken($primary-color, 5%);
    }
  }
}
</style>
