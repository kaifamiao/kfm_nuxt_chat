// store/sidebar.js
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isVisible: true,
    }),
    actions: {
        toggle() {
            this.isVisible = !this.isVisible;
        },
    },
});
