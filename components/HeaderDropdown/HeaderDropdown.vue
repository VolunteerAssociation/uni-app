<!--
 * @Author: chenguihui
 * @Date: 2023-02-15 17:58:38
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-04-19 11:58:53
 * @Description: HeaderDropdown
 * @filePath: Do not edit
-->
<template>
	<view class="headerDropdown">
		{{ title }}
	</view>
</template>

<script>
	export default {
		name:"HeaderDropdown",
		data() {
			return {
				title: "HeaderDropdown"
			};
		}
	}
</script>

<style scoped lang="less">
@import url("./HeaderDropdown.less");
</style>