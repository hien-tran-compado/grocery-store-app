<template>
    <button 
    :class="handleButtonStyle"
    @click="handleClick">                
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:'BaseButton',
    props: {
        groceryItem : {
            type: Object,
            required: true
        },
        buttonStyle: {
            type:String,
            default: "outlined"
        }
    },
    computed: {
        handleButtonStyle() {
            if (this.buttonStyle !=="outlined" && this.buttonStyle !=="filled" ) {
                 return "outlined";
            }
            return this.buttonStyle
        }
    },
    methods: {
        handleClick() {
            console.log('click',this.groceryItem);
            this.$emit('click',this.groceryItem)
        }
    }
}
</script>

<style lang="scss">

button {
    width: 100%; 
    font-weight: bold;
    border-radius: 10px;
    padding: 10px;
    border: none
}

button.outlined {
    color: orange;
    background-color: white;
    border: 1px solid grey;
}
button.outlined:hover {
    color: orange;
    background-color: rgba(255, 166, 0, 0.534);
}

button.filled {
    color: white;
    background-color: orange;
}

button.filled:hover {
    color: white;
    background-color: rgba(255, 166, 0, 0.534);
}
</style>