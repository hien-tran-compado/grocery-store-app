<template>
	<div>
		<h2>Basket</h2>
		<hr>
		<div>
			<ul>
				<li class="list-header">
					<span class="item-name">Item</span>
					<span class="item-price">Price</span>
					<span class="item-quantity">Quantity</span>
					<span class="item-subTotal">Subtotal</span>
					<span class="item-remove"></span>
				</li>
				<li class="list-item" v-for="(shoppingListItem, index) in shoppingList" :key="index">
					<span class="item-name"> {{ shoppingListItem.name }}</span>
					<span class="item-price">${{ shoppingListItem.price.toFixed(2) }}</span>
					<span class="item-quantity">{{ shoppingListItem.quantity }}
						<button @click="incrementQuantity(index)" class="item-actionButton">+</button>
						<button @click="decrementQuantity(index)" class="item-actionButton">-</button>
					</span>
					<span class="item-subTotal">${{ (shoppingListItem.price * shoppingListItem.quantity).toFixed(2) }}</span>
					<span class="item-remove"><button class="item-actionButton" @click="removeItem(index)">x</button></span>
				</li>
			</ul>
		</div>
		<BaseButton buttonStyle="outlined" @click.native="handleEmptybasket" :disabled="shoppingList.length === 0">Empty
			Basket</BaseButton>
		<hr>
		<div class="basket-total">
			<h2>Total:</h2>
			<h2>${{ total.toFixed(2) }}</h2>
		</div>
		<BaseButton buttonStyle="filled" @click.native="handleCheckout" :disabled="shoppingList.length === 0">Checkout
		</BaseButton>
	</div>
</template>
:
<script>
import BaseButton from './BaseButton.vue'
export default {
	name: 'ShoppingList',
	components: {
		BaseButton
	},
	data() {
		return {
			sortOrder: 'desc',
		}
	},
	props: {
		shoppingList: {
			type: Array,
		},
		total: {
			type: Number,
			required: true
		}
	},
	computed: {
		// total() {
		// 	const totalPrice = this.shoppingList.reduce((total, item) => {
		// 		return total + this.calculateItemTotal(item);
		// 	}, 0);
		// 	return parseFloat(totalPrice.toFixed(2));
		// }
	},
	methods: {
		handleEmptybasket() {
			this.$emit('showEmptybasketModal');
		},
		handleCheckout() {
			this.$emit('showCheckoutModal');
		},
		removeItem(index) {
			this.$emit('removeItem', index)
		},
		incrementQuantity(index) {
			this.$emit('incrementQuantity', index)
		},
		decrementQuantity(index) {
			this.$emit('decrementQuantity', index)
		},
	}
}
</script>

<style lang="scss" scoped>
ul {
	list-style-type: none;
	padding-left: 0;

	li {
		display: flex;
		justify-content: space-between;
	}

	li:nth-child(odd) {
		background-color: white
	}

	li:nth-child(even) {
		background-color: #f2f2f2
	}
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
	width: 25%;
}

span.item-price {
	width: 35%;
}

span.item-quantity {
	width: 35%;
	text-align: left
}

span.item-subTotal {
	width: 20%;
	text-align: right
}

span.item-remove {
	width: 10%;
	text-align: right;

	.item-removeButton {
		background-color: transparent;

		align-items: center;

	}
}

.item-actionButton {
	border: 1px solid grey;
	box-shadow: 0px 1px 1px 0px #00000040;
	border-radius: 50%;
	padding: 0;
	width: 15px;
	height: 15px;
}

.basket-total {
	display: flex;
	justify-content: space-between;
}
</style>
