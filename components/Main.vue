<!-- components/Main -->
<template>
  <div class="main">
    <Sidebar v-if="!isMobile || (isMobile && sidebarVisible)" />
    <MainBody />
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import Sidebar from './Sidebar.vue';
import MainBody from './MainBody.vue';
import { useSidebarStore } from '~/store/sidebar';

const isMobile = useMediaQuery('(max-width: 768px)');
const sidebarStore = useSidebarStore();

// 计算属性，用于获取 sidebarVisible 的值
const sidebarVisible = computed(() => sidebarStore.isVisible);

// 监听 isMobile 的变化
watchEffect(() => {
  if (!isMobile) {
    // 在桌面端，确保侧边栏始终可见
    sidebarStore.isVisible = true;
  } else {
    // 在移动端，保持用户的选择，不自动更改
    // 如果需要在移动端默认隐藏侧边栏，可以在这里设置
    sidebarStore.isVisible = false;
  }
});
</script>
