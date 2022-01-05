<template>
  <div>
    <h1>Number fact generator</h1>
    <form>
      <div class="form-group mb-3">
        <label for="number">Number</label>
        <input type="number" class="form-control" v-model="number" @keyup="numberToFact"/>
      </div>
      <div class="form-group mb-3">
        <label for="currentFact">Number Fact</label>
        <textarea
          class="form-control"
          rows="3"
          v-model="currentFact"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FactGenerator",

  data() {
    return {
      number: 0,
      currentFact: "0 is the coldest possible temperature old the Kelvin scale.",
    };
  },

  methods: {
    async numberToFact() {
      //let res = await fetch(`numbersapi.com/${this.number}?json`);

      var res = await fetch(`https://web2lab3.herokuapp.com/facts/${this.number}`);
      let fact = await res.json();
      this.currentFact = fact.fact;
    }
  }
};
</script>

<style scoped>

form { 
  text-align: start;
}
</style>
