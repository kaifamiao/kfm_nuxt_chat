<!-- components/MainBody.vue -->
<template>
  <div class="main-body" >
    <div class="main-header">
      <div v-if="!isMobile">
        <SelectModel />
        <SelectRag />
      </div>
    </div>
    <div class="main-chat"  ref="mainChat">>
      <Chat />
    </div>
    <main_input/>
  </div>
</template>

<script setup>
import {computed, nextTick, onMounted, ref, watch} from 'vue';
import Chat from './Chat.vue';
import SelectModel from './SelectModel.vue';
import SelectRag from './SelectRag.vue';
import SelectList from './SelectList.vue';
import { useSelectModelStore } from '~/store/selectModel';
import { useSelectRagStore } from '~/store/selectRag';
import { useSelectListStore } from '~/store/selectList';
import {useMediaQuery} from "@vueuse/core";
import Main_input from "~/components/main_input.vue";
import {useMessageSessionStore} from "~/store/messageSession.js";
const isMobile = useMediaQuery('(max-width: 768px)');
const message = ref('');
const selectModelStore = useSelectModelStore();
const selectRagStore = useSelectRagStore();
const selectListStore = useSelectListStore();


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
