<template>
  <nav class="nav">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/transactions">Transactions</router-link>
    <router-link to="/budgets">Budgets</router-link>
    <router-link to="/reports">Reports</router-link>
    <router-link to="/settings">Settings</router-link>
    <router-view />
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>
