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
      // let res = await fetch("numbersapi.com/1..50?json");
      // let facts = await res.json();

      // let factsArr = []
      // for(let key in facts) {
      //   factsArr.push({
      //     number: key,
      //     fact: facts[key]
      //   });
      // }

      var res = await fetch("http://localhost:8080/facts");
      var factsArr = await res.json();

      //console.log(factsArr);
      context.commit("setFacts", factsArr);
    }
  },

  modules: {},
});
