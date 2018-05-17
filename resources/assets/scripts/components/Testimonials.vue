<template>
    <div class="testimonials">
        <img class="next" v-bind:src="testimonials[prev].image" v-on:click="move(1)">
        <div class="testimonial">
            <img v-bind:src="testimonials[current].image" v-bind:alt="`${testimonials[current].name}'s Message`">
            <p>
                <i class="fa fa-quote-left"></i>
                {{ testimonials[current].message }}
                <i class="fa fa-quote-right"></i>
            </p>
            <h3>- {{ testimonials[current].name }} -</h3>
        </div>
        <img class="prev" v-bind:src="testimonials[next].image" v-on:click="move(-1)">
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      current: 1,
      prev: 0,
      next: 2,
      size: null,
      testimonials: [
        {
          image: "https://goo.gl/r2vho4",
          name: "Mike Pence",
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, temporibus!"
        },
        {
          image: "https://goo.gl/ReWcjN",
          name: "John Doe",
          message:
            "The secret of life is honesty and fair dealing. If you can fake that, you've got it made."
        },
        {
          image: "https://goo.gl/goRgoh",
          name: "Donald J. Trump",
          message:
            "People really give you a hard time when you wear fake glasses out to a bar!"
        }
      ]
    };
  },
  mounted: function() {
    this.size = this.testimonials.length - 1;
  },
  methods: {
    move: function(pos = 1) {
      this.prev = this.check(this.prev + pos);
      this.current = this.check(this.current + pos);
      this.next = this.check(this.next + pos);
    },
    check: function(val) {
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
