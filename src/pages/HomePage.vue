<script>
export default {
  name: "HomePage",

};
</script>

<template>
  <div class="main-bg">
    <router-link :to="{ name: 'killersPage' }"></router-link>
    <p class="text-center text-danger">CLICK HERE TO <br>JOIN OUR KILLERS LIST</p>
    <i class="fa-solid fa-arrow-left text-danger"></i>
    <div class="container">
      <h1 class="text-center pt-5 text-danger">KILLERS WEBSITE</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-bg {
  position: relative;


  a {
    height: 335px;
    width: 85px;
    left: 540px;
    top: 590px;
    position: absolute;
    display: block;
    cursor: pointer;

  }

  p {
    color: white;
    position: absolute;
    left: 650px;
    top: 570px;
    font-size: 50px;
    font-family: 'Creepster';
  }

  i {
    color: white;
    position: absolute;
    left: 620px;
    top: 730px;
    font-size: 50px;
  }

  h1 {
    font-size: 75px;
    font-family: 'Creepster';
    font-size: 130px;

  }

  height: 100vh;
  background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/807120/efffe0125a3257057d60b22e29798dbb3d34dc2d.jpg);
  background-size: cover;
}
</style>