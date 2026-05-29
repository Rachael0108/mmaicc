"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ChatBox from "./ChatBox";
import { getPatientConsulAndNoReadList, upCompanyMsgRead } from "@/lib/consult";
import "./float-buttons.css";

const PHONE = "400-688-1258";

export default function FloatButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [customerId, setCustomerId] = useState("");

  const pollRef = useRef(null);
  const showChatRef = useRef(false);
  showChatRef.current = showChat;

  useEffect(() => {
    function handleScroll() {
      setShowTop(window.scrollY > 300);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchUnread = useCallback((id) => {
    if (!id) return;
    getPatientConsulAndNoReadList({ customerId: id, companyId: 1 })
      .then((res) => {
        if (res && res.length > 0 && !showChatRef.current) {
          setIsNew(true);
        }
      })
      .catch((err) => console.error(err, "获取未读消息失败"));
  }, []);

  const startPolling = useCallback(
    (id) => {
      window.clearInterval(pollRef.current);
      fetchUnread(id);
      pollRef.current = window.setInterval(() => fetchUnread(id), 3 * 1000);
    },
    [fetchUnread],
  );

  useEffect(() => {
    const id = window.localStorage.getItem("customerId");
    if (id) {
      setCustomerId(id);
      startPolling(id);
    }
    return () => window.clearInterval(pollRef.current);
  }, [startPolling]);

  function handleRefreshCustomerId(id) {
    if (!customerId) {
      setCustomerId(id);
      startPolling(id);
    }
  }

  function handleUpCompanyMsgRead() {
    const id = customerId || window.localStorage.getItem("customerId");
    if (!id) return;
    upCompanyMsgRead({ customerId: id, companyId: 1 })
      .then(() => setIsNew(false))
      .catch((err) => console.error(err, "标记已读失败"));
  }

  function openChat() {
    setShowChat(true);
    setIsNew(false);
    handleUpCompanyMsgRead();
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="rgt-btn">
        <button
          type="button"
          className="rgt-item"
          onClick={openChat}
          aria-label="在线咨询"
        >
          {isNew && <span className="rgt-badge">new</span>}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        </button>

        <a
          className="rgt-item rgt-phone"
          href="tel:4006881258"
          aria-label={`电话咨询 ${PHONE}`}
        >
          <span className="rgt-tooltip">{PHONE}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        <button
          type="button"
          className={`rgt-item rgt-top${showTop ? " visible" : ""}`}
          onClick={scrollTop}
          aria-label="回到顶部"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      <ChatBox
        open={showChat}
        customerId={customerId}
        onClose={() => setShowChat(false)}
        onRefreshCustomerId={handleRefreshCustomerId}
        onUpCompanyMsgRead={handleUpCompanyMsgRead}
      />
    </>
  );
}
