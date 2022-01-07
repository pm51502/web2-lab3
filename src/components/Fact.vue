<template>
    <tr @dblclick="$emit('mark-fact', fact.number)"
        :class="[fact.marked ? 'marked' : '']">
        <td >{{ fact.number }}</td>
        <td class="text-start">{{ fact.fact }}</td>
    </tr>
</template>

<script>
export default {
  name: "Fact",
  props: {
    fact: Object
  }
};
</script>
 
<style scoped>

tr {
  cursor: pointer;
}

.marked {
  border-left: 2px solid #42b983;
}

</style>