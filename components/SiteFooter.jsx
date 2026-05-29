import Link from "next/link";
import "./site-footer.css";

const footerGroups = [
  [
    "产品解决方案",
    "MiCare 院后智慧健康管理平台",
    "AI 电话随访机器人",
    "AI 预问诊系统",
    "AI 慢病管理系统",
  ],
  ["客户医院", "三级医院", "民营医院", "专科机构"],
  ["新闻资讯", "公司新闻", "行业观察", "技术热点"],
  ["关于我们", "公司介绍", "技术优势", "企业文化", "联系我们"],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <img src="/assets/img/a/logo-white.png" alt="米鹊科技" />
          <span>精准守护每一次康复</span>
        </div>
        <div className="footer-grid">
          {footerGroups.map(([title, ...items]) => (
            <div key={title}>
              <h3>{title}</h3>
              {items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
          <div>
            <h3>关注米鹊科技</h3>
            <div className="qr-row">
              <figure>
                <img src="/assets/pics/gzh.jpg" alt="官方公众号二维码" />
                <figcaption>官方公众号</figcaption>
              </figure>
              <figure>
                <img src="/assets/pics/red_book.png" alt="小红书二维码" />
                <figcaption>小红书</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2020-2026 上海米鹊科技有限公司 版权所有 备案号：
        <Link href="https://beian.miit.gov.cn/" target="_blank">
          沪ICP备20005830号-1
        </Link>
      </div>
    </footer>
  );
}
