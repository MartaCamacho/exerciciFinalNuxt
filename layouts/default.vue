<template>
  <div id="app">
    <Header />
    <button class="mt-2 btn-dark" v-if="$route.path !== '/'" @click="back">Tornar</button>
    <nuxt />
    <Footer />
  </div>
</template>

<style>
@import url('@/assets/styles/default.css')
</style>

<script src="@/scripts/default.js"></script>
