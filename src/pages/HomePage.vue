<script>
import axios from "axios";
import AppKillers from "../killers/AppKillers.vue";
import KillerCard from "../killers/KillerCard.vue";
const ApiBaseUri = "http://localhost:8000/api";
export default {
  name: "HomePage",
  components: { AppKillers, KillerCard },
  data: () => ({
    killers: [],
  }),
  methods: {
    fetchProjects() {
      axios.get(ApiBaseUri + "/killers").then((res) => {
        this.killers = res.data;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <AppKillers></AppKillers>
  <KillerCard></KillerCard>
</template>
