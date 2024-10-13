<!-- components/HistoryChat.vue -->
<template>
  <div>
    <h1>history chat</h1>
    {{currentSessionStore.sessionId}}
    <div v-for="message in messages" :key="message.id">
      <UserInput v-if="message.role === 'user'" :content="message.content" />
      <Assistant v-else-if="message.role === 'assistant'" :content="message.content" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserInput from './UserInput.vue';
import Assistant from './Assistant.vue';

import { useMessageSessionStore } from '~/store/messageSession';

const messageSessionStore = useMessageSessionStore();

import { useCurrentSessionStore } from '~/store/currentSession';
const currentSessionStore = useCurrentSessionStore();

const messages = messageSessionStore.getMessagesBySessionId(currentSessionStore.sessionId)
</script>
