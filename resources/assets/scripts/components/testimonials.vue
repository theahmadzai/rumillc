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

<style lang="scss" scoped>
@import '~@/_settings.scss';
@import '~@/_mixins.scss';

.testimonials {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:4rem;
  background:$primary-color;

  .prev,
  .next {
    cursor: pointer;
    box-shadow: 0 6px 35px 3px rgba($secondary-color,0.9);

    &:hover{
      box-shadow: 0 0 60px 10px rgba($secondary-color,0.9);
      border:5px solid white;
      transition:all 500ms ease;
    }
  }

  .testimonial {
    position:relative;
    overflow:hidden;
    width:600px;
    min-height:300px;
    text-align: center;
    padding:2rem;
    background:#fff;
    box-shadow: 0 6px 35px 3px rgba($secondary-color,0.9);
    perspective:1px;

    &:hover{
      @include animate(pulse, 300ms);
    }

    &::before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      right:0;
      height:100px;
      transform:prespective-3d;
      transform: rotateX(45deg);
      background:#f1f1f1;
      z-index:-10;
    }

    i{
      display:block;
      color:#555;
      &.fa-quote-left {
        text-align:left;
        margin-bottom:1rem;
      }
      &.fa-quote-right{

        text-align:right;
        margin-top:1rem;
      }
    }
    img{
      z-index:10;
      border:10px solid #fff;
    }
    p{
      margin-top:1rem;
      padding:0 3rem;
      font-size:1rem;
      font-weight:300;
      line-height:2rem;
      color:#555;
    }
    h3{
      margin-top:2rem;
      font-weight:400;
      color:#555;
    }
  }

  img{
    border-radius:50%;
    width:140px;
    height:140px;
  }
}
</style>
