<template>
    <div class="testimonials" v-if="loaded">
        <img class="next" v-bind:src="testimonials[prev].image" v-on:click="move(-1)">
        <div class="testimonial">
            <img v-bind:src="testimonials[current].image" v-bind:alt="`${testimonials[current].name}'s Message`">
            <p>
                <i class="fa fa-quote-left"></i>
                {{ testimonials[current].message }}
                <i class="fa fa-quote-right"></i>
            </p>
            <h3>- {{ testimonials[current].name }} -</h3>
        </div>
        <img class="prev" v-bind:src="testimonials[next].image" v-on:click="move(1)">
    </div>
</template>

<script>
export default {
  data() {
    return {
      current     : 1,
      prev        : 0,
      next        : 2,
      size        : null,
      loaded      : false,
      testimonials: []
    };
  },
  mounted() {
    axios
      .get('/api/testimonials')
      .then(response => {
        this.testimonials = response.data;
        this.size = this.testimonials.length - 1;
        this.loaded = true;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    move(pos = 1) {
      this.prev = this.check(this.prev + pos);
      this.current = this.check(this.current + pos);
      this.next = this.check(this.next + pos);
    },
    check(val) {
      if (val < 0) {
        val = this.size;
      } else if (val > this.size) {
        val = 0;
      }
      return val;
    }
  }
};
</script>
