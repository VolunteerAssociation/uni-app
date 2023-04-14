/*
 * @Author: chenguihui
 * @Date: 2023-02-13 15:21:09
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-03-24 14:52:14
 * @Description: 
 * @filePath: Do not edit
 */
/** 导入基础请求地址 */
import baseUrl from "./BASE_URL";
export default (option) => {
	// 定义加载
	let isShowLoading = true;
	// 定义请求头
	let header = null;
	// 请求token
	let strToken = "";
	// 获取本地token
	const token = uni.getStorageSync("token");
	for (let key in token) {
		strToken += `${key}=${token[key]};`;
	}
	strToken = strToken.slice(0, -1);
	// 判断是否显示加载图
	if (isShowLoading) {
		uni.showLoading({
			title: "加载中...",
			mask: true,
		});
	}
	// 判断token
	if (strToken) {
		header = {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: strToken,
		};
	} else {
		header = {
			"Content-Type": "application/x-www-form-urlencoded",
		};
	}
	return new Promise((resolve, reject) => {
		uni.request({
			method: option.method || "GET",
			url: `${baseUrl}${option.url}`,
			data: option.data || {},
			header: header,
			withCredentials: true,
			success: resolve,
			fail: reject,
			complete: (result) => {
				// 请求后关闭loading
				if (isShowLoading) {
					uni.hideLoading();
				}
				// 判断是否有返回值
				if (result.data) {
					const {
						status,
						message
					} = result.data;
					console.log("status===>", status, message);
					if (status === 14003) {
						uni.redirectTo({
							url: "/pages/login/login",
						});
					} else if (status === 403) {
						uni.redirectTo({
							url: "/pages/login/login",
						});
					}
				}
			},
		});
	});
};
