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
