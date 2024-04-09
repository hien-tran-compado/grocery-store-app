<template>
  <div class="modal" v-if="visible">
    
  <h2>{{title}}</h2>
  <slot name="modalContent"></slot>
  <BaseButton
  buttonStyle="outlined"
  @click.native="closeModal"
  >Go back</BaseButton>
  <BaseButton
  buttonStyle="filled"
  @click.native="proceed"
  >
  <slot name="modalProceed"></slot>
</BaseButton>

  </div>

</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'BaseModal',
  components: {
    BaseButton
  },
  props: {
    title: String,
    visible: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    proceed() {
      this.$emit('proceed')
    }
  }

}
</script>

<style>
</style>
