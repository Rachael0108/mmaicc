import { request } from "./http";

const api = {
  queryNewsMaterialList: "/api/news/queryNewsMaterialList",
  newsAllList: "/api/material",
  allMaterial: "/api/material",
  materialDetail: "/api/material",
  sendSmsCode: "/api/reserve/sendSmsCode",
  addGwReserve: "/api/reserve/addGwReserve",
};

// 新闻中心列表 - 分类 - 文章层级数据
export function queryNewsMaterialList(data) {
  return request({
    url: api.queryNewsMaterialList,
    method: "post",
    data,
  });
}

// 首页 - 新闻中心分页 - 全部文章列表
export function newsAllList(params) {
  return request({
    url: api.newsAllList,
    method: "get",
    params,
  });
}

// 新闻中心 - 查看更多，当前分类查询所有文章
export function allMaterial(params) {
  return request({
    url: api.allMaterial,
    method: "get",
    params,
  });
}

// 新闻详情 - 根据 id 查询单篇文章
export function getMaterialDetail(id) {
  return request({
    url: `${api.materialDetail}/${id}`,
    method: "get",
  });
}

// 验证码 - 预约信息
export function sendSmsCode(params) {
  return request({
    url: api.sendSmsCode,
    method: "get",
    params,
  });
}

// 确认预约 - 预约信息保存
export function addGwReserve(data) {
  return request({
    url: api.addGwReserve,
    method: "post",
    data,
  });
}
