<template>
  <div>
    <h1>FreshMart Online Grocery Shopping</h1>
    <div class="container">
      <div>
        <button class="sort-button" @click="toggleSortOrder">Price&#8593;&#8595;</button>
        <div class="items-box">
          <ItemCard v-for="(groceryItem, index) in sortedGroceryArray" 
            :groceryItem="groceryItem" 
            :key="index"
            @AddToBasket="handleAddItem" />
        </div>
      </div>
      <div class="shopping-list">
        <ShoppingList 
          :shoppingList="shoppingList" 
          @showEmptybasketModal="handleShowEmptybasketModal"
          @showCheckoutModal="handleShowCheckoutModal"
          @removeItem="handleRemoveItem(index)" />
      </div>
    </div>

    <BaseModal :title="'Empty Basket'" v-if="showEmptyBasketModal" @close="showEmptyBasketModal = false"
      @proceed="proceedEmptyBasket">
      <template v-slot:modalText>
        Are you sure you want to remove all the items in the basket?
      </template>
      <template v-slot:modalProceed>
        Empty basket
      </template>
    </BaseModal>

    <BaseModal :title="'Order Confirmation'" v-if="showCheckoutModal" @close="showCheckoutModal = false"
      @proceed="proceedConfirmation">
      <template v-slot:modalText>
        Proceed to have your order processed and we will deliver to you as soon as we can.<br>
        Thank you for shopping at FreshMart!
      </template>
      <template v-slot:modalProceed>
        Purchase
      </template>
    </BaseModal>

  </div>
</template>

<script>
import router from '../router';

import groceryData from '../data/grocery-data.json';
import ItemCard from '../components/ItemCard.vue';
import ShoppingList from '../components/ShoppingList.vue';
import BaseModal from '../components/BaseModal.vue';
export default {
  name: 'HomePage',
  components: {
    ItemCard,
    ShoppingList,
    BaseModal
  },
  router,
  computed: {
    sortedGroceryArray() {
      return [...this.groceryArray]
    }
  },
  data() {
    return {
      groceryArray: groceryData,
      shoppingList: [],
      showEmptyBasketModal: false,
      showCheckoutModal: false,
      sortOrder: 'asc'
    }
  },
  methods: {
    handleAddItem(item) {
      const existingItem = this.shoppingList.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.shoppingList.push({...item, quantity: 1});
      }
    },
    handleShowEmptybasketModal() {
      this.showEmptyBasketModal = true
    },
    handleShowCheckoutModal() {
      this.showCheckoutModal = true
    },
    proceedEmptyBasket() {
      this.shoppingList = [];
      this.showEmptyBasketModal = false;
      this.showCheckoutModal = false;
    },
    proceedConfirmation() {
      this.$router.push('/confirmation');
      this.showEmptyBasketModal = false;
      this.showCheckoutModal = false;
    },
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      if (this.sortOrder === 'asc') {
        this.groceryArray.sort((a, b) => a.price - b.price);
      } else {
        this.groceryArray.sort((a, b) => b.price - a.price);
      }
    },
    handleRemoveItem(index) {
      this.shoppingList.splice(index,1);
    }
  }
}
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}
.container {
  display: flex;
  .sort-button {
    background-color: white;
    border: 1px solid grey;
    margin: 0 0 5px 0;
  }
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
    border: 1px solid grey;
    margin: 0 0 0 10px;
  }
}
</style>