// stores/select_model.js
import { defineStore } from 'pinia'

export const useSelectModelStore = defineStore('selectModel', {
    state: () => ({
        selectedModel: 'qwen2',
    }),
    actions: {
        setModel(list) {
            this.selectedModel = list;
        },
    },
    persist: true,
})
