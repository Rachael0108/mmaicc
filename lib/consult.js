import { request } from "./http";

// WebSocket 客服连接地址（基于 lib/http.js 的 BASE_URL 推导）
export const CUSTOMER_SOCKET_URL =
  "wss://yy.mmaicc.com/operation_platform/customerSocket";

// 注意：以下 REST 路径沿用项目 /api/... 约定，是根据原 Vue 项目 `../api/consult`
// 的方法名推导的占位路径。请对照后端实际接口核对/修正这些 url。
const api = {
  getCompanyConsultRecordList: "/api/consult/getCompanyConsultRecordList",
  getPatientConsulAndNoReadList: "/api/consult/getPatientConsulAndNoReadList",
  upCompanyMsgRead: "/api/consult/upCompanyMsgRead",
  checkPhone: "/api/consult/checkPhone",
  createCustomer: "/api/consult/createCustomer",
};

// 获取用户聊天历史记录
export function getCompanyConsultRecordList(data) {
  return request({
    url: api.getCompanyConsultRecordList,
    method: "post",
    data,
  });
}

// 获取未读消息列表（用于角标提示）
export function getPatientConsulAndNoReadList(data) {
  return request({
    url: api.getPatientConsulAndNoReadList,
    method: "post",
    data,
  });
}

// 标记公司消息为已读
export function upCompanyMsgRead(data) {
  return request({
    url: api.upCompanyMsgRead,
    method: "post",
    data,
  });
}

// 查询客户是否已绑定手机号
export function checkPhone(params) {
  return request({
    url: api.checkPhone,
    method: "get",
    params,
  });
}

// 创建/绑定客户手机号
export function createCustomer(data) {
  return request({
    url: api.createCustomer,
    method: "post",
    data,
  });
}
