// store/selectList.js
import { defineStore } from 'pinia';

export const useSelectListStore = defineStore('selectList', {
    state: () => ({
        list: 'list1',
    }),
    actions: {
        setList(list) {
            this.list = list;
        },
    },
    persist: true,
});
