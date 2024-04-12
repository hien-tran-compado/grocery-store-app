<template>
    <div class="item-card">
      <img 
      :src="groceryItem.image_url" 
      class="card-image">
      <div class="card-content">
        <div class="card-body">        
            <p class="card-title">{{groceryItem.name}}</p>
            <p class="card-description">${{groceryItem.price}}</p>
        </div> 
        <BaseButton
            buttonStyle="outlined"
            @click.native="handleAddToBasket()"
        >Add
        </BaseButton> 
       </div>
    </div>
  </template>
  
  <script>
  import BaseButton from './BaseButton.vue'
  export default {
    name: 'ItemCard',
    components: {
        BaseButton
    },
    data() {
        return {
            buttonStyle: ''
        }
    },
    props: {
        groceryItem : {
            type: Object,
            required: true
        }
    },
    methods: {
        handleAddToBasket () {
            console.log('AddToBasket',this.groceryItem);
            this.$emit('AddToBasket',this.groceryItem);
        }
    }
  }
  </script>
  
  <style lang="scss">
  .item-card {
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 10px;
    padding: 10px;
    .card-image {
        object-fit: cover;
    }
    .card-body {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .card-button {
        width: 100%; 
        display: flex; 
        justify-content: center;
    }
  }
  </style>

  