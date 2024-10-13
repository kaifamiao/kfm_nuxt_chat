<!-- components/Header.vue -->
<template>
  <header class="header">
    <div v-if="!isMobile">
      <Logo />
      <Menu />
    </div>
    <div v-else>
      <button @click="toggleSidebar">☰</button>

      <SelectModel />
      <NewChatButton />

    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import Logo from './Logo.vue';
import Menu from './Menu.vue';
import NewChatButton from './NewChatButton.vue';
import SelectModel from './SelectModel.vue';
import { useSidebarStore } from '~/store/sidebar';

const isMobile = useMediaQuery('(max-width: 768px)');
const sidebarStore = useSidebarStore();

// 切换侧边栏显示状态
function toggleSidebar() {
  sidebarStore.isVisible = !sidebarStore.isVisible;
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  color: white;
  /*上圆角*/
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

}
</style>
