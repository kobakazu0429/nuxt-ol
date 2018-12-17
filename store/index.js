export const strict = false;

export const state = () => ({
  map01: null,
  map01Flag: false
});

export const mutations = {
  setMap(state, payload) {
    state.map01 = payload;
    state.map01Flag = true;
  }
};

export const getters = {
  getMap(state) {
    return state.map01;
  },
  getFlag(state) {
    return state.map01Flag;
  }
};
