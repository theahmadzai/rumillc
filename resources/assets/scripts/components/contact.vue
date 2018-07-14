<template>
    <form @submit.prevent="submit" novalidate>
        <label for="name">Your Name</label>
        <input type="text" name="name" v-model="name" v-validate="nameRules" :class="{error: errors.has('name')}">
        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>

        <label for="email">Your Email</label>
        <input type="email" name="email" v-model="email" v-validate="emailRules" :class="{error: errors.has('email')}">
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>

        <label for="subject">Subject</label>
        <input type="text" name="subject" v-model="subject" v-validate="subjectRules" :class="{error: errors.has('subject')}">
        <span v-show="errors.has('subject')">{{ errors.first('subject') }}</span>

        <label for="message">Your Message</label>
        <textarea name="message" v-model="message" v-validate="messageRules" :class="{error: errors.has('message')}"></textarea>
        <span v-show="errors.has('message')">{{ errors.first('message') }}</span>

        <input type="submit" value="Send">
    </form>
</template>

<script>
export default {
  data() {
    return {
      nameRules: {
        required: true,
        alpha   : true,
        min     : 3,
        max     : 30
      },
      emailRules: {
        required: true,
        email   : true
      },
      subjectRules: {
        required: true,
        min     : 5,
        max     : 200
      },
      messageRules: {
        required: true,
        min     : 5,
        max     : 2000
      },
      name   : null,
      email  : null,
      subject: null,
      message: null
    };
  },
  methods: {
    async submit() {
      let validate = await this.$validator.validateAll();

      if (!validate) {
        return;
      }

      try {
        const response = await axios.post('/contact', {
          params: {
            name   : this.name,
            email  : this.email,
            subject: this.subject,
            message: this.message
          }
        });

      } catch(error){
        console.log(error);
      }

      alert('Submitted');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/_settings.scss';

form {
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 2rem;
  background: #f9f9f9;

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

  input:not([type='submit']),
  textarea {
    margin-bottom: 0.3rem;
    padding: 0.25rem 1rem;
    outline: 0;
    border: 1px solid $secondary-color;
    font-style: italic;
    font-weight: 300;
    color: #666666;
  }

  textarea {
    height: 180px;
    padding-top: 0.5rem;
  }

  input[type='submit'] {
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
  }
}
</style>
