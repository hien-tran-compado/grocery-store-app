<template>
    <div>
        <h2>Basket</h2>
				<div>
					<ul>
            <li v-for="(shoppingListItem, index) in shoppingList" :key="index">
                <span>{{shoppingListItem.name}}</span>
                <span>{{shoppingListItem.price}}</span>
            </li>
        </ul>
				</div>
				<BaseButton
					buttonStyle="outlined"
					@click.native="handleEmptybasket"
				>Empty Basket</BaseButton>
				<hr>
					<h2>Total: {{ total }}</h2>
				<BaseButton
					buttonStyle="filled"
					@click.native="handleCheckout"
				>Checkout</BaseButton>

    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    name: 'ShoppingList',
		components: {
			BaseButton
		},
    props: {
        shoppingList : {
            type: Array,
        },
    },
		computed: {
			total() {
				const totalPrice = this.shoppingList.reduce((total,item) => {
					return total + item.price;
				},0);
			return parseFloat(totalPrice.toFixed(2));
			}
		},
		methods: {
			handleEmptybasket() {
				console.log('showEmptybasketModal')
				this.$emit('showEmptybasketModal');
			},
			handleCheckout() {
				console.log('showCheckoutModal')
				this.$emit('showCheckoutModal');
			}
		}
}
</script>

<style lang="scss">
</style>

