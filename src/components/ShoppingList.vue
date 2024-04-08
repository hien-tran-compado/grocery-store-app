<template>
    <div>
        <h2>Basket</h2>
        <ul>
            <li v-for="(shoppingListItem, index) in shoppingList"
            :key="index"
            >{{shoppingListItem}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ShoppingList',
    props: {
        shoppingList : {
            type: Array,
        }
    }
}
</script>

<style lang="scss">
</style>