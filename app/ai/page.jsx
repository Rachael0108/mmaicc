import PageShell from "@/components/PageShell";
import { aiModules } from "@/lib/site-data";

export const metadata = {
  title: "AI 智能应用 | 米鹊科技",
};

export default function AiPage() {
  return (
    <PageShell>
      <main>
        <section
          className="hero page-hero"
          style={{ "--hero-image": 'url("/mmaicc/assets/img/ai/bg/bg1.png")' }}
        >
          <div className="hero-inner">
            <p>AI 电话随访机器人</p>
            <h1>让高频患者沟通更高效、更标准</h1>
            <p>
              基于语音交互、任务调度和结果结构化能力，为医院随访、预问诊、慢病管理等场景提供
              AI 助手。
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">AI 能力</p>
              <h2 className="section-title">懂流程，也懂医疗场景</h2>
              <p className="section-lead">
                系统支持话术配置、多轮问答、重点词识别、自动重呼和人工接续，让
                AI 成为医护团队的效率补充。
              </p>
            </div>
            <div className="media-frame">
              <img src="/mmaicc/assets/img/ai/fl8/img1.png" alt="AI 随访能力展示" />
            </div>
          </div>
        </section>

        <section className="section brand-band">
          <div className="container">
            <h2 className="section-title">应用模块</h2>
            <div className="grid four" style={{ marginTop: 34 }}>
              {aiModules.map((item) => (
                <article className="card feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div className="media-frame">
              <video
                src="/mmaicc/assets/video/ai/home-ai-video.mp4"
                poster="/mmaicc/assets/img/ai/bg/video.png"
                controls
                muted
                playsInline
              />
            </div>
            <div>
              <p className="eyebrow">典型场景</p>
              <h2 className="section-title">随访、宣教、复诊提醒一体化</h2>
              <p className="section-lead">
                AI
                负责高频标准沟通，医护团队聚焦异常患者和复杂服务，形成更合理的人机协同。
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
