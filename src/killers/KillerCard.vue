<script>
import { RouterLink } from "vue-router";

export default {
  name: "KillerCard",
  props: { killer: Object, isDetail: Boolean },
  components: { RouterLink },
  data: () => ({

  }),
};
</script>

<template>
  <main class="m-5 gap-3 d-flex">
    <div class="card card-killer">
      <img src="" class="img-fluid img-killer" alt="..." />
      <div class="card-body m-0 align-items-center p-2">
        <h5 class="text-center m-0">
          {{ killer.first_name }} {{ killer.last_name }}
        </h5>
        <RouterLink v-if="!isDetail" class="btn btn-primary" :to="{ name: 'killer-detail', params: { id: killer.id } }">
          Vedi</RouterLink>

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
