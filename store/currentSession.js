// store/currentSession.js
import { defineStore } from 'pinia';

export const useCurrentSessionStore = defineStore('currentSession', {
    state: () => ({
        sessionId: null,
    }),
    actions: {
        setSessionId(id) {
            this.sessionId = id;
        },
    },
    persist: true,
});
