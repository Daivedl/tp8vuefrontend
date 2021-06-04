<template>
  <div id="app">
    <div id="nav">
      <top-nav-bar></top-nav-bar>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Instrumento from "@/components/Instrumento.vue";
export default {
  components: {
    "top-nav-bar" : NavBar
  }
};
</script>

<style lang="scss"></style>
