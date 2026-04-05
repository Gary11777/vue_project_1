<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/counter-view">Counter</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/composable">Composable</router-link>
    <router-link to="/e21">e21</router-link>
    <router-link to="/e22">e22</router-link>
  </nav>
  
  <router-view />
</template>

<style scoped>
nav {
  padding: 20px;
  background-color: #f0f0f0;
}

nav a {
  margin-right: 20px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #333;
}
</style>
