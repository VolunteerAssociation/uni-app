/*
 * @Author: chenguihui
 * @Date: 2023-02-13 15:24:09
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 14:10:56
 * @Description: 订单相关的请求接口
 * @filePath: Do not edit
 */
/** 导入请求模块 */
import request from "../request";
/** 获取用户信息 */
export const carousel = () => {
  return request({
    url: "/getUserInfo",
    method: "GET",
  });
};
