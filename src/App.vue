<template>
  <div id="app">
    <router-view v-if="$route.path === '/confirmation'"></router-view>
    <router-view v-if="$route.path === '/'"></router-view>
  </div>
</template>

<script>
import router from './router.js';
export default {
  name: 'App',
  router,
}
</script>

<style>
</style>
