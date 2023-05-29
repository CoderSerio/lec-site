<script setup lang="ts">
import router from '@/router';
import { reactive } from 'vue';

const menuItems = reactive([
  {
    name: '首页',
    click: () => router.push('/'),
    disable: false,
  },
  {
    name: '团队历史',
    click: () => router.push('/team-history'),
    disable: false,
  },
  {
    name: 'OJ系统',
    click: () => router.push('/loli-code'),
    disable: false,
  },
  {
    name: '资源整合',
    click: () => router.push('/resource'),
    disable: false,
  },
]);
</script>

<template>
  <div class="header">
    <a-menu mode="horizontal">
      <template v-for="item in menuItems" :key="index">
        <a-menu-item :disabled="item.disable" @click="item.click">
          {{ item.name }}
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<style scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-neutral-2);
}
</style>
