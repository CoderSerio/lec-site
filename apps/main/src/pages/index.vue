<script setup lang="ts">
import Header from '@/pages/common/header/index.vue';
import Footer from '@/pages/common/footer/index.vue';
</script>

<template>
  <div class="router-view">
    <a-layout>
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <a-layout-content>
        <RouterView></RouterView>
      </a-layout-content>
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
.router-view {
  height: 100vh;
  width: 100vw;
}
</style>
