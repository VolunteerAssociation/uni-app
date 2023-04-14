/*
 * @Author: chenguihui
 * @Date: 2023-02-13 15:21:23
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-03-14 13:58:10
 * @Description: 
 * @filePath: Do not edit
 */
/** 定义请求基础地址 */
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  // 开发环境
  // baseUrl = 'http://localhost:3000'
	baseUrl = "https://www.chenguihui.com/server"
} else {
  // 生成环境
  // baseUrl = "http://localhost:3000";
	baseUrl = "https://www.chenguihui.com/server"
}
// 导出基础请求地址模块
export default baseUrl;
