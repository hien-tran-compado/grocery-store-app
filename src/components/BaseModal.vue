<template>
  <div class="modal">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="modal-body">
        <slot name="modalContent"></slot>
      </div>
      <div class="modal-footer">
        <BaseButton buttonStyle="outlined" @click.native="closeModal">Go back</BaseButton>
        <BaseButton buttonStyle="filled" @click.native="proceed">
          <slot name="modalProceed"></slot>
        </BaseButton>
      </div>



    </div>
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
    title: String
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

<style lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  button {
    margin: 10px
  }
}

</style>
