<script>
import axios from "axios";
import KillerCard from "../killers/KillerCard.vue";
const ApiBaseUri = "http://localhost:8000/api";

export default {
  name: "KillerList",
  data: () => ({
    killers: [],
  }),
  components: { KillerCard },
  methods: {
    fetchKillers() {
      axios.get(ApiBaseUri + "/killers").then((res) => {
        this.killers = res.data;
      });
    },
  },
  created() {
    this.fetchKillers();
  },

};
</script>

<template>
  <main class="container py-4">
    <div class="row g-4">
      <KillerCard v-for="killer in killers" :key="killer.id" :killer="killer"></KillerCard>
    </div>
  </main>
</template>
