<template>
  <div>  
    <h2>Confirmation Page here</h2>
    <button @click="goToHomePage">Back</button>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'ConfirmationPage',
  methods: {
    goToHomePag() {
      router.push('/');
      this.$emit('back');
    }
  }
}
</script>

<style>
</style>