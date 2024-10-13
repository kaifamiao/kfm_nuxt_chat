// store/messageSession.js
import { defineStore } from 'pinia';

export const useMessageSessionStore = defineStore('messageSession', {
    state: () => ({
        sessions: process.client ? JSON.parse(localStorage.getItem('messages')) || [] : [],

    }),
    actions: {
        addMessage(sessionId, message) {
            if (!this.sessions[sessionId]) {
                this.sessions[sessionId] = [];
            }
            this.sessions[sessionId].push(message);
        },
        getMessagesBySessionId(sessionId) {
            return this.sessions[sessionId] || [];
        },
        getMessages() {
            // 返回当前会话的消息
            return this.sessions['current'] || [];
        },
    },
    persist: true,
});
