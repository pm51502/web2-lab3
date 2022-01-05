<template>
  <div>
      <h1>Number facts</h1> 
      <FactTable :facts="allFacts" />
  </div>
</template>

<script>
import FactTable from "../components/FactTable.vue";

export default {
  name: "Facts",

  components: {
    FactTable
  },

  async created() {
    await this.$store.dispatch("fetchFacts");
  },

  computed: {
    allFacts() {
      return this.$store.getters.facts;
    }
  }
}
</script>
