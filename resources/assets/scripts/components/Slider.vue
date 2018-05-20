<template>
    <div class="slider">
        <div v-on:click="move(-1)" class="prev">
            <svg class="arrow">
                <path d="M 40 50 L 30 60 L 0 30 L 30 0 L 40 10 L 20 30 L 50 60"></path>
            </svg>
        </div>
        <div v-on:click="move(1)" class="next">
            <svg class="arrow">
                <path d="M 0 10 L 10 0 L 40 30 L 10 60 L 0 50 L 20 30 L 0 10"></path>
            </svg>
        </div>
        <div class="loading" v-show="!loading"></div>
        <transition name="slide">
            <img class="slide"
            v-bind:src="slides[current].img"
            v-bind:alt="slides[current].alt"
            v-on:load="loading = !loading"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
            v-show="loading">
        </transition>
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
