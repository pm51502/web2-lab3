<template>
    <tr>
        <td>{{ fact.number }}</td>
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
