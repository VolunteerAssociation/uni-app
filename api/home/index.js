/*
 * @Author: chenguihui
 * @Date: 2023-02-13 15:23:24
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-03-14 14:03:09
 * @Description: 首页相关请求接口
 * @filePath: Do not edit
 */
/** 导入请求模块 */
import request from "../request";
/** 获取用户信息 */
export const carousel = () => {
  return request({
    url: "/api/auth/getUserInfo",
    method: "GET",
  });
};
