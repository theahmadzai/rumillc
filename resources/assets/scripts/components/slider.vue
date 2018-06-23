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
        <transition name="slide">
            <img class="slide"
            v-if="loaded"
            v-on:load="loading = !loading"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
            v-bind:src="slides[current].url"
            v-bind:alt="slides[current].title"/>
        </transition>
        <div class="loading" v-show="loading"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      size   : null,
      loaded : false,
      loading: true,
      timer  : null,
      slides : []
    };
  },
  mounted() {
    axios
      .get('/api/images?type=s')
      .then(response => {
        this.slides = response.data;
        this.size = this.slides.length - 1;
        this.startRotation();
        this.loaded = true;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    move(pos = 1) {
      let current = this.current + pos;
      if (current < 0) {
        current = this.size;
      } else if (current > this.size) {
        current = 0;
      }
      this.current = current;
      this.loading = true;
    },
    startRotation() {
      this.timer = setInterval(this.move, 5000);
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/_settings.scss';
@import '~@/_mixins.scss';

.slider {
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
  .slide {
    width: 100%;
    height: 100%;
    &-enter-active{
      @include animate(fade, 2s);
    }
    &-leave-active{
      @include animate(pulse, 500ms reverse);
    }
  }
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50px);
    outline: 0;
    border: 0;
    opacity: 0.6;
    padding:0.5rem 1rem;
    background:#000;
    cursor: pointer;
    .arrow{
      fill:#fff;
      width:40px;
      height:60px;
    }
  }
  .prev{
    left:1rem;
  }
  .next {
    right: 1rem;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    padding:0.5rem;
    border: 6px solid #f3f3f3;
    border-top: 6px solid #333;
    border-right: 6px solid #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}
</style>
