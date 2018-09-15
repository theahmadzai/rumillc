<template>
  <div v-if="!loaded" class="loading rel"></div>
  <form v-else class="contact-form" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" novalidate>
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
      } catch (error) {
        console.log(error);
      } finally {
        this.processing = false;
      }
    }
  }
};
</script>
