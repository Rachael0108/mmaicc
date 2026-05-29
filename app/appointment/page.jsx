"use client";

import { useEffect, useRef, useState } from "react";
import PageShell from "@/components/PageShell";
import { sendSmsCode, addGwReserve } from "@/lib/api";
import { encrypt } from "@/lib/rsaEncrypt";
import "./appointment.css";

const PHONE_REG = /^1\d{10}$/;

const INITIAL_FORM = {
  contactName: "",
  contactPhone: "",
  contactCode: "",
  contactContent: "",
};

export default function AppointmentPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [countdown, setCountdown] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const timerRef = useRef(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  function showToast(message, type = "success", duration = 3000) {
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    setToast({ message, type });
    toastTimerRef.current = window.setTimeout(() => setToast(null), duration);
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }

  function validate() {
    const next = {};
    if (!form.contactName) next.contactName = "请输入您的姓名";
    if (!form.contactPhone) {
      next.contactPhone = "请输入手机号码";
    } else if (!PHONE_REG.test(form.contactPhone)) {
      next.contactPhone = "手机号码格式不正确";
    }
    if (!form.contactCode) next.contactCode = "请输入验证码";
    if (!form.contactContent) next.contactContent = "请输入留言内容";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function startCountdown() {
    setCountdown(300);
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  async function getSmsCode() {
    if (!PHONE_REG.test(form.contactPhone)) {
      showToast("请输入正确的手机号码", "warning");
      return;
    }
    try {
      const res = await sendSmsCode({
        phoneNumber: form.contactPhone,
        signature: encrypt(form.contactPhone),
      });
      if (res === "发送成功") {
        startCountdown();
      }
    } catch (err) {
      showToast("验证码发送失败，请稍后重试", "error");
    }
  }

  async function submitForm() {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await addGwReserve({
        name: form.contactName,
        phone: form.contactPhone,
        content: form.contactContent,
        code: form.contactCode,
      });
      showToast("感谢您的预约，我们尽快与您联系，谢谢！", "success");
      setForm(INITIAL_FORM);
      setErrors({});
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setCountdown(0);
    } catch (err) {
      showToast("预约失败，请稍后重试", "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageShell>
      {toast && (
        <div className={`appointment-toast ${toast.type}`}>{toast.message}</div>
      )}
      <main className="appointment-page">
        <div className="appointment-inner">
          <div className="appointment-intro">
            <h2>预约产品DEMO演示</h2>
            <p>请留下您的联系方式，我们将尽快联系您</p>
          </div>

          <div className="appointment-form-box">
            <h3>预约信息</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
              noValidate
            >
              <div className="appointment-field">
                <label htmlFor="contactName">
                  您的姓名<span className="required">*</span>
                </label>
                <input
                  id="contactName"
                  className="appointment-input"
                  placeholder="请输入您的姓名"
                  value={form.contactName}
                  onChange={(e) => handleChange("contactName", e.target.value)}
                />
                {errors.contactName && (
                  <p className="appointment-error">{errors.contactName}</p>
                )}
              </div>

              <div className="appointment-field">
                <label htmlFor="contactPhone">
                  手机号码<span className="required">*</span>
                </label>
                <input
                  id="contactPhone"
                  className="appointment-input"
                  placeholder="请输入手机号码"
                  value={form.contactPhone}
                  onChange={(e) => handleChange("contactPhone", e.target.value)}
                />
                {errors.contactPhone && (
                  <p className="appointment-error">{errors.contactPhone}</p>
                )}
              </div>

              <div className="appointment-field">
                <label htmlFor="contactCode">
                  验证码<span className="required">*</span>
                </label>
                <div className="appointment-code-row">
                  <input
                    id="contactCode"
                    className="appointment-input"
                    placeholder="请输入验证码"
                    value={form.contactCode}
                    onChange={(e) =>
                      handleChange("contactCode", e.target.value)
                    }
                  />
                  {countdown > 0 ? (
                    <span className="appointment-countdown">{countdown}秒</span>
                  ) : (
                    <button
                      type="button"
                      className="appointment-code-btn"
                      onClick={getSmsCode}
                    >
                      获取验证码
                    </button>
                  )}
                </div>
                {errors.contactCode && (
                  <p className="appointment-error">{errors.contactCode}</p>
                )}
              </div>

              <div className="appointment-field">
                <label htmlFor="contactContent">
                  留言内容<span className="required">*</span>
                </label>
                <textarea
                  id="contactContent"
                  className="appointment-textarea"
                  placeholder="请输入留言内容"
                  rows={3}
                  value={form.contactContent}
                  onChange={(e) =>
                    handleChange("contactContent", e.target.value)
                  }
                />
                {errors.contactContent && (
                  <p className="appointment-error">{errors.contactContent}</p>
                )}
              </div>

              <div className="appointment-submit-row">
                <button
                  type="submit"
                  className="appointment-submit-btn"
                  disabled={submitting}
                >
                  {submitting ? "提交中…" : "确认预约"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
