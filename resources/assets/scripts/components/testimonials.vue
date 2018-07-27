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
    this.getTestimonials();
  },
  methods: {
    async getTestimonials() {
      try {
        const response = await axios.get('/api/testimonials');
        this.testimonials = response.data;
        this.size = this.testimonials.length - 1;
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
    },
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

<style lang="scss" scoped>
@import "~@/_settings.scss";
@import "~@/_mixins.scss";

.testimonials {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background: $primary-color;

  @media #{$large} {
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 4rem;
  }

  .prev,
  .next {
    box-shadow: 0 6px 35px 3px rgba($secondary-color, 0.9);
    cursor: pointer;

    &:hover {
      width: 120px;
      height: 120px;
      border: 5px solid white;
      box-shadow: 0 0 60px 10px rgba($secondary-color, 0.9);
      transition: all 500ms ease;
    }
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
    border: 5px solid white;
    border-radius: 100%;
    transition: all 500ms ease;

    @media #{$medium} {
      width: 140px;
      height: 140px;
      border: none;
    }
  }

  .testimonial {
    position: relative;
    order: -1;
    max-width: 600px;
    min-height: 300px;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    background: #ffffff;
    box-shadow: 0 6px 35px 3px rgba($secondary-color, 0.9);
    overflow: hidden;
    text-align: center;
    perspective: 1px;

    @media (min-width: 772px) {
      order: initial;
      margin-bottom: 0;
      padding: 2rem;
    }

    &:hover {
      @include animate(pulse, 300ms);
    }

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: -10;
      height: 130px;
      transform: prespective-3d;
      transform: 0;
      background: #f1f1f1;
      content: "";

      @media #{$medium} {
        height: 100px;
        transform: rotateX(45deg);
      }
    }

    i {
      display: block;
      color: #555555;

      &.fa-quote-left {
        margin-bottom: 1rem;
        text-align: left;
      }

      &.fa-quote-right {
        margin-top: 1rem;
        text-align: right;
      }
    }

    img {
      z-index: 10;
      border: 10px solid #ffffff;
    }

    p {
      margin-top: 1rem;
      font-weight: 300;
      line-height: 2rem;
      color: #555555;

      @media #{$medium} {
        padding: 0 3rem;
      }
    }

    h3 {
      margin-top: 2rem;
      font-weight: 400;
      color: #555555;
    }
  }
}
</style>
