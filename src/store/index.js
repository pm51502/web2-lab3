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
    },
  },

  actions: {
    async fetchFacts(context) {
      var res = await fetch("https://web2lab3.herokuapp.com/api/facts");
      var factsArr = await res.json();
      context.commit("setFacts", factsArr);
    },
    markFact(context, number) {
      console.log("marking fact (action)", number);
      var newArr = context.getters.facts.map(f => f.number == number ? {...f, marked: !f.marked} : f);
      context.commit("setFacts", newArr);
    }
  },

  modules: {},
});
