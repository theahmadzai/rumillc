<template>
    <div class="google-map" id="google-map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps';

export default {
  data() {
    return {
      KEY   : 'AIzaSyCyHWm6orZclDIdEbPHVroYgdTEMkKpzc4',
      zoom  : 15,
      coords: {
        lat: 34.504050,
        lng: 69.246456
      },
      content: 'Rumi Trading LLC'
    };
  },

  mounted() {
    GoogleMapsLoader.KEY = this.KEY;

    GoogleMapsLoader.load(() => {
      let map = new google.maps.Map(document.getElementById('google-map'), {
        zoom  : this.zoom,
        center: this.coords
      });

      let marker = new google.maps.Marker({
        position: this.coords,
        map     : map
      });

      let infoWindow = new google.maps.InfoWindow({
        content: this.content
      });

      infoWindow.open(map, marker);
    });
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 100%;
  height: 200px;

  @media (min-width: 40em) {
    width: 100%;
    height: 400px;
  }
}
</style>
