<script setup>
import HeaderComp from "./components/HeaderComp.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  margin: 0 auto;
  font-weight: normal;
  height: 100vh;
}
header {
  background-color: rgb(115, 17, 17);
  color: rgb(255, 255, 255);
  height: 15%;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
main {
  height: 70%;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  height: 35px;
  margin-left: 1%;
  background-color: rgb(115, 17, 17);
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 125px;
  color: rgb(255, 255, 255);
}
</style>
