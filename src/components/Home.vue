<template lang="html">
  <div class="greeting">
    <h2>
      Wellcome to the Vue.js blog
    </h2>
    <img src="../assets/logo.png" alt="vuejs logo">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
    title: 'Owl News - Главная',
    name: 'home',
}
</script>

<style lang="scss">
    .greeting {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }
</style>