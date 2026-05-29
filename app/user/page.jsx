import PageShell from "@/components/PageShell";

export const metadata = {
  title: "客户案例 | 米鹊科技",
};

const cases = [
  {
    title: "三级医院院后随访体系",
    image: "/assets/pics/pro_06.jpg",
    text: "围绕重点专科和出院患者建立标准化随访路径，提升随访完成率和异常发现效率。",
  },
  {
    title: "民营医院患者运营",
    image: "/assets/pics/pro_07.jpg",
    text: "将复诊提醒、健康宣教和满意度调研纳入统一平台，提升患者服务体验。",
  },
  {
    title: "专科慢病管理",
    image: "/assets/pics/bg_11.jpg",
    text: "通过长期指标记录、风险分层和定期干预，支持慢病患者持续管理。",
  },
];

const partnerLogos = [
  { name: "复旦大学附属浦东医院", logo: "/assets/logos/logo1.png" },
  { name: "复旦大学附属中山医院", logo: "/assets/logos/logo-08.png" },
  { name: "复旦大学附属肿瘤医院", logo: "/assets/logos/logo-03.png" },
  { name: "复旦大学附属妇产科医院", logo: null },
  { name: "同济大学附属第一妇婴保健院", logo: "/assets/logos/logo6.png" },
  {
    name: "海军军医大学第一附属医院（上海长海医院）",
    logo: "/assets/logos/logo-04.png",
  },
  { name: "江苏省苏州市立医院", logo: null },
  { name: "苏州市妇幼保健院", logo: null },
  { name: "山东省济南市人民医院", logo: "/assets/logos/logo4.png" },
  { name: "江西省赣州市人民医院", logo: null },
  { name: "苏州九龙医院", logo: "/assets/logos/logo3.png" },
  { name: "新疆维吾尔族自治区第三人民医院", logo: null },
];

export default function UserPage() {
  return (
    <PageShell>
      <main>
        <section
          className="hero page-hero"
          style={{ "--hero-image": 'url("/assets/pics/bg_10.jpg")' }}
        >
          <div className="hero-inner">
            <p>预问诊精准分流，院后管理全程守护</p>
            <h1>服务多类型医疗机构的数字化实践</h1>
            <p>米鹊科技赋能医院数智化升级，效率与温度并存</p>
          </div>
        </section>

        <section className="section" style={{ textAlign: "center" }}>
          <div className="container">
            <h2 className="section-title">典型实践</h2>
            <div className="grid three" style={{ marginTop: 34 }}>
              {cases.map((item) => (
                <article className="card feature-card" key={item.title}>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100%", height: 190, objectFit: "cover" }}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section brand-band" style={{ textAlign: "center" }}>
          <div className="container">
            <p className="eyebrow">合作医院</p>
            <h2 className="section-title">共同沉淀可复制的患者服务能力</h2>
            <div className="logo-wall">
              {partnerLogos.map((item) => (
                <img src={item.logo} alt={item.name} key={item.name} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
