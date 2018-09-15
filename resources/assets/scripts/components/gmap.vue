<template>
    <div class="google-map" id="google-map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps';

export default {
  data() {
    return {
      KEY   : 'AIzaSyDx3yYcoopvhjhEuo4Oxi687cAs6_NYPZI',
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
      const map = new google.maps.Map(document.getElementById('google-map'), {
        zoom  : this.zoom,
        center: this.coords
      });

      const marker = new google.maps.Marker({
        position: this.coords,
        map
      });

      const infoWindow = new google.maps.InfoWindow({
        content: this.content
      });

      infoWindow.open(map, marker);
    });
  }
};
</script>
