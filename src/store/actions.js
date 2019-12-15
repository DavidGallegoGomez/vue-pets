// payload = pet + species

export default {
  addPet: ({ commit }, payload) => {
    commit("appendPet", payload);
  }
};
