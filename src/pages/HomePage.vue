<script>
import axios from "axios";
import KillerPage from "./KillerPage.vue";
const ApiBaseUri = "http://localhost:8000/api";
export default {
  name: "HomePage",
  components: { KillerPage },
  data: () => ({
    killers: [],
  }),
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
  <div class="main-bg">
    <div class="container">
      <h1 class="text-center pt-5 text-white">KILLERS WEBSITE</h1>
    </div>
    <KillerPage :killers="killers"></KillerPage>
  </div>
</template>

<style lang="scss" scoped>
.main-bg {
  h1 {
    font-size: 75px;
  }

  height: 100vh;
  background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/807120/efffe0125a3257057d60b22e29798dbb3d34dc2d.jpg);
  background-size: cover;
}
</style>