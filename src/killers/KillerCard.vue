<script>
import { RouterLink } from "vue-router";

export default {
  name: "KillerCard",
  props: { killer: Object, isDetail: Boolean },
  components: { RouterLink },
  data: () => ({
    killers: [
      {
        id: 1,
        firstName: "leonardo",
        lastName: "Contino",
      },
      {
        id: 2,
        firstName: "Samu",
        lastName: "Pass",
      },
      {
        id: 3,
        firstName: "Ciccio",
        lastName: "Caputo",
      },
    ],
  }),
};
</script>

<template>
  <main class="m-5 gap-3 d-flex">
    <div v-for="killer in this.killers" class="card card-killer">
      <img
        src="data:image/jpeg;base64,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"
        class="img-fluid img-killer"
        alt="..."
      />
      <div class="card-body m-0 align-items-center p-2">
        <h5 class="text-center m-0">
          {{ killer.firstName }} {{ killer.lastName }}
        </h5>
        <!-- <RouterLink
          v-if="!isDetail"
          class="btn btn-primary"
          :to="{ name: 'killer-detail', params: { id: killer.id } }"
          >Vedi</RouterLink
        > -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.card-killer {
  width: 250px;
  height: 300px;

  .img-killer {
    height: 280px;
    width: 100%;
    object-fit: cover;
  }
}

.card-killer:hover {
  cursor: pointer;
}
</style>
