/*
 * @Author: chenguihui
 * @Date: 2023-03-24 15:14:43
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-03-24 15:16:24
 * @Description: 
 * @filePath: Do not edit
 */
import { defineStore  } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {count: 0}
  },
  // 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
})
