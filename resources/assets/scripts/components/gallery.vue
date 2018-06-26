<template>
  <div class="section">

    <popper trigger="hover" :options="{placement: 'top'}">
      <div class="popper">
          Slide left for slow networks
      </div>

      <input slot="reference" class="range" step="3" min="3" max="9" v-model.number="offset" type="range" @change="loadImages()">
    </popper>

    <pagination class="pagination" :pagination="pagination" :offset="offset" @paginate="loadImages()"></pagination>

    <div v-if="this.loading==true" class="loading"></div>

    <div class="images">
      <gallery :images="images" :options="options" :index="index" @close="index = null"></gallery>
      <figure v-for="(image, key) in images" :key="key">
        <img :src="image.url" @click="index = key">
      </figure>
    </div>

  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import Pagination from './pagination';
import Popper from 'vue-popperjs';

export default {
  data(){
    return {
      index  : null,
      options: {
        urlProperty: 'url',
      },
      images    : [],
      pagination: {},
      offset    : 9,
      loading   : true
    };
  },
  mounted() {
    this.loadImages();
  },
  methods: {
    async loadImages() {
      this.loading = true;

      try {
        const response = await axios.get('/api/images', {
          params: {
            type  : 'g',
            offset: this.offset,
            page  : this.pagination.current_page
          }
        });

        this.images = response.data.data;
        this.pagination = response.data.meta;
        this.loading = false;

      } catch(error){
        console.log(error);
      }
    },
    changeOffset(val) {
      this.offset = val;
      console.log(val);
    }
  },
  components: {
    'gallery'   : VueGallery,
    'pagination': Pagination,
    'popper'    : Popper
  }
};
</script>

<style lang="scss" scoped>
.popper {
  position: absolute;
  z-index: 200000;
  display: inline-block;
  width: auto;
  margin-bottom: 10px;
  padding: 4px 8px;
  border: 1px #111111 solid;
  border-radius: 3px;
  background-color: #000000;
  -moz-box-shadow: rgb(0, 0, 0) 0 0 6px 0;
  -webkit-box-shadow: rgb(0, 0, 0) 0 0 6px 0;
  box-shadow: rgb(0, 0, 0) 0 0 6px 0;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  text-align: center;
}

.range {
  display: block;
  width: 40%;
  height: 5px;
  margin: 2rem auto;
  -webkit-appearance: none;
  outline: 0;
  background: #cccccc;
  cursor: pointer;

  &::-webkit-slider-thumb {
    width: 10px;
    height: 15px;
    -webkit-appearance: none;
    background: #aaaaaa;
    cursor: pointer;
  }
}

.pagination {
  margin-bottom: 3rem;
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

.images {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 0.5rem;

  figure {
    overflow: hidden;
    cursor: pointer;

    img {
      transition: all 500ms ease;

      &:hover {
        opacity: 0.8;
        transform: scale(1.5);
      }
    }
  }
}
</style>
