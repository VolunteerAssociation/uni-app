/*
 * @Author: chenguihui
 * @Date: 2023-02-13 15:24:01
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-14 14:11:23
 * @Description: 我的相关请求接口
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
