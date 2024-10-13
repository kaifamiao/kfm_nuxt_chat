<!-- components/ChatList.vue -->
<template>
  <ul>
    <li v-for="chat in chats" :key="chat.id"
        @click="selectChat(chat.id)">
      {{ chat.title }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const chats = ref([
  // 示例数据
  { id: 'abc5', title: 'abc5' },
  { id: 2, title: '对话 2' },
  { id: 3, title: '对话 3' },

]);
import { useCurrentPageStore } from '~/store/currentPage';

const currentPageStore = useCurrentPageStore();

import { useCurrentSessionStore } from '~/store/currentSession';
const currentSessionStore = useCurrentSessionStore();

function selectChat(id) {
  currentPageStore.setCurrentPage('history');
  currentSessionStore.setSessionId(id)

}
</script>
<style>
ul{
  cursor: pointer; /* 鼠标悬停时变成手型指针 */

}

li:hover {
  color: #2A70C2; /* 更深的蓝色 */
  background-color: #D6E5FF; /* 更深的背景色 */
}

li:hover::after {
  border-color: #2A70C2;
}
</style>
