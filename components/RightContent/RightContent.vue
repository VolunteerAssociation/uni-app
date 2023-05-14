<!--
 * @Author: chenguihui
 * @Date: 2023-02-15 17:59:58
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 14:29:33
 * @Description: 右菜单
 * @filePath: Do not edit
-->
<template>
	<view class="RightContent">
		{{ title }}
	</view>
</template>

<script>
	export default {
		name:"RightContent",
		data() {
			return {
				title: "RightContent"
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
@import url("./RightContent.less");
</style>
