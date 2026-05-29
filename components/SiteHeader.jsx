"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { navItems } from "@/lib/site-data";
import "./site-header.css";

function NavDropdown({ item, pathname, onClose }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  function handleMouseEnter() {
    clearTimeout(timerRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div
      className={`nav-item-dropdown${open ? " dropdown-open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        className={`nav-trigger${isActive ? " active" : ""}`}
        href={item.href}
        onClick={onClose}
      >
        {item.label}
        <svg
          className="chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <div className="dropdown-panel">
        {item.children.map((child) =>
          child.children ? (
            <div key={child.href} className="dropdown-group">
              <Link
                className={`dropdown-group-label${pathname.startsWith(child.href) ? " active" : ""}`}
                href={child.href}
                onClick={onClose}
              >
                {child.label}
              </Link>
              <div className="dropdown-group-children">
                {child.children.map((sub) => (
                  <Link
                    key={sub.href}
                    className={`dropdown-sub-link${pathname === sub.href ? " active" : ""}`}
                    href={sub.href}
                    onClick={onClose}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={child.href}
              className={`dropdown-link${pathname === child.href ? " active" : ""}`}
              href={child.href}
              onClick={onClose}
            >
              {child.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

function MobileNavItem({ item, pathname, onClose }) {
  const [open, setOpen] = useState(false);
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <div className="mobile-nav-group">
      <div className="mobile-nav-row">
        <Link
          className={`mobile-nav-link${isActive ? " active" : ""}`}
          href={item.href}
          onClick={onClose}
        >
          {item.label}
        </Link>
        <button
          className={`mobile-expand-btn${open ? " expanded" : ""}`}
          type="button"
          aria-label="展开子菜单"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mobile-submenu">
          {item.children.map((child) =>
            child.children ? (
              <div key={child.href} className="mobile-subgroup">
                <Link
                  className={`mobile-subgroup-label${pathname.startsWith(child.href) ? " active" : ""}`}
                  href={child.href}
                  onClick={onClose}
                >
                  {child.label}
                </Link>
                {child.children.map((sub) => (
                  <Link
                    key={sub.href}
                    className={`mobile-sub-link${pathname === sub.href ? " active" : ""}`}
                    href={sub.href}
                    onClick={onClose}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={child.href}
                className={`mobile-child-link${pathname === child.href ? " active" : ""}`}
                href={child.href}
                onClick={onClose}
              >
                {child.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <img src="/assets/img/a/logo-black.png" alt="米鹊科技" />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label="切换导航"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Desktop nav */}
      <nav className="nav desktop-nav">
        {navItems.map((item) =>
          item.children ? (
            <NavDropdown
              key={item.href}
              item={item}
              pathname={pathname}
              onClose={() => setOpen(false)}
            />
          ) : (
            <Link
              key={item.href}
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>

      {/* Mobile nav */}
      <nav className={`nav mobile-nav${open ? " open" : ""}`}>
        {navItems.map((item) =>
          item.children ? (
            <MobileNavItem
              key={item.href}
              item={item}
              pathname={pathname}
              onClose={() => setOpen(false)}
            />
          ) : (
            <Link
              key={item.href}
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
