<template>
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Number</th>
        <th scope="col">Fact</th>
      </tr>
    </thead>
    <tbody>
      <Fact v-for="fact in facts" 
            :key="fact.number" 
            :fact="fact" 
            @mark-fact="markFact"/>
    </tbody>
  </table>
</template>

<script>
import Fact from "./Fact.vue";

export default {
  name: "FactTable",

  props: {
    facts: Array,
  },
  
  components: {
    Fact,
  },

  methods: {
    async markFact(number) {
      await this.$store.dispatch("markFact", number);
    }
  }
};
</script>

<style></style>
