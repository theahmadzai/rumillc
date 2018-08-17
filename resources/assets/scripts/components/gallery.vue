<template>
  <div class="section">
    <input type="range" class="range-gallery" step="3" min="3" max="9" v-model.number=offset @change=loadImages>

    <div v-if=loading class="loading rel"></div>
    <div v-else>
      <pagination :pagination=pagination :offset=offset @paginate=loadImages></pagination>

      <gallery :images=images :options=options :index=index @close="index = null"></gallery>

      <div class="columns is-multiline is-8">
        <image-component v-for="(image, key) in images" :key=key :image=image @click.native="index = key"></image-component>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import Pagination from './pagination';
import Image from './image';

export default {
  data() {
    return {
      loading: true,
      index  : null,
      options: {
        urlProperty: 'url'
      },
      images    : [],
      pagination: {},
      offset    : 9
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
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    gallery          : VueGallery,
    pagination       : Pagination,
    'image-component': Image
  }
};
</script>
