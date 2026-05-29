import PageShell from "@/components/PageShell";
import { newsItems } from "@/lib/site-data";

export const metadata = {
  title: "新闻详情 | 米鹊科技",
};

export default function NewsDetailPage({ searchParams }) {
  const index = Number(searchParams?.index || 0);
  const item = newsItems[index] || newsItems[0];

  return (
    <PageShell>
      <main>
        <section className="section">
          <article className="detail-article">
            <p className="eyebrow">{item.date}</p>
            <h2>{item.title}</h2>
            <img
              className="media-frame"
              src={item.image}
              alt=""
              style={{ width: "100%", margin: "28px 0" }}
            />
            <p>{item.summary}</p>
            <p>
              在医疗服务从院内延伸到院后的过程中，连续、标准、可追踪的患者管理能力正在成为医院精细化运营的重要基础。米鹊科技围绕真实业务场景持续优化产品体验，让随访任务、健康宣教、复诊提醒、风险预警和数据分析形成更完整的闭环。
            </p>
            <p>
              未来，米鹊科技将继续深耕智慧健康管理和 AI
              医疗服务应用，用更稳定的技术能力服务医疗机构，也让患者在康复过程中获得更及时、更温暖的连接。
            </p>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
