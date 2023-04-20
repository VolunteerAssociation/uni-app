<!--
 * @Author: chenguihui
 * @Date: 2023-02-13 14:27:46
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-04-14 13:45:30
 * @Description: 首页模块
 * @filePath: Do not edit
-->
<template>
	<view class="Home">
		<view class="home-page-header">
			<view class="search" v-bind="navToSearchPage">
				<!-- <t-search t-class-input="t-search__input" t-class-input-container="t-search__input-container"
					placeholder="iphone 13 火热发售中" leftIcon="" disabled> -->
					<icon slot="left-icon" prefix="wr" name="search" size="40rpx" color="#bbb" />
				<!-- </t-search> -->
			</view>
			<view class="swiper-wrap"></view>
		</view>
		<view class="home-container"></view>
	</view>
</template>

<script>
import {
	carousel
} from "@/api/home";
import RightContent from "@/components/RightContent/RightContent"
export default {
	comments: {
		RightContent
	},
	data() {
		return {
			title: "Home"
		}
	},
	onLoad() {
	},
	methods: {
		async getUser() {
			let result = await carousel({});
			console.log(result);
		}
	}

}
</script>

<style lang="less">
@import url("./home.less");
</style>
