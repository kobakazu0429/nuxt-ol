<template>
  <div>
    <div
      id="map01"
    />
    <MyProperty />
  </div>
</template>

<script>
import MyProperty from '~/components/MyProperty.vue';
import * as MyMapJS from '../assets/mymap.js';

export default {
  name: 'MyMap',
  components: {
    MyProperty
  },
  mounted: function() {
    MyMapJS.initMap(this);
  }
};
</script>

<style>
#map01 {
  height: 600px;
}
</style>
