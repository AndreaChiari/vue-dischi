<script>

export default {
  name: "KillerCard",
  props: { killer: Object, isDetail: Boolean },
  data: () => ({

  }),
};
</script>

<template>
  <div class="col-4">
    <div class="card card-killer">
      <div v-if="killer.picture">
        <img :src="killer.picture" class="img-fluid img-killer" :alt="killer.first_name">
      </div>
      <div class="card-body align-items-center p-2">
        <h4 class="text-center m-0">
          {{ killer.first_name }} {{ killer.last_name }}
        </h4>
        <div>Age:{{ killer.age }}</div>
        <div>Kills:{{ killer.kills }}</div>
        <div>{{ killer.wanted ? 'WANTED' : 'ARRESTED' }}</div>
        <div>
          <router-link v-if="!isDetail" class="btn btn-primary"
            :to="{ name: 'killer-detail', params: { id: killer.id } }">See more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-killer {
  height: 100px;
  width: 100%;
  object-fit: cover;
}

.card-killer:hover {
  cursor: pointer;
}
</style>
