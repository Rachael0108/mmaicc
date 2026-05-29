"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "./honors-carousel.css";

const ICONS = {
  leader: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="16" r="8" />
      <path d="M8 44c0-8.84 7.16-16 16-16s16 7.16 16 16" />
      <path
        d="M24 8l2.5 6H32l-4.5 3.5 2 6L24 20l-5.5 3.5 2-6L16 14h5.5z"
        fill="currentColor"
        opacity="0.15"
        stroke="none"
      />
      <path d="M24 8l2.5 6H32l-4.5 3.5 2 6L24 20l-5.5 3.5 2-6L16 14h5.5z" />
    </svg>
  ),
  enterprise: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="22" width="36" height="22" rx="2" />
      <path d="M16 22V14a8 8 0 0116 0v8" />
      <line x1="24" y1="30" x2="24" y2="38" />
      <line x1="16" y1="34" x2="32" y2="34" />
    </svg>
  ),
  medal: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="32" r="12" />
      <path d="M16 20l-6-14h28l-6 14" />
      <path d="M20 32l2 3 4-6 4 6 2-3" />
    </svg>
  ),
  patent: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="4" width="32" height="40" rx="3" />
      <line x1="16" y1="16" x2="32" y2="16" />
      <line x1="16" y1="24" x2="32" y2="24" />
      <line x1="16" y1="32" x2="26" y2="32" />
      <circle cx="35" cy="35" r="7" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 35h6M35 32v6" />
    </svg>
  ),
  quality: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M24 4L6 12v16c0 9.4 7.7 18.2 18 20 10.3-1.8 18-10.6 18-20V12L24 4z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path d="M24 4L6 12v16c0 9.4 7.7 18.2 18 20 10.3-1.8 18-10.6 18-20V12L24 4z" />
      <path d="M16 24l6 6 10-12" />
    </svg>
  ),
  security: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="10"
        y="20"
        width="28"
        height="24"
        rx="3"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <rect x="10" y="20" width="28" height="24" rx="3" />
      <path d="M16 20v-6a8 8 0 0116 0v6" />
      <circle cx="24" cy="32" r="3" fill="currentColor" />
      <line x1="24" y1="35" x2="24" y2="39" />
    </svg>
  ),
};

export default function HonorsCarousel({ items }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const dragRef = useRef({ startX: 0, isDragging: false });
  const count = items.length;

  // 每张卡片在圆环上的角度间隔
  const angleStep = 360 / count;
  // 圆环半径（translateZ），根据卡片数量动态调整
  const radius = Math.max(280, count * 55);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % count);
  }, [count]);

  const goTo = useCallback((index) => {
    setActive(index);
    resetTimer();
  }, []);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 4000);
  }

  function goPrev() {
    setActive((prev) => (prev - 1 + count) % count);
    resetTimer();
  }

  function goNext() {
    setActive((prev) => (prev + 1) % count);
    resetTimer();
  }

  // 拖拽 / 滑动手势
  function onPointerDown(e) {
    dragRef.current = { startX: e.clientX, isDragging: true };
  }

  function onPointerUp(e) {
    if (!dragRef.current.isDragging) return;
    const delta = e.clientX - dragRef.current.startX;
    dragRef.current.isDragging = false;
    if (Math.abs(delta) < 30) return;
    delta < 0 ? goNext() : goPrev();
  }

  useEffect(() => {
    // timerRef.current = setInterval(advance, 4000);
    // return () => clearInterval(timerRef.current);
  }, [advance]);

  // 整个转盘旋转角度：让当前激活项转到正前方
  const rotateY = -active * angleStep;

  return (
    <div className="honors-carousel-3d">
      <div className="carousel-3d-container">
        {/* 左箭头 */}
        <button className="nav-btn" onClick={goPrev} aria-label="上一项">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* 3D 舞台 */}
        <div
          className="carousel-3d-stage"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="carousel-3d-track"
            style={{ transform: `rotateY(${rotateY}deg)` }}
          >
            {items.map((item, i) => {
              const cardAngle = i * angleStep;
              const isActive = i === active;
              return (
                <div
                  key={item.title}
                  className={`honor-card-3d${isActive ? " is-active" : ""}`}
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  }}
                  onClick={() => goTo(i)}
                >
                  <div className="honor-card-inner">
                    {/* <div className="honor-icon-wrap-3d">
                      {ICONS[item.icon] ?? ICONS.quality}
                    </div> */}
                    <p className="honor-title-3d">{item.title}</p>
                    {item.desc && <p className="honor-desc-3d">{item.desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右箭头 */}
        <button className="nav-btn" onClick={goNext} aria-label="下一项">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* 圆点指示器 */}
      <div className="honors-dots-3d">
        {items.map((_, i) => (
          <button
            key={i}
            className={`honors-dot-3d${i === active ? " is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`查看第${i + 1}项荣誉`}
          />
        ))}
      </div>
    </div>
  );
}
