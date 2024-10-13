// store/currentPage.js
import { defineStore } from 'pinia';

export const useCurrentPageStore = defineStore('currentPage', {
    state: () => ({
        currentPage: 'newchat',
    }),
    actions: {
        setCurrentPage(page) {
            this.currentPage = page;
        },
    },
    persist: true, // 直接使用 persist: true
});
