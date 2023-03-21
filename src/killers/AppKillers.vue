<script>
import KillerCard from "./KillerCard.vue";

export default {
  name: "KillerList",
  components: { KillerCard },
  props: { killers: Array },
};
</script>

<template>
  <KillerCard></KillerCard>
</template>
