<template>
  <div id="app">
    <router-view v-if="$route.path === '/confirmation'" @back="goToHomePage"></router-view>
    <div v-if="$route.path !== '/confirmation'">
      <h1>FreshMart Online Grocery Shopping</h1>


    <BaseModal  :title="'Empty Basket'" v-if="showEmptyBasketModal" @close="showEmptyBasketModal = false"
      @proceed="proceedEmptyBasket">
      <template v-slot:modalText>
        Are you sure you want to remove all the items in the basket?
      </template>
      <template v-slot:modalProceed>
        Empty basket
      </template>
    </BaseModal>

    <BaseModal  :title="'Order Confirmation'" v-if="showCheckoutModal" @close="showCheckoutModal = false"
    @proceed="proceedConfirmation">
      <template v-slot:modalText>
        Proceed to have your order processed and we will deliver to you as soon as we can.<br>
        Thank you for shopping at FreshMart!
      </template>
      <template v-slot:modalProceed>
        Purchase
      </template>

    </BaseModal>

    <div class="container">
      <div class="items-box">
        <ItemCard v-for="(groceryItem, index) in groceryArray" :groceryItem="groceryItem" :key="index"
          @AddToBasket="handleAddItem" />
      </div>
      <div class="shopping-list">
        <ShoppingList :shoppingList="shoppingList" @showEmptybasketModal="handleShowEmptybasketModal"
          @showCheckoutModal="handleShowCheckoutModal" />
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import router from './router.js';

import groceryData from './data/grocery-data.json';
import ItemCard from './components/ItemCard.vue';
import ShoppingList from './components/ShoppingList.vue';
import BaseModal from './components/BaseModal.vue';

export default {
  name: 'App',
  components: {
    ItemCard,
    ShoppingList,
    BaseModal
  },
  router,
  data() {
    return {
      groceryArray: groceryData,
      shoppingList: [],
      showEmptyBasketModal: false,
      showCheckoutModal: false
    }
  },
  methods: {
    handleAddItem(item) {
      this.shoppingList.push(item);
      console.log("add", item);
    },
    handleShowEmptybasketModal() {
      this.showEmptyBasketModal = true
      console.log(this.showEmptyBasketModal);
    },
    handleShowCheckoutModal() {
      this.showCheckoutModal = true
      console.log(this.showCheckoutModal);
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
    goToHomePage() {
      this.$router.push('/');
    
    },

  }
}
</script>

<style lang="scss">
.container {
  display: flex;

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
</style>
