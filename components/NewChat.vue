<!-- components/NewChat.vue -->
<template>
  <div >
    <h1>new chat</h1>
    <div v-for="message in messages" :key="message.id">
      <UserInput v-if="message.role === 'user'" :content="message.content" />
      <Assistant v-else-if="message.role === 'assistant'" :content="message.content" />
    </div>
  </div>
</template>

<script setup>
import {computed, nextTick, onMounted, ref, watch} from 'vue';
import UserInput from './UserInput.vue';
import Assistant from './Assistant.vue';
import { useMessageSessionStore } from '~/store/messageSession';

const messageSessionStore = useMessageSessionStore();

const messages = computed(() => messageSessionStore.sessions)

</script>
