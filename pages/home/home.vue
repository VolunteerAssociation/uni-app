<template>
	<view class="Home">
		<view class="text">
			<RightContent />
		</view>
	</view>
</template>

<script>
	import {
		carousel
	} from "@/api/home/index.js";
	import RightContent from "@/components/RightContent/RightContent.vue"
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
			this.getUser();
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
