<!-- components/Footer.vue -->
<template>
  <footer class="footer">
    <p>©️ kaifamiao 版权所有</p>
    currentPage :  {{currentPageStore.currentPage}}
    sidebarVisible :  {{sidebarVisible}}
    selectedModel : {{selectModelStore.selectedModel}}
    selectedRag : {{selectRagStore.selectedRag}}
    list: {{selectListStore.list}}
    currentSessionStore : {{currentSessionStore.sessionId}}
  </footer>
  <hr/>

</template>
<script setup>
import {useCurrentPageStore} from "~/store/currentPage.js";
const currentPageStore = useCurrentPageStore();

import { useSidebarStore } from '@/store/sidebar';
import {computed} from "vue";
import {useSelectModelStore} from "~/store/selectModel.js";
import {useSelectRagStore} from "~/store/selectRag.js";
import {useSelectListStore} from "~/store/selectList.js";
import {useMessageSessionStore} from "~/store/messageSession.js";
const sidebarStore = useSidebarStore();
const sidebarVisible = computed(() => sidebarStore.isVisible);


const selectModelStore = useSelectModelStore();
const selectRagStore = useSelectRagStore();
const selectListStore = useSelectListStore();

const message_session=useMessageSessionStore();

console.error("===========================================================================")
console.log( message_session.sessions)

import { useCurrentSessionStore } from '~/store/currentSession';
const currentSessionStore = useCurrentSessionStore();

</script>
<style scoped>
.footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
