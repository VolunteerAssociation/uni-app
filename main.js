/*
 * @Author: chenguihui
 * @Date: 2023-02-13 10:12:28
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-03-24 15:13:47
 * @Description: 
 * @filePath: Do not edit
 */
import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import * as Pinia from 'pinia'
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	return {
		app,
		Pinia
	}
}
// #endif
