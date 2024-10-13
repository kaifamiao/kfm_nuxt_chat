<!-- components/Chat.vue -->
<template>
  <div class="main-chat">
    <NewChat v-if="currentPage === 'newchat'" />
    <HistoryChat v-else-if="currentPage === 'history'" />
  </div>
</template>

<script setup>
import {computed, nextTick, onMounted, ref, watch} from 'vue';
import { useCurrentPageStore } from '~/store/currentPage';
import NewChat from './NewChat.vue';
import HistoryChat from './HistoryChat.vue';
import {useMessageSessionStore} from "~/store/messageSession.js";

const currentPageStore = useCurrentPageStore();
const currentPage = computed(() => currentPageStore.currentPage);

const messageSessionStore = useMessageSessionStore();

const messages = computed(() => messageSessionStore.sessions)
const mainChat = ref(null)

const scrollToBottom = () => {
  if (mainChat.value) {
    mainChat.value.scrollTop = mainChat.value.scrollHeight
  }
}

// 在组件挂载后滚动到底部
onMounted(() => {
  nextTick(() => {
    scrollToBottom()
  })
})
// 监听 messages 的变化
watch(
    messages,
    async () => {
      await nextTick()
      scrollToBottom()
    },
    { deep: true }
)
</script>

<style scoped>
.main-chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
</style>
