
/*
*
*   @param pinia使用练习
*
*/

import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('counter', {
    state: () => {
        return {
            count: 0,
        }
    },
    getters: {
        doubleCount: (state) => {
            return state.count * 2;
        }
    },
    actions: {
        increment(a: number) {
            this.count += a
        }
    }
})