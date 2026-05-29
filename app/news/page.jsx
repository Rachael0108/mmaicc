import Link from "next/link";
import PageShell from "@/components/PageShell";
import { newsItems } from "@/lib/site-data";

export const metadata = {
  title: "新闻资讯 | 米鹊科技",
};

export default function NewsPage() {
  return (
    <PageShell>
      <main>
        <section
          className="hero page-hero"
          style={{ "--hero-image": 'url("/mmaicc/assets/pics/bg_09.png")' }}
        >
          <div className="hero-inner">
            {/* <p className="eyebrow">新闻资讯</p> */}
            <h1>关注智慧健康管理与 AI 医疗服务动态</h1>
            <p>记录米鹊科技产品升级、行业观察与场景实践。</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="news-list">
              {newsItems.map((item, index) => (
                <Link
                  className="card news-card"
                  href={`/newsDetail?index=${index}`}
                  key={item.title}
                >
                  <img src={item.image} alt="" />
                  <div>
                    <p className="eyebrow-date">{item.date}</p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
