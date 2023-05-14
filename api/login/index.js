/*
 * @Author: chenguihui
 * @Date: 2023-02-15 18:10:35
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 14:11:42
 * @Description: 登录相关的请求接口
 * @filePath: Do not edit
 */
/** 导入请求模块 */
import request from "../request";
/** 获取用户信息 */
export const Login = (data) => {
	return request({
		url: "/api/auth/login",
		method: "POST",
		data: data
	});
};
