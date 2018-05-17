<template>
    <div class="slider">
        <button v-on:click="move(-1)" class="prev">Prev</button>
        <button v-on:click="move(1)" class="next">Next</button>
        <div class="loading" v-show="!loading"></div>
        <img
        v-bind:src="slides[current].img"
        v-bind:alt="slides[current].alt"
        v-on:load="loading = !loading"
        v-on:mouseover="stopRotation"
        v-on:mouseout="startRotation"
        v-show="loading">
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      current: 0,
      size: null,
      loading: false,
      timer: null,
      slides: [
        { img: "/img/slider/s1.jpeg", alt: "image" },
        { img: "/img/slider/s2.jpeg", alt: "image" },
        { img: "/img/slider/s3.jpeg", alt: "image" },
        { img: "/img/slider/s4.jpeg", alt: "image" },
        { img: "/img/slider/s5.jpeg", alt: "image" },
        { img: "/img/slider/s6.jpeg", alt: "image" },
        { img: "/img/slider/s7.jpeg", alt: "image" },
        { img: "/img/slider/s8.jpeg", alt: "image" },
        { img: "/img/slider/s9.jpeg", alt: "image" },
        { img: "/img/slider/s10.jpeg", alt: "image" }
      ]
    };
  },
  mounted: function() {
    this.size = this.slides.length - 1;
    this.startRotation();
  },
  methods: {
    move: function(pos = 1) {
      let current = this.current + pos;
      if (current < 0) {
        current = this.size;
      } else if (current > this.size) {
        current = 0;
      }
      this.current = current;
      this.loading = false;
    },
    startRotation: function() {
      this.timer = setInterval(this.move, 5000);
    },
    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
};
</script>
