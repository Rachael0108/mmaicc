import PageShell from "@/components/PageShell";

export const metadata = {
  title: "关于我们 | 米鹊科技",
};

const milestones = [
  ["2020", "上海米鹊科技有限公司成立，聚焦智慧健康管理服务。"],
  ["2021", "院后随访和患者服务产品在多类型医疗机构落地。"],
  ["2023", "AI 电话随访、预问诊和慢病管理能力持续完善。"],
  ["2026", "围绕数据化运营和患者服务闭环继续升级产品矩阵。"],
];

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section
          className="hero page-hero"
          style={{ "--hero-image": 'url("/assets/pics/bg_01.webp")' }}
        >
          <div className="hero-inner">
            {/* <p className="eyebrow">关于米鹊科技</p> */}
            <h1>专注医疗场景的智慧健康管理服务商</h1>
            <p>
              米鹊科技以医疗机构真实需求为起点，持续建设面向院后、门诊和慢病管理的数字化产品与
              AI 应用。
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">公司介绍</p>
              <h2 className="section-title">
                让患者服务更连续，让医疗管理更清晰
              </h2>
              <p className="section-lead">
                上海米鹊科技(MiCare)致力于成为AI+大模型院后健康管理全场景解决方案的行业领导者,以15年通信与互联网技术为根基,融合人智能、物联网及5G技术,助力医疗机构数智转型，打造智慧服务标杆。公司拥有15项发明专利、30项软著及独家“强制可信通话"技术,核心产品覆盖院前AI预问诊系统、智能接听机器人、院后MiCare院后健康管理平台、智能随访机器人、智能穿戴设备、AI慢病管理系统等实现患者入院前离院后全周期管理,为医院降低70%人力成本,并推动行业标准制定。上海米鹊科技,以“精准守护每一次康复”为使命,持续引领智慧医疗革新。
              </p>
            </div>
            <div className="media-frame">
              <img src="/assets/pics/bg_address.webp" alt="米鹊科技办公环境" />
            </div>
          </div>
        </section>

        <section className="section brand-band">
          <div className="container">
            <h2 className="section-title">发展历程</h2>
            <div className="timeline">
              {milestones.map(([year, text]) => (
                <div className="timeline-item card" key={year}>
                  <strong>{year}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container">
            <p className="eyebrow">技术实力</p>
            <h2 className="section-title">15 年深耕</h2>
            <p className="section-lead">
              AI + 5G + 大模型 + 物联网技术赋能医疗健康管理生态圈
            </p>
            <div className="grid three" style={{ marginTop: "32px" }}>
              {[
                "/assets/pics/02.png",
                "/assets/pics/01.png",
                "/assets/pics/03.png",
              ].map((src) => (
                <div className="media-frame space-stars" key={src}>
                  <img src={src} alt="技术实力" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section brand-band" style={{ textAlign: "center" }}>
          <div className="container">
            <h2 className="section-title">企业文化</h2>
            <div
              className="grid three brand-band-bg"
              style={{
                marginTop: "32px",
                "--brand-image": 'url("/assets/img/d/16.png")',
              }}
            >
              <div className="culture-card">
                <h3>使 命</h3>
                <p>
                  用 AI
                  与数据重新定义院后健康管理，精准守护每一次康复，赋能医疗机构，打造智慧院后管理新标准。
                </p>
              </div>
              <div className="culture-card">
                <h3>愿 景</h3>
                <p>让 AI 驱动的健康管理服务，成为每个家庭触手可及的守护者。</p>
              </div>
              <div className="culture-card">
                <h3>价 值 观</h3>
                <p>专业、创新、用心、可信赖</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container">
            <h2 className="section-title">联系我们</h2>
            <div
              className="grid"
              style={{
                marginTop: "32px",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              }}
            >
              <div className="card feature-card">
                <h3>上海研发总部</h3>
                <p>地址：上海市松江区九亭镇九亭中心路1158号21幢211室</p>
                <p>电话：400-688-1258</p>
                <p>邮箱：4006881258@mmaicc.com</p>
              </div>
              <div className="card feature-card">
                <h3>苏州健康服务运营中心</h3>
                <p>地址：苏州高新区嘉陵江路198号太湖云谷2号楼6楼680室</p>
                <p>电话：400-688-1258</p>
                <p>邮箱：4006881258@mmaicc.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
