<template>
  <div v-if=done class="notification">
      <button class="delete" @click="done = false"></button>Thanks for your contacting.
    </div>
  <div v-else class="review-block" style="background:#fafafa; padding:1rem; position:relative;">
    <slot></slot>
    <p><strong>Product ID:</strong> {{this.product_id}}</p>
    <p><strong>Product Name:</strong> {{this.product_name}}</p>
    <hr>
    <form class="review-write" @submit.prevent=onSubmit @keydown="form.errors.clear($event.target.name)">
      <input type="text" name="name" placeholder="Full Name" v-model=form.name>
      <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
      <input type="text" name="email" placeholder="Email Address" v-model=form.email>
      <span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
      <input type="text" name="subject" placeholder="Subject" v-model=form.subject>
      <span class="help is-danger" v-if="form.errors.has('subject')" v-text="form.errors.get('subject')"></span>
      <textarea placeholder="Message" name="message" v-model=form.message></textarea>
      <span class="help is-danger" v-if="form.errors.has('message')" v-text="form.errors.get('message')"></span>
      <div v-if=processing class="process-button">
        <div class="loading left"></div>
      </div>
      <button v-else type="submit" :disabled="form.errors.any()" :class="{disabled:form.errors.any()}">Send Mail</button>
    </form>
  </div>
</template>

<script>
import Form from '../classes/form.js';

export default {
  props: {
    product_id: {
      required: true
    },
    product_name: {
      required: true
    }
  },
  data() {
    return {
      processing: false,
      done      : false,
      form      : new Form({
        product_id  : this.product_id,
        product_name: this.product_name,
        name        : null,
        email       : null,
        subject     : null,
        message     : null
      })
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.processing = true;
        const response = await this.form.submit('/product');
        this.done = true;
      } catch (error) {
        console.log(error);
      } finally {
        this.processing = false;
      }
    }
  }
};
</script>


