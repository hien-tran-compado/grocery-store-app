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
        <div class="card-button">
            <button class="button">Add</button>
        </div>     
       </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ItemCard',
    props: {
        groceryItem : {
            type: Object,
            required: true
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
    border-radius: 12px;
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
        .button {
            width: 100%; 
            color: orange;
            font-weight: bold;
            border: 1px solid grey;
            border-radius: 10px;
            padding: 5px;
            background-color: white;
}
    }
  }

  </style>
  