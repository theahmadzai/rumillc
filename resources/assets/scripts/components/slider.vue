<template>
    <div class="slider">
        <div class="prev" @click="move(-1)">
            <svg class="arrow">
                <path d="M 40 50 L 30 60 L 0 30 L 30 0 L 40 10 L 20 30 L 50 60"></path>
            </svg>
        </div>
        <div class="next" @click="move(1)">
            <svg class="arrow">
                <path d="M 0 10 L 10 0 L 40 30 L 10 60 L 0 50 L 20 30 L 0 10"></path>
            </svg>
        </div>
        <div class="views">
            <img v-for="(slide, index) in slides" :key="index" :src="slide.url" :class="{active: index == current}" @click="change(index)"/>
        </div>
        <div class="slide" @mouseover="stopRotation" @mouseout="startRotation">
          <transition name="slide">
              <img :src="slides[current].url" :alt="slides[current].title" v-if="loaded" @load="loading = !loading"/>
          </transition>
        </div>
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
    change(id) {
      this.current = id;
      this.loading = true;
    },
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
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  @media #{$medium} {
    height: 350px;
  }

  @media #{$large} {
    height: 500px;
  }

  .slide {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      margin-top: -15%;
      transition: all 2s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    &-enter-active {
      @include animate(fade, 2s);
    }

    &-leave-active {
      @include animate(pulse, 500ms reverse);
    }
  }

  .views {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: map-get($zindex, l2);
    display: none;
    transform: translateX(-50%);

    @media #{$medium} {
      display: block;
    }

    img {
      width: 70px;
      height: 50px;
      margin: 0 0.3rem;
      opacity: 0.7;
      transition: all 200ms ease;
      cursor: pointer;

      &.active {
        opacity: 1;
        border: 2px solid white;
      }

      &:hover {
        width: 80px;
      }
    }
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    z-index: map-get($zindex, l2);
    padding: 0.5rem 1rem;
    opacity: 0.6;
    transform: translateY(-50px);
    outline: 0;
    border: 0;
    background: #000000;
    cursor: pointer;

    .arrow {
      fill: #ffffff;
      width: 40px;
      height: 60px;
    }
  }

  .prev {
    left: 1rem;
  }

  .next {
    right: 1rem;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0.5rem;
    transform: translate(-50%, -50%);
    border: 6px solid #f3f3f3;
    border-top: 6px solid #333333;
    border-right: 6px solid #333333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}
</style>
