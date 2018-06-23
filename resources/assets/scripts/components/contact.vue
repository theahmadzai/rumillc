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

      alert('Submitted');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/_settings.scss';

form{
  background:#f9f9f9;
  padding:2rem;
  width:500px;
  display:flex;
  flex-direction:column;

  label{
    margin-bottom:0.3rem;
    color:#333;
  }

  span {
    margin-bottom:1rem;
    font-size:0.8rem;
    color:red;
  }

  .error{
    border:1px solid red !important;
  }

  input:not([type="submit"]),textarea{
    padding:0.25rem 1rem;
    margin-bottom:0.3rem;
    outline:0;
    font-style:italic;
    font-weight:300;
    color:#666;
    border:1px solid $secondary-color;
  }
  input{
    height:40px;
  }
  textarea{
    height:180px;
    padding-top:0.5rem;
  }
  input[type="submit"]{
    width:150px;
    background:$secondary-color;
    color:#fff;
    border:0;
    font-size:1.1rem;
    font-weight:600;
    text-transform: uppercase;
    margin-top:1rem;
    cursor:pointer;
    outline:0;
    &:hover{
      background:darken($primary-color,5%);
    }
  }
}
</style>
