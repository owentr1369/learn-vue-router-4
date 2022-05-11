<template>
  <h1>Transactions page</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link :to="`/transactions/${transaction.id}`">{{
      transaction.name
    }}</router-link>
    <div class="price">Price: {{ transaction.price }}</div>
  </div>
</template>

<script>
export default {
  name: "TransactionsPage",
  data() {
    return {
      transactions: [
        { id: 1, name: "Đi siêu thị", price: 200000 },
        { id: 2, name: "Thanh toán tiền nhà", price: 3000000 },
        { id: 3, name: "Thanh toán điện nước", price: 2000000 },
      ],
    };
  },
};
</script>

<style>
</style>