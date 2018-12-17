<template>
  <div
    v-if="this.$store.getters.getFlag"
    class="property">
    <div>中心 : {{ getCenter1() }}</div>
    <div>中心 : {{ getCenter2() }}</div>
    <div>拡大率 : {{ getZoom() }}</div>
  </div>
</template>

<script>
import { transform, fromLonLat } from 'ol/proj';
import { createStringXY } from 'ol/coordinate';
import { toStringXY, toLonLat, toStringHDMS } from 'ol/coordinate';

export default {
  name: 'MyProperty',
  methods: {
    getCenter1() {
      const currentCenter = this.$store.getters.getMap.getView().getCenter();
      const lonlat = transform(currentCenter, 'EPSG:3857', 'EPSG:4326');
      const stringifyFunc = createStringXY(2);
      return toStringXY(lonlat, 4);
    },
    getCenter2() {
      const currentCenter = this.$store.getters.getMap.getView().getCenter();
      return toStringHDMS(currentCenter, 1);
    },
    getZoom() {
      return this.$store.getters.getMap.getView().getZoom();
    }
  }
};
</script>

<style>
.property {
  width: 500px;
  margin: 30px auto;
  text-align: left;
  border: 1px solid gray;
  padding: 20px;
}
</style>
