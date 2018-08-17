<template>
  <div class="column is-one-third">
    <div v-if=loading class="loading center"></div>
    <figure class="image image-frame">
      <img v-show="loading==false" :src=image.url :alt=image.alt @load="loading=false">
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  props: {
    image: {
      type    : Object,
      required: true
    }
  }
};
</script>
