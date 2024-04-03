<template>
  <div id="app">
    <h1>FreshMart Online Grocery Shopping</h1>
    <div class="items-box">
    <ItemCard
    v-for="(groceryItem, index) in groceryArray"
    :groceryItem="groceryItem"
    :key="index"/>
    </div>
  </div>
</template>

<script>
import groceryData from './data/grocery-data.json'
import ItemCard from './components/ItemCard.vue';

export default {
  name: 'App',
  components: {
    ItemCard
  },
  data() {
    return {
      groceryArray: groceryData
    }
  }
}
</script>

<style lang="scss">
.items-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 758px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
