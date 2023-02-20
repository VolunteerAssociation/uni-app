/** 导入请求模块 */
import request from "../request";
/** 获取用户信息 */
export const carousel = () => {
  return request({
    url: "/getUserInfo",
    method: "GET",
  });
};
