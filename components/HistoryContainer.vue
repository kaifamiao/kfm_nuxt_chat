<!-- components/HistoryContainer.vue -->
<template>
  <div class="history-container">
    <ChatList @select="selectChat" />
  </div>
</template>

<script setup>
import ChatList from './ChatList.vue';
import { useCurrentPageStore } from '~/store/currentPage';

const currentPageStore = useCurrentPageStore();

function selectChat(sessionId) {
  currentPageStore.setCurrentPage('history');
  // 处理 sessionId，加载对应的聊天记录
}
</script>
<style scoped>
.history-container {
  overflow-y: auto; /* 添加垂直滚动条 */
  width: 100%;

}
</style>
