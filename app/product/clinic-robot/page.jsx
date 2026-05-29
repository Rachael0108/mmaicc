"use client";

import PageShell from "@/components/PageShell";
import Image from "next/image";

const CHECK_ICON = "/assets/img/ai/fl4/icon.png";

const fl2List = [
  {
    iconUrl: "/assets/img/ai/fl2/1.png",
    title: "7×24 小时在线",
    subtitle: "全天候秒级接听，告别占线与等待，接通率提升至 99% 以上。",
  },
  {
    iconUrl: "/assets/img/ai/fl2/2.png",
    title: "医院专属知识库",
    subtitle: "深度集成挂号、就诊流程、医保政策等高频问题，应答精准可靠。",
  },
  {
    iconUrl: "/assets/img/ai/fl2/3.png",
    title: "深度语义理解",
    subtitle: "支持多轮追问与模糊表述，听懂方言口音，理解患者真实诉求。",
  },
  {
    iconUrl: "/assets/img/ai/fl2/4.png",
    title: "温暖人性应答",
    subtitle: "拟人化语音交互，复杂问题无缝转接人工，服务有温度。",
  },
];

const fl4List = [
  {
    iconUrl: "/assets/img/ai/fl4/phone-ai.png",
    title: "智能分诊",
  },
  {
    iconUrl: "/assets/img/ai/fl4/search.png",
    title: "号源查询",
  },
  {
    title: "精准导航",
    isFeature: true,
  },
  {
    iconUrl: "/assets/img/ai/fl4/question.png",
    title: "医保咨询",
  },
  {
    iconUrl: "/assets/img/ai/fl4/learn.png",
    title: "知识问答",
  },
  {
    iconUrl: "/assets/img/ai/fl4/customer.png",
    title: "人工转接",
  },
];

const fl5List = [
  {
    iconUrl: "/assets/img/ai/fl5/1.png",
    title: "本地模型",
    content1: "高频固定问题本地秒级响应，数据不出院，安全合规。",
    content2: "低成本运行，稳定可靠，无需依赖外部网络。",
  },
  {
    iconUrl: "/assets/img/ai/fl5/2.png",
    title: "千亿参数大模型",
    content1: "复杂、开放式问题交由大模型推理，应答更自然灵活。",
    content2: "持续学习医院业务场景，能力不断进化。",
  },
  {
    iconUrl: "/assets/img/ai/fl5/3.png",
    title: "双引擎调度",
    content1: "智能路由本地与云端能力，兼顾响应速度与回答质量。",
    content2: "",
  },
];

const fl6List = [
  {
    iconUrl: "/assets/img/ai/fl6/left-top.png",
    title: "零改造接入",
    content: "无需改造现有 HIS、电话系统，即插即用快速上线。",
  },
  {
    iconUrl: "/assets/img/ai/fl6/right-top.png",
    title: "灵活部署",
    content: "支持本地化，移动灵活部署，突发需求，可随时转移设备。",
  },
  {
    iconUrl: "/assets/img/ai/fl6/right-bottom.png",
    title: "数据安全",
    content: "全链路加密，患者隐私数据本地存储，满足等保要求。",
  },
  {
    iconUrl: "/assets/img/ai/fl6/left-bottom.png",
    title: "便捷运维",
    content: "可视化后台管理，知识库一键更新，移动运维方便高效。",
  },
];

const fl8List = [
  {
    imgUrl: "/assets/img/ai/fl8/img1.png",
    title: "复旦大学附属肿瘤医院",
    phoneTimes: "3000+",
    knowledge: "1200+",
  },
  {
    imgUrl: "/assets/img/ai/fl8/img2.png",
    title: "海军军医大学第一附属医院",
    phoneTimes: "2500+",
    knowledge: "1000+",
  },
  {
    imgUrl: "/assets/img/ai/fl8/img3.png",
    title: "江苏省苏州市立医院",
    phoneTimes: "1800+",
    knowledge: "800+",
  },
];

const fl9List = [
  {
    iconUrl: "/assets/img/ai/fl9/1.png",
    title: "提升患者满意度",
    describe: "电话不再难打，问题快速解决，就医体验显著改善。",
  },
  {
    iconUrl: "/assets/img/ai/fl9/2.png",
    title: "释放人力成本",
    describe: "AI 承担大量重复咨询，让客服人员专注高价值服务。",
  },
  {
    iconUrl: "/assets/img/ai/fl9/3.png",
    title: "沉淀服务数据",
    describe: "通话内容结构化留存，为门诊运营决策提供数据支撑。",
  },
];

export default function ClinicRobotPage() {
  return (
    <PageShell>
      <main className="clinic-robot-page">
        <section
          className="hero page-hero"
          style={{ "--hero-image": 'url("/assets/img/ai/bg/bg1.png")' }}
        >
          <div className="hero-inner">
            <h1>米鹊门诊智能语音机器人</h1>
            <p>让门诊接听效率更高效、精准、智能</p>
          </div>
        </section>

        <section className="section cr-floor cr-floor2">
          <div className="fl-top">
            <h1>门诊智能接听机器人</h1>
            <p>
              基于深度语义解析与医疗场景自适应学习技术，充当 7×24 小时在线的“AI
              守门人”。它深度集成医院专属知识库，无缝理解患者诉求，提供精准、高效、温暖的应答服务，重塑医患沟通的第一触点。
            </p>
          </div>
          <div className="cr-fl2-con">
            {fl2List.map((item, index) => (
              <div className="cr-fl2-item" key={index}>
                <div className="item-icon">
                  <Image src={item.iconUrl} alt="" width={56} height={56} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section cr-floor cr-floor3"
          style={{ background: "var(--soft)" }}
        >
          <div className="fl-top">
            <h1>智能接听工作流程</h1>
          </div>
          <div className="cr-fl3-con">
            <Image
              src="/assets/img/ai/fl3/content.png"
              alt="智能接听工作流程"
              width={1180}
              height={420}
            />
          </div>
        </section>

        <section className="section cr-floor cr-floor4">
          <div className="fl-top">
            <h1>门诊智能接听机器人 - 六大核心功能</h1>
          </div>
          <div className="cr-fl4-con">
            <div className="cr-fl4-item">
              <div className="item-left">
                <div className="title">智能应答</div>
                <div className="left-con">
                  <div className="left-img">
                    <Image
                      src="/assets/img/ai/fl4/phone-ai.png"
                      alt="智能应答"
                      width={220}
                      height={220}
                    />
                  </div>
                  <div className="con-list">
                    {["听得清", "听得懂", "答得准"].map((text) => (
                      <div key={text}>
                        <Image src={CHECK_ICON} alt="" width={18} height={18} />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="item-right">
                {fl4List.map((item, index) => (
                  <div
                    className={`item-1${item.isFeature ? " item-feature" : ""}`}
                    key={index}
                  >
                    {item.isFeature ? (
                      <div>
                        <div className="title">{item.title}</div>
                        <ul>
                          <li>科室分诊、专家挂班、就诊流程及楼层指引</li>
                          <li>
                            支持多轮追问与模糊表述理解，有效减少患者误挂、错挂现象
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <div className="right-item-icon">
                          <Image
                            src={item.iconUrl}
                            alt=""
                            width={48}
                            height={48}
                          />
                        </div>
                        <div className="right-item-text">{item.title}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section cr-floor cr-floor5"
          style={{ background: "var(--soft)" }}
        >
          <div className="fl-top">
            <h1>本地模型 + 大模型双驱动，让服务更精准、更灵活</h1>
          </div>
          <div className="cr-fl5-con">
            {fl5List.map((item, index) => (
              <div key={index} className="cr-fl5-item">
                <div className="item-icon">
                  <Image src={item.iconUrl} alt="" width={56} height={56} />
                </div>
                <div className="text">
                  <div className="title">{item.title}</div>
                  <div className="describe">
                    <Image src={CHECK_ICON} alt="" width={18} height={18} />
                    {item.content1}
                  </div>
                  {item.content2 && (
                    <div className="describe">
                      <Image src={CHECK_ICON} alt="" width={18} height={18} />
                      {item.content2}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section cr-floor cr-floor6">
          <div className="fl-top">
            <h1>门诊智能接听机器人 - 极简部署与安全保障</h1>
            <p>零改造现有系统，即插即用，灵活部署，移动方便</p>
          </div>
          <div className="cr-fl6-con">
            {fl6List.map((item, index) => (
              <div className="cr-fl6-item" key={index}>
                <div className="item-icon">
                  <Image src={item.iconUrl} alt="" width={48} height={48} />
                </div>
                <div className="text">
                  <div className="title">{item.title}</div>
                  <div className="describe">{item.content}</div>
                </div>
              </div>
            ))}
            <div className="item-middle">
              <Image
                src="/assets/img/ai/fl6/middle.png"
                alt=""
                width={360}
                height={360}
              />
            </div>
          </div>
        </section>

        <section
          className="section cr-floor cr-floor7"
          style={{ background: "var(--soft)" }}
        >
          <div className="cr-fl7-con">
            <video
              poster="/assets/img/ai/bg/video.png"
              controls
              playsInline
              style={{ borderRadius: 20, width: "100%" }}
            >
              <source
                src="/assets/video/ai/home-ai-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="section cr-floor cr-floor8">
          <div className="fl-top">
            <h1>三甲应用案例</h1>
          </div>
          <div className="cr-fl8-con">
            {fl8List.map((item, index) => (
              <div className="cr-fl8-item" key={index}>
                <div className="img">
                  <Image
                    src={item.imgUrl}
                    alt={item.title}
                    width={360}
                    height={220}
                  />
                </div>
                <h3>{item.title}</h3>
                <p>
                  日均接听:<label className="data">{item.phoneTimes}</label>次 |
                  知识库:<label className="data">{item.knowledge}</label>条
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section cr-floor cr-floor9"
          style={{ background: "var(--soft)" }}
        >
          <div className="fl-top">
            <h2 className="section-title">
              米鹊科技与您一起，携手共建智慧门诊
            </h2>
          </div>
          <div className="cr-fl9-con">
            {fl9List.map((item, index) => (
              <div className="cr-fl9-item" key={index}>
                <div className="item-top">
                  <Image src={item.iconUrl} alt="" width={44} height={44} />
                  <div className="title">{item.title}</div>
                </div>
                <p>{item.describe}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
