<script setup>
import Navbar from './front_components/Navbar.vue';
import Footer from './front_components/Footer.vue';
</script>

<template>
  <div>
    
    <Navbar></Navbar>
    <router-view></router-view>

	<Footer></Footer>

    
  </div>
</template>
<script>

export default {};
</script>
<style>
</style>