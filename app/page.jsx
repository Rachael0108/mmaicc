import PageShell from "@/components/PageShell";
import HonorsCarousel from "@/components/HonorsCarousel";
import NewsCenter from "@/components/NewsCenter";
import FloatButtons from "@/components/FloatButtons";
import {
  advantages,
  caseStudies,
  coreProducts,
  honors,
  partnerHospitals,
  stats,
} from "@/lib/site-data";

const FOLLOWUP_ERAS = [
  {
    version: "1.0",
    style: "era-default",
    title: "任务驱动",
    desc: "满意度调查、医风回访——为完成规定动作而做，缺乏运营价值。",
    tags: [{ label: "为考核而做，零运营价值", accent: false }],
  },
  {
    version: "2.0",
    style: "era-warm",
    title: "病种跟踪",
    desc: "按病种设计随访路径，跟踪康复指标——标准化模板，千人一面。",
    tags: [{ label: "标准化模板，千人一面", accent: false }],
  },
  {
    version: "3.0",
    style: "era-primary",
    title: "个性化健康管理",
    desc: "基于电子健康档案，AI动态生成随访方案——千人千面，依从性与健康产出同步提升。",
    tags: [
      { label: "千人千面，依从性觉升", accent: false },
      { label: "★ 米鹊定义", accent: true },
    ],
  },
];

const ICONS = {
  follow: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  mic: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  users: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  heart: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  clipboard: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section
          className="hero"
          style={{ "--hero-image": 'url("/assets/pics/bg_01.webp")' }}
        >
          <div className="hero-inner">
            <h1 className="hero-headline">
              国内首家&#8220;<span className="sub-red">系统+运营+人机互动</span>
              &#8221;
            </h1>
            <h1 className="hero-headline">一体化院后健康管理平台</h1>
            <p className="hero-subtitle">随访效率提升10倍，患者满意度99%+</p>
            <p className="hero-subtitle">
              AI赋能医疗机构，让院后管理从负担变成增量
            </p>
            <div className="button-row">
              <a className="btn" href="/product">
                查看解决方案
              </a>
              <a className="btn secondary" href="/aboutUs">
                了解米鹊科技
              </a>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section brand-band core-products-section">
          <div className="container">
            <div className="core-products-header">
              <p className="eyebrow">核心产品</p>
              <h2 className="section-title">
                AI驱动，覆盖院前-院中-院后全周期
              </h2>
              <p className="section-lead core-products-lead">
                米鹊科技以AI大模型与医疗信息化深度融合，为医疗机构提供一站式智慧服务解决方案。产品可独立部署、开箱即用，也可灵活组合，形成服务闭环。
              </p>
            </div>
            <div className="product-cards-grid">
              {coreProducts.map((product) => (
                <div className="product-card" key={product.title}>
                  <div className="product-card-header">
                    <div className="product-card-icon">
                      {ICONS[product.icon]}
                    </div>
                    <span className="product-card-tag">{product.tag}</span>
                  </div>
                  <h3 className="product-card-title">{product.title}</h3>
                  <p className="product-card-desc">{product.desc}</p>
                  <ul className="product-card-bullets">
                    {product.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="product-card-stats">
                    {product.stats.map((s) => (
                      <span key={s} className="product-stat-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section era-section">
          <div className="container">
            <div className="era-header">
              <p className="eyebrow">行业变革</p>
              <h2 className="section-title">院后随访的三个时代</h2>
              <p className="section-lead era-lead">
                从任务驱动到个性化健康管理，米鹊引领行业进入3.0时代
              </p>
            </div>
            <div className="era-cards">
              {FOLLOWUP_ERAS.flatMap((era, i) => [
                <div className={`era-card ${era.style}`} key={era.version}>
                  <div className="era-version">{era.version}</div>
                  <h3 className="era-title">{era.title}</h3>
                  <p className="era-desc">{era.desc}</p>
                  <div className="era-tags">
                    {era.tags.map((t) => (
                      <span
                        key={t.label}
                        className={`era-tag${t.accent ? " era-tag-accent" : ""}`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>,
                i < FOLLOWUP_ERAS.length - 1 ? (
                  <div
                    className="era-arrow animate-move-right"
                    key={`arrow-${i}`}
                    aria-hidden="true"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : null,
              ])}
            </div>
          </div>
        </section>

        <section className="section brand-band">
          <div className="container">
            <div className="core-products-header">
              <p className="eyebrow">合作伙伴</p>
              <h2 className="section-title">
                与医疗机构共同建设患者服务新体验
              </h2>
            </div>
            {partnerHospitals.map((group) => (
              <div className="partner-group" key={group.category}>
                <p className="partner-group-label">{group.category}</p>
                <div className="partner-grid">
                  {group.items.map((item) => (
                    <div className="partner-card" key={item.name}>
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="partner-logo"
                        />
                      ) : (
                        <div className="partner-logo-placeholder">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        </div>
                      )}
                      <span className="partner-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="partner-more-row">
              <a href="/user" className="partner-more-link">
                点击查看更多合作医院
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="era-header">
              <p className="eyebrow">荣誉资质</p>
              <h2 className="section-title">荣誉奖项</h2>
              <p className="section-lead">
                米鹊科技凭借卓越的技术实力和创新能力，获得了多项荣誉资质，得到了客户和市场的认可。
              </p>
            </div>
            <HonorsCarousel items={honors} />
          </div>
        </section>

        <section className="section brand-band case-section">
          <div className="container">
            <div className="core-products-header">
              <p className="eyebrow">应用成果</p>
              <h2 className="section-title">真实场景下的AI随访实践</h2>
              <p className="section-lead core-products-lead">
                从公立三甲到民营医院，已为100+医疗机构提供经过验证的AI随访解决方案
              </p>
            </div>
            <div className="case-cards-grid">
              {caseStudies.map((c) => (
                <div className="case-card" key={c.name}>
                  <div className="case-card-head">
                    <span className="case-card-tag">{c.tag}</span>
                    <h3 className="case-card-name">{c.name}</h3>
                    <p className="case-card-subtitle">{c.subtitle}</p>
                  </div>
                  <div className="case-card-body">
                    <div className="case-card-stats">
                      {c.stats.map((s) => (
                        <div className="case-stat" key={s.label}>
                          <strong>{s.value}</strong>
                          <span>{s.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="case-card-desc">{c.desc}</p>
                    {c.award ? (
                      <div className="case-card-foot">
                        <span className="case-card-award">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 2l2.9 6.2 6.6.8-4.9 4.5 1.3 6.5L12 17.8 6.1 20l1.3-6.5L2.5 9l6.6-.8z" />
                          </svg>
                          {c.award}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsCenter />

        <section className="cta-section">
          <div className="cta-bg" aria-hidden="true">
            <span className="cta-glow cta-glow-1" />
            <span className="cta-glow cta-glow-2" />
          </div>
          <div className="container cta-inner">
            <div className="cta-copy">
              <p className="eyebrow cta-eyebrow">立即体验</p>
              <h2 className="cta-title">
                让AI成为您的
                <span className="sub-red">
                  &#8220;永不离职的科室骨干&#8221;
                </span>
              </h2>
              <p className="cta-lead">
                立即预约免费演示，体验<strong>10倍效率提升</strong>
              </p>
              <div className="cta-actions">
                <a className="btn cta-btn" href="tel:4006881258">
                  立即预约演示
                </a>
              </div>
            </div>
            <div className="cta-contacts">
              <a className="cta-contact" href="tel:4006881258">
                <span className="cta-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="cta-contact-text">
                  <span className="cta-contact-label">服务热线</span>
                  <span className="cta-contact-value">400-688-1258</span>
                </span>
              </a>
              <a className="cta-contact" href="mailto:4006881258@mmaicc.com">
                <span className="cta-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span className="cta-contact-text">
                  <span className="cta-contact-label">商务邮箱</span>
                  <span className="cta-contact-value">
                    4006881258@mmaicc.com
                  </span>
                </span>
              </a>
              <div className="cta-contact">
                <span className="cta-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="cta-contact-text">
                  <span className="cta-contact-label">公司地址</span>
                  <span className="cta-contact-value">
                    上海市松江区九亭镇九亭中心路1158号21幢211室
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatButtons />
    </PageShell>
  );
}
