<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link text-white" :to="{ name: 'home' }">Home</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link text-white" :to="{ name: 'killerPage' }">KillerList</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link text-white" :to="{ name: 'killers-detail' }">details</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
