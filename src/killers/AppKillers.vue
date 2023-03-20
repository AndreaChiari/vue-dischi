<script>
import KillerCard from "./KillerCard.vue";

export default {
  name: "KillerList",
  components: { KillerCard },
  props: { killers: Array },
};
</script>

<template>
  <KillerCard v-for="killer in killers" :key="killer.id" :killer="killer">
  </KillerCard>
</template>
