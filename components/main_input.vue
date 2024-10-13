<!-- components/main_input.vue -->
<template>
  <div class="main-input">
    <!-- 如果需要保留 select-list，可以放在输入框上方或旁边 -->
    <!--    -->
    <!-- 输入区域 -->
    <div class="input-container">
      <select-list />
      <textarea
          v-model="userInput"
          placeholder="发送消息"
          @input="adjustTextareaHeight"
          @keydown.enter.exact.prevent="sendMessage"
          ref="textarea"
      ></textarea>
      <button class="send-button" @click="sendMessage" :disabled="!userInput.trim()">
        <!-- 您可以使用 SVG 图标，这里简化为文字 -->
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M2 21L23 12L2 3V10L17 12L2 14V21Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { useSelectModelStore } from '@/store/selectModel.js'
import { useSelectRagStore } from '@/store/selectRag.js'
import { useSelectListStore } from '@/store/selectList.js'
import { useMessageSessionStore } from '@/store/messageSession.js'
import SelectList from './SelectList.vue'

const userInput = ref('hi') // 设置默认值
const selectModelStore = useSelectModelStore()
const selectRagStore = useSelectRagStore()
const selectListStore = useSelectListStore()
const messageSession = useMessageSessionStore()

const evtSource = ref(null)

onBeforeUnmount(() => {
  if (evtSource.value) {
    evtSource.value.close()
  }
})

const sendMessage = () => {
  const message = userInput.value.trim()
  if (!message) return

  const model = selectModelStore.selectedModel
  const rag = selectRagStore.selectedRag
  const listItem = selectListStore.selectedItem

  if (evtSource.value) {
    evtSource.value.close()
  }

  // 添加用户消息
  messageSession.sessions.push({ role: 'user', content: message })

  // 清空输入框
  userInput.value = ''

  const encodedMessage = encodeURIComponent(message)
  const url = `http://127.0.0.1:8000/chat_stream/${encodedMessage}?model=${model}&rag=${rag}&listItem=${listItem}`

  // 使用 reactive 包裹 assistantMessage
  const assistantMessage = reactive({ role: 'assistant', content: '' })
  messageSession.sessions.push(assistantMessage)

  evtSource.value = new EventSource(url)

  evtSource.value.onmessage = (event) => {
    console.log('Received data:', event.data)
    assistantMessage.content += event.data
  }

  evtSource.value.onerror = (err) => {
    console.error('EventSource failed:', err)
    evtSource.value.close()
    evtSource.value = null
  }
}

</script>
<style scoped>
.input-container {
  position: sticky; /* 使用 sticky 而不是 fixed */
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;


}
select-list{
  color: #3873ff;
}
textarea {
  flex: 1;
  resize: none;
  margin: 0 10px;
}
button {

  color: #3873ff;
}
</style>
