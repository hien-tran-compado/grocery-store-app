<template>
  <div id="app">
    <h1>FreshMart Online Grocery Shopping</h1>
    <div class="container">

      <div class="items-box">
      <ItemCard
      v-for="(groceryItem, index) in groceryArray"
      :groceryItem="groceryItem"
      :key="index"
      @AddToBasket="handleAddItem"/>
    </div>
    <div class="shopping-list">
      <ShoppingList 
      :shoppingList="shoppingList"
      />
    </div>
    </div>

  </div>
</template>

<script>
import groceryData from './data/grocery-data.json'
import ItemCard from './components/ItemCard.vue';
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'App',
  components: {
    ItemCard, 
    ShoppingList
  },
  data() {
    return {
      groceryArray: groceryData,
      shoppingList: []
    }
  },
  methods: {
    handleAddItem(item) {
      this.shoppingList.push(item);
      console.log("add",item);
    }
  }
}
</script>

<style lang="scss">
.container {
  display:flex;
  .items-box {
    flex: 4;
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
  .shopping-list {
    flex: 1;
    padding: 0 20px;
  }
}
.items-box {
 
}
</style>
