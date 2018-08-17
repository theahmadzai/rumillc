<template>
  <figure class="image">
    <div v-if=loading class="loading rel center"></div>
    <img v-show=!loading :src=src :alt=alt @load="loading=false">
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type    : String,
      required: true
    },
    alt: {
      type: String
    }
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>
