import { createStore } from "vuex";

export default createStore({
  state: {
    facts: []
  },

  getters: {
    facts(state) {
      return state.facts;
    }
  },

  mutations: {
    setFacts(state, facts) {
      state.facts = facts;
    }
  },

  actions: {
    async fetchFacts(context) {
      var res = await fetch("https://web2lab3.herokuapp.com/api/facts");
      var factsArr = await res.json();
      context.commit("setFacts", factsArr);
    }
  },

  modules: {},
});
