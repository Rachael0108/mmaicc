"use client";

import PageShell from "@/components/PageShell";
import { productModules } from "@/lib/site-data";
import { useState } from "react";
import Image from "next/image";

const tabItems = [
  { label: "个性化随访方案", img: "/mmaicc/assets/img/pro/six/1.png" },
  { label: "300+专病随访量表", img: "/mmaicc/assets/img/pro/six/2.png" },
  { label: "强制可信通话", img: "/mmaicc/assets/img/pro/six/3.png" },
  { label: "精准专病健康宣教", img: "/mmaicc/assets/img/pro/six/4.png" },
  { label: "在线健康资讯", img: "/mmaicc/assets/img/pro/six/5.png" },
  { label: "AI症状识别", img: "/mmaicc/assets/img/pro/six/6.png" },
  { label: "患者永久个人健康档案", img: "/mmaicc/assets/img/pro/six/7.png" },
  { label: "智慧营销服务", img: "/mmaicc/assets/img/pro/six/8.png" },
  { label: "全托管运营服务", img: "/mmaicc/assets/img/pro/six/9.png" },
];

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="product-tabs">
      <div className="tabs-nav">
        {tabItems.map((item, index) => (
          <button
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <div className="tab-img-box">
          <Image
            src={tabItems[activeTab].img}
            alt={tabItems[activeTab].label}
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
export default function ProductPage() {
  return (
    <PageShell>
      <main>
        <section
          className="hero page-hero"
          style={{ "--hero-image": 'url("/mmaicc/assets/img/pro/bg/1.png")' }}
        >
          <div className="hero-inner">
            <p>MiCare 院后智慧健康管理平台</p>
            <h1>把院后服务做成可运营的数字化体系</h1>
            <p>
              面向出院随访、复诊管理、健康宣教、风险预警与数据分析，帮助医院提升患者服务效率和连续照护质量。
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <p className="eyebrow">产品能力</p>
              <h2 className="section-title">任务、患者、病种、数据统一管理</h2>
              <p style={{ color: "var(--muted)" }}>
                平台支持多病种、多科室、多角色协作，让随访工作从人工分散执行转为系统化闭环管理。
              </p>
            </div>
            <div className="grid four" style={{ marginTop: 34 }}>
              {productModules.map((item) => (
                <article className="card feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--soft)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <p className="eyebrow">产品优势</p>
            <h2
              className="section-title"
              style={{ marginTop: "0", marginBottom: "30px" }}
            >
              “系统+运维+运营”全闭环
            </h2>

            <div className="fl2-con">
              <div className="fl2-item fl2-item1">
                {[
                  { label: "随访效率提升", value: "300" },
                  { label: "患者复诊率提升", value: "30" },
                  { label: "患者粘性提升", value: "50" },
                  { label: "健康宣教覆盖率提升至", value: "90" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <p>{item.label}</p>
                    <p className="num-box">
                      <Image
                        src="/mmaicc/assets/img/pro/two/10.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <span className="num">
                        <span className="num-up">{item.value}</span>%
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="fl2-item fl2-item2   ">
                <div className="fl2-lft">
                  <Image
                    src="/mmaicc/assets/img/pro/two/14.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p>全周期</p>
                </div>
                <div className="fl2-rgt">
                  {[
                    "诊前导航",
                    "院后管理",
                    "复诊提醒",
                    "用药提醒",
                    "慢病跟踪",
                  ].map((text, idx) => (
                    <span key={idx} className="cycle-stage">
                      <span className="stage-label">{text}</span>
                      {idx < 4 && (
                        <Image
                          src="/mmaicc/assets/img/pro/two/17.png"
                          alt=""
                          width={15}
                          height={15}
                        />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="fl-top">
            <h1>核心技术</h1>
          </div>
          <div className="fl3-con">
            <h3 className=" ">
              15项发明专利 | 30项软著 | 独家“强制可信通话”技术
            </h3>
            <div className="fl3-item">
              {[
                {
                  img: "/mmaicc/assets/img/pro/three/2_03.png",
                  title: "模拟通信 X NLP融合引擎",
                  desc: "听懂方言，回应患者每一份焦虑的期待",
                },
                {
                  img: "/mmaicc/assets/img/pro/three/2_05.png",
                  title: "AI大模型 X 边缘计算终端",
                  desc: "实现比医生更快，比手册更准的“症状雷达”",
                },
                {
                  img: "/mmaicc/assets/img/pro/three/2_07.png",
                  title: "行业独家“强制可信通话”技术",
                  desc: "让每一通电话都值得患者放心接听",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <Image src={item.img} alt="" width={160} height={160} />
                  <p className="p1">{item.title}</p>
                  <p className="p2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--soft)" }}>
          <div className="fl-top">
            <h1>产品功能总览</h1>
          </div>
          <div className="fl4-con">
            <div className="pro-feature-flow">
              <div className="pff-col">
                {[
                  "我的工作台",
                  "AI电话智能随访",
                  "精准健康宣教",
                  "大模型在线健康咨询",
                  "AI症状管理中心",
                ].map((text) => (
                  <span className="pff-pill" key={text}>
                    {text}
                  </span>
                ))}
              </div>
              <div className="pff-arrow pff-arrow-left" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M11 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="img-box">
                <div className="universe-container">
                  <div className="center-logo">
                    <Image
                      src="/mmaicc/assets/img/pro/four/2_03_logo.png"
                      alt="米鹊科技"
                      width={300}
                      height={300}
                    />
                  </div>
                  <svg className="orbit-svg" viewBox="0 0 400 400">
                    <circle className="outer-path" cx="200" cy="200" r="170" />
                    <circle
                      className="inner-path-static"
                      cx="200"
                      cy="200"
                      r="130"
                    />
                    <g className="dot-driver">
                      <circle className="dot" cx="70" cy="200" r="6" />
                      <circle className="dot" cx="330" cy="200" r="6" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="pff-arrow pff-arrow-right" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pff-col">
                {[
                  "门诊智能语音客服",
                  "专病量表服务中心",
                  "专病宣教素材中心",
                  "患者大数据中心",
                  "智慧信息推送服务",
                ].map((text) => (
                  <span className="pff-pill" key={text}>
                    {text}
                  </span>
                ))}
              </div>
            </div>
            <div className="title  ">
              专业运营团队 | 医护轻参与 | 效果高保障
            </div>
          </div>
        </section>

        <section className="section">
          <div className="fl-top">
            <h1>产品功能介绍及应用场景</h1>
          </div>
          <div className="fl5-con">
            <ProductTabs />
          </div>
        </section>

        <section className="section" style={{ background: "var(--soft)" }}>
          <div className="container split">
            <div className="media-frame">
              <video
                src="/mmaicc/assets/img/pro/call.mp4"
                poster="/mmaicc/assets/img/pro/poster.png"
                controls
                muted
                playsInline
              />
            </div>
            <div>
              <p className="eyebrow">工作流闭环</p>
              <h2 className="section-title">从患者触达到异常处理</h2>
              <p className="section-lead">
                通过标准化问卷、自动提醒、结果归档和异常转办，平台让每一次随访都能被记录、追踪和复盘。
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
