<template>
  <div class="confirmation-wrapper">
    <h1 class="confirmation-header">Your order has been confirm and is being processed </h1>
    <p>Your order has been confirm and is being processed.</p>
    <p>You will receive an email with your order details shortly. <br>
      If you have any questions or need further assistance, please don't hesitate to contact our customer support team.
    </p>
    <p>Thank you for shopping with us!</p>
    <a @click="goToHomePage" class="confirmation-homepage">> Return to home page</a>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'ConfirmationPage',
  methods: {
    goToHomePage() {
      router.push('/');
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
</style>