<script>
import axios from "axios";
const ApiBaseUri = "http://localhost:8000/api";
export default {
  name: "HomePage",
  components: {},
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
  <h1>Home page</h1>
</template>
