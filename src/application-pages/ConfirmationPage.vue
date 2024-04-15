<template>
  <div class="confirmation-wrapper">
    <h1 class="confirmation-header">Your order has been confirm and is being processed </h1>
    <p>Order Summary</p>
    <ul>
      <li class="list-header">
        <span class="item-name">Item</span>
        <span class="item-quantity">Quantity</span>
        <span class="item-price">Unit Price</span>
        <span class="item-subtotal">Price</span>
      </li>
      <li class="list-item" v-for="(shoppingListItem, index) in shoppingList" :key="index">
        <span class="item-name"> {{ shoppingListItem.name }}</span>
        <span class="item-quantity">{{ shoppingListItem.quantity }}</span>
        <span class="item-price">${{ shoppingListItem.price.toFixed(2) }}</span>
        <span class="item-subtotal">${{ (shoppingListItem.quantity * shoppingListItem.price).toFixed(2) }}</span>
      </li>
    </ul>
    <hr>
    <div class="basket-total">
      <h2>Total:</h2>
      <h2>${{ total.toFixed(2) }}</h2>
    </div>
    <p>Your order has been confirm and is being processed.</p>
    <p>You will receive an email with your order details shortly. <br>
      If you have any questions or need further assistance, please don't hesitate to contact our customer support team.
    </p>
    <p>Thank you for shopping with us!</p>
    <router-link to="/" class="confirmation-homepage">> Return to home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationPage',
  props: {
    shoppingList: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.confirmation-wrapper {
  margin: 30px 200px;

  .confirmation-header {
    text-transform: capitalize;
  }

  .confirmation-homepage {
    color: orange;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
  }

  .confirmation-homepage:hover {
    color: rgba(255, 166, 0, 0.534);
    ;
  }

}
ul {
	padding-left: 0;
}
.list-header {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.list-item {
  display: flex;
  justify-content: space-between;
}

span.item-name {
  width: 33%;

}
span.item-quantity {
  width: 33%;
  justify-content: left;
  text-align: center;
}

span.item-price {
  width: 33%;
  justify-content: left;
  text-align: center;
}
span.item-subtotal {
  width: 33%;
  justify-content: right;
  text-align: right;
}

.basket-total {
  display: flex;
  justify-content:space-between;

}
</style>