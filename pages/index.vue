<template>
  <div class="container">
    <h1>This is Nuxt App</h1>
    <MyMap />
  </div>
</template>

<script>
import MyMap from '~/components/MyMap.vue';

export default {
  components: {
    MyMap
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 5vh;
}
</style>
