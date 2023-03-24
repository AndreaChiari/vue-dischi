<script>
export default {
  name: "HomePage",

};
</script>

<template>
  <div class="main-bg">
    <div class="container">
      <div class="row py-5">
        <div class="col-12">
          <h1 class="text-center text-danger">KILLERS WEBSITE</h1>
        </div>
        <router-link :to="{ name: 'killersPage' }"
          class="col-12 text-decoration-none d-flex flex-column justify-content-center align-items-center">
          <p class="text-center text-danger">CLICK HERE TO</p>
          <p class="text-center text-danger">JOIN OUR KILLERS LIST</p>
          <i class="fa-solid fa-arrow-left text-danger"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-bg {
  // position: relative;
  // height: 100vh;
  background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/807120/efffe0125a3257057d60b22e29798dbb3d34dc2d.jpg);
  background-size: cover;

  p {
    color: white;
    // position: absolute;
    // left: 650px;
    // top: 570px;
    font-size: 50px;
    font-family: 'Creepster';
  }

  i {
    color: white;
    // position: absolute;
    // left: 620px;
    // top: 730px;
    font-size: 40px;
  }

  h1 {
    // font-size: 75px;
    font-family: 'Creepster';
    font-size: 130px;
    margin-bottom: 15rem;

  }
}
</style>