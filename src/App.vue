<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
  name: 'App',
  components: { AppHeader, HomePage }
}
</script>
<template>
  <AppHeader></AppHeader>
  <home-page></home-page>
</template>