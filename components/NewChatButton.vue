<!-- components/NewChatButton.vue -->
<template>
  <div class="new-chat">
    <button @click="startNewChat">新对话</button>
  </div>

</template>

<script setup>
import { useCurrentPageStore } from '~/store/currentPage';

const currentPageStore = useCurrentPageStore();

function startNewChat() {
  currentPageStore.setCurrentPage('newchat');
}
</script>

<style scoped>
.new-chat {
  margin-bottom: 10px;
}
/*
button {
  color: #333;
  width: 100%;
  background-color: #fff;
  border-color: #ccc;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
*/
button:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}

</style>
