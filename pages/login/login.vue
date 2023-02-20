<template>
	<view class="Login">
		<view class="Order">
			{{ title }}
		</view>
		<view class="login">
			<form>
				<view class="title">实时获取输入值：{{loginName}}</view>
				<input type="text" @input="onKeyloginName" name="loginName" placeholder="输入同步到view中">
				<view class="title">实时获取输入值：{{password}}</view>
				<input type="password" @input="onKeypassword" name="password" placeholder="输入同步到view中">
				<input type="button" @click="login" value="登录">
			</form>
		</view>
		<view class="">
			
		</view>
		<HeaderDropdown />
	</view>
</template>

<script>
	import HeaderDropdown from "@/components/HeaderDropdown/HeaderDropdown.vue"
	import {
		Login
	} from "@/api/login/index.js"
	export default {
		comments: {
			HeaderDropdown
		},
		data() {
			return {
				title: "Login",
				loginName: " ",
				password: " ",
			}
		},
		onLoad() {

		},
		methods: {
			onKeyloginName: function(event) {
				this.loginName = event.detail.value
			},
			onKeypassword: function(event) {
				this.password = event.detail.value
			},
			async login() {
				const result = await Login({
					loginName: this.loginName,
					password: this.password
				})
				if (result.data.status === 200) {
					try {
						uni.setStorageSync('token', result.data.TOKEN);
					} catch (err) {
						throw err;
					}
					
				}
				
				console.log(result.data.TOKEN)
			}
		}

	}
</script>

<style lang="less">
	@import url("./login.less");
</style>
