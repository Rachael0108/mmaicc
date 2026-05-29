"use client";

import { useEffect, useRef, useState } from "react";
import {
  CUSTOMER_SOCKET_URL,
  getCompanyConsultRecordList,
  checkPhone,
  createCustomer,
} from "@/lib/consult";
import "./chat-box.css";

const PHONE_REG = /^1\d{10}$/;
const GREETING =
  "您好！欢迎咨询米鹊科技——专注医疗AI随访解决方案，助力医院提升服务质量与患者信任。请问您需要了解哪方面内容？";

function convertTime(time) {
  if (!time) return "";
  const date = new Date(time);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
  const Y = `${date.getFullYear()}-`;
  const M = `${pad(date.getMonth() + 1)}-`;
  const D = `${pad(date.getDate())} `;
  const h = `${pad(date.getHours())}:`;
  const m = `${pad(date.getMinutes())}:`;
  const s = pad(date.getSeconds());
  return Y + M + D + h + m + s;
}

function initGetMsgText(t) {
  if (!t) return t;
  return t.replace(/\s+\n/g, "\n");
}

const ServiceAvatar = (
  <span className="chat-avatar chat-avatar-service" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 18v-6a9 9 0 0118 0v6" strokeLinecap="round" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  </span>
);

const UserAvatar = (
  <span className="chat-avatar chat-avatar-user" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </span>
);

export default function ChatBox({
  open,
  onClose,
  customerId,
  onRefreshCustomerId,
  onUpCompanyMsgRead,
}) {
  const [messagesList, setMessagesList] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);
  const [customerForm, setCustomerForm] = useState({
    customerPhone: "",
    customerName: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [toast, setToast] = useState(null);

  const webSockRef = useRef(null);
  const heartBeatRef = useRef(null);
  const toastTimerRef = useRef(null);
  const chatMessagesRef = useRef(null);
  const messagesRef = useRef([]);
  const customerIdRef = useRef("");
  const greetedRef = useRef(false);

  messagesRef.current = messagesList;

  function showToast(message, type = "success", duration = 2500) {
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    setToast({ message, type });
    toastTimerRef.current = window.setTimeout(() => setToast(null), duration);
  }

  function scrollToBottom() {
    window.requestAnimationFrame(() => {
      const el = chatMessagesRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  function webSocketSend(agentData) {
    const sock = webSockRef.current;
    if (!sock || sock.readyState !== WebSocket.OPEN) {
      console.error("WebSocket未连接");
      return;
    }
    sock.send(
      JSON.stringify({
        msgType: "server_msg_receive",
        msg: JSON.stringify(agentData),
      }),
    );
  }

  function heartBeat() {
    window.clearInterval(heartBeatRef.current);
    heartBeatRef.current = window.setInterval(() => {
      const sock = webSockRef.current;
      if (sock && sock.readyState === WebSocket.OPEN) {
        sock.send(JSON.stringify({ msgType: "server_heart_receive", msg: "心跳" }));
      }
    }, 30 * 1000);
  }

  async function loadHistory(id) {
    const res = await getCompanyConsultRecordList({
      customerId: id,
      consultId: 0,
      companyId: 1,
      page: { current: 1, size: 10000 },
    });
    const list = (res && res.content) || [];
    setMessagesList(list);
    messagesRef.current = list;
    scrollToBottom();
    return list;
  }

  function handleWsMessage(e) {
    let data;
    try {
      data = JSON.parse(e.data);
    } catch {
      return;
    }

    // 首次进入且无历史记录：发送问候语
    if (messagesRef.current.length === 0 && !greetedRef.current) {
      greetedRef.current = true;
      webSocketSend({
        companyId: 1,
        customerId: customerIdRef.current,
        msgType: 1,
        sendType: 1,
        content: GREETING,
      });
      setTimeout(() => {
        onUpCompanyMsgRead?.();
        loadHistory(customerIdRef.current).catch((err) => console.error(err));
      }, 300);
    }

    if (data.msgType === "CONNECT_OK") {
      heartBeat();
    }

    if (data.msgType === "SERVER_MSG_REPLY") {
      let agentData;
      try {
        agentData = JSON.parse(data.msg);
      } catch {
        return;
      }
      if (agentData.msgType === 1) {
        agentData.content = initGetMsgText(agentData.content);
      }
      const next = [...messagesRef.current, agentData];
      messagesRef.current = next;
      setMessagesList(next);
      scrollToBottom();
    }
  }

  function handleWsError(e) {
    console.error(e, "WebSocket连接发生错误");
    showToast("连接发生错误，请重新打开聊天窗", "error");
    window.clearInterval(heartBeatRef.current);
  }

  function initWebSocket(id) {
    closeSocket();
    const sock = new WebSocket(`${CUSTOMER_SOCKET_URL}/${id}`);
    sock.onmessage = handleWsMessage;
    sock.onerror = handleWsError;
    webSockRef.current = sock;
  }

  function closeSocket() {
    window.clearInterval(heartBeatRef.current);
    if (webSockRef.current) {
      webSockRef.current.onmessage = null;
      webSockRef.current.onerror = null;
      try {
        webSockRef.current.close();
      } catch {
        /* noop */
      }
      webSockRef.current = null;
    }
  }

  useEffect(() => {
    if (!open) return undefined;

    greetedRef.current = false;
    let id = customerId || window.localStorage.getItem("customerId") || "";
    if (!id) {
      id =
        Date.now().toString(36) + Math.random().toString(36).substring(2, 11);
      window.localStorage.setItem("customerId", id);
      onRefreshCustomerId?.(id);
    }
    customerIdRef.current = id;

    loadHistory(id)
      .then(() => initWebSocket(id))
      .catch((err) => {
        console.error(err, "获取聊天记录失败");
        initWebSocket(id);
      });

    return () => closeSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  function handleClose() {
    closeSocket();
    onClose?.();
  }

  function sendMessage() {
    if (newMessage.trim() === "") return;
    webSocketSend({
      companyId: 1,
      customerId: customerIdRef.current,
      sendType: 2,
      msgType: 1,
      content: newMessage,
    });
    setNewMessage("");
  }

  function handleInputFocus() {
    checkPhone({ customerId: customerIdRef.current })
      .then((res) => {
        if (!res) setShowPhoneDialog(true);
      })
      .catch((err) => console.error(err, "checkPhone 失败"));
  }

  function bindPhone() {
    const errors = {};
    if (!customerForm.customerName) errors.customerName = "请输入姓名";
    if (!customerForm.customerPhone) {
      errors.customerPhone = "请输入手机号";
    } else if (!PHONE_REG.test(customerForm.customerPhone)) {
      errors.customerPhone = "手机号格式不正确";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    createCustomer({ ...customerForm, customerId: customerIdRef.current })
      .then(() => {
        setShowPhoneDialog(false);
        showToast("手机号绑定成功", "success");
      })
      .catch((err) => {
        console.error(err, "绑定失败");
        showToast("绑定失败，请稍后重试", "error");
      });
  }

  function playAudio(item) {
    try {
      const audio = new Audio(item.content);
      audio.play();
    } catch (err) {
      console.error(err);
    }
  }

  function renderContent(item) {
    if (item.msgType === 2) {
      return (
        <img
          className="layim-chat-text chat-image"
          src={item.content}
          alt=""
          onClick={() => window.open(item.content, "_blank")}
        />
      );
    }
    if (item.msgType === 3) {
      return (
        <button
          type="button"
          className="layim-chat-text chat-audio"
          onClick={() => playAudio(item)}
          aria-label="播放语音"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 10v4a1 1 0 001 1h3l4 4V5L7 9H4a1 1 0 00-1 1z" />
            <path d="M16 8.5a4 4 0 010 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      );
    }
    return <div className="layim-chat-text">{item.content}</div>;
  }

  if (!open) return null;

  return (
    <div className="chat-overlay" role="dialog" aria-modal="true" aria-label="米鹊客服">
      <div className="chat-backdrop" onClick={handleClose} />
      <div className="chat-dialog">
        <div className="chat-header">
          <span className="chat-title">米鹊客服</span>
          <button
            type="button"
            className="chat-close"
            onClick={handleClose}
            aria-label="关闭"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="chat-container">
          <div className="chat-messages" ref={chatMessagesRef}>
            {messagesList.length === 0 && (
              <p className="chat-empty">正在连接客服…</p>
            )}
            <ul className="chat-message-ul">
              {messagesList.map((item, index) => (
                <li key={index} className="message">
                  {item.sendType === 1 ? (
                    <div className="msg-lft">
                      <div className="layim-chat-user">
                        {ServiceAvatar}
                        <cite>
                          <i>{convertTime(item.createTime)} </i>
                          {item.userName || "米鹊客服"}
                        </cite>
                      </div>
                      {renderContent(item)}
                    </div>
                  ) : (
                    <div className="msg-rgt">
                      <div className="layim-chat-user">
                        <cite>
                          <i>{convertTime(item.createTime)} </i>
                        </cite>
                        {UserAvatar}
                      </div>
                      {renderContent(item)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="chat-input">
            <textarea
              className="chat-input-field"
              value={newMessage}
              placeholder="输入消息..."
              rows={2}
              onFocus={handleInputFocus}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <button
              type="button"
              className="chat-send-btn"
              onClick={sendMessage}
            >
              发送
            </button>
          </div>
        </div>
      </div>

      {showPhoneDialog && (
        <div className="phone-dialog-overlay">
          <div className="phone-backdrop" onClick={() => setShowPhoneDialog(false)} />
          <div className="phone-dialog">
            <div className="phone-header">
              <span className="phone-title">绑定手机号</span>
              <button
                type="button"
                className="chat-close"
                onClick={() => setShowPhoneDialog(false)}
                aria-label="关闭"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="phone-body">
              <p className="phone-tips">为了更好的服务，请绑定手机号</p>
              <div className="phone-field">
                <label htmlFor="customerPhone">客户手机号</label>
                <input
                  id="customerPhone"
                  className="phone-input"
                  placeholder="请输入客户手机号"
                  value={customerForm.customerPhone}
                  onChange={(e) =>
                    setCustomerForm((p) => ({ ...p, customerPhone: e.target.value }))
                  }
                />
                {formErrors.customerPhone && (
                  <p className="phone-error">{formErrors.customerPhone}</p>
                )}
              </div>
              <div className="phone-field">
                <label htmlFor="customerName">客户姓名</label>
                <input
                  id="customerName"
                  className="phone-input"
                  placeholder="请输入客户姓名"
                  value={customerForm.customerName}
                  onChange={(e) =>
                    setCustomerForm((p) => ({ ...p, customerName: e.target.value }))
                  }
                />
                {formErrors.customerName && (
                  <p className="phone-error">{formErrors.customerName}</p>
                )}
              </div>
            </div>
            <div className="phone-footer">
              <button
                type="button"
                className="phone-btn"
                onClick={() => setShowPhoneDialog(false)}
              >
                取消
              </button>
              <button
                type="button"
                className="phone-btn primary"
                onClick={bindPhone}
              >
                绑定
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className={`chat-toast ${toast.type}`}>{toast.message}</div>}
    </div>
  );
}
