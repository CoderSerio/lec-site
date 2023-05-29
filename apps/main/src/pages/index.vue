<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import Header from '@/pages/common/header/index.vue';
import Footer from '@/pages/common/footer/index.vue';

const route = useRoute();
const userData = ref();

const isShowHeader = ref(true);
const isShowFooter = ref(true);
watch(
  () => route.path,
  (newValue, oldValue) => {
    switch (newValue) {
      case '/resource':
        isShowFooter.value = isShowHeader.value = false;
        break;
      default:
        isShowFooter.value = isShowHeader.value = true;
    }
  },
);
</script>

<template>
  <div class="router-view">
    <a-layout>
      <a-layout-header v-if="isShowHeader">
        <Header></Header>
      </a-layout-header>
      <a-layout-content>
        <RouterView></RouterView>
      </a-layout-content>
      <a-layout-footer v-if="isShowFooter">
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
