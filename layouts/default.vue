<!-- layouts/default.vue -->
<template>
  <div class="container">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Main from '~/components/Main.vue';
import Footer from '~/components/Footer.vue';
</script>
<style>
.container{
  padding: 20px;
  height: 90vh;
}
@media (max-width: 768px) {
  .container {
    padding: 0px;
    height: 95vh;
  }
}

</style>
