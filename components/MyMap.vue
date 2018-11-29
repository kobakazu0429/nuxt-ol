<template>
  <div>
    <div id="map" />
    <div class="property">
      <div>中心 : {{ getCenter1() }}</div>
      <div>中心 : {{ getCenter2() }}</div>
      <div>拡大率 : {{ getZoom() }}</div>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from 'ol/interaction.js'
import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM.js'

import { createStringXY } from 'ol/coordinate'
import { toStringXY, toLonLat, toStringHDMS } from 'ol/coordinate'

import { transform, fromLonLat } from 'ol/proj'

const createMap = () => {
  new Map({
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  })
}

export default {
  name: 'MyMap',
  data: function() {
    return {
      map: null,
      center: null
    }
  },
  mounted: function() {
    this.map = new Map({
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([135, 35]),
        zoom: 5
      })
    })
  },
  methods: {
    getCenter1() {
      if (this.isExsitMap()) {
        const currentCenter = this.map.getView().getCenter()
        const lonlat = transform(currentCenter, 'EPSG:3857', 'EPSG:4326')
        const stringifyFunc = createStringXY(2)
        return toStringXY(lonlat, 4)
      }

      return ''
    },
    getCenter2() {
      if (this.isExsitMap()) {
        const currentCenter = this.map.getView().getCenter()
        return toStringHDMS(currentCenter, 1)
      }

      return ''
    },
    getZoom() {
      if (this.isExsitMap()) {
        return this.map.getView().getZoom()
      }
      return ''
    },
    isExsitMap() {
      if (typeof this.map === 'object') {
        if (this.map) {
          return true
        }
      }

      return false
    }
  }
}
</script>

<style>
#map {
  height: 600px;
}

.property {
  width: 500px;
  margin: 30px auto;
  text-align: left;
  border: 1px solid gray;
  padding: 20px;
}
</style>
