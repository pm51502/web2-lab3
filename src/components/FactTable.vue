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
            :fact="fact" />
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
};
</script>

<style></style>
