// stores/select_rag.js
import { defineStore } from 'pinia'

export const useSelectRagStore = defineStore('selectRag', {
    state: () => ({
        selectedRag: 'rag-2',
    }),
    actions: {
        setRag(list) {
            this.selectedRag = list;
        },
    },
    persist: true,
})
