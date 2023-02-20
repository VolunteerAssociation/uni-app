/** 定义请求基础地址 */
let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  // 开发环境
  baseUrl = 'http://localhost:3000'
} else {
  // 生成环境
  baseUrl = "http://localhost:3000";
}
// 导出基础请求地址模块
export default baseUrl;
