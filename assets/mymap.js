import 'ol/ol.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import { fromLonLat } from 'ol/proj.js';
import { ScaleLine } from 'ol/control.js';
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from 'ol/interaction.js';

export const initMap = vm => {
  const view = new View({ center: fromLonLat([140.097, 37.856]), zoom: 8 });
  const layers = [new TileLayer({ source: new OSM() })];
  const interactions = defaultInteractions().extend([new DragRotateAndZoom()]);

  const map = new Map({
    target: 'map01',
    interactions,
    layers,
    view
  });

  map.addControl(new ScaleLine());
  vm.$store.commit('setMap', map);
};
