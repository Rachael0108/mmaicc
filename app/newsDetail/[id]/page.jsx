import PageShell from "@/components/PageShell";
import NewsDetail from "@/components/NewsDetail";
import { queryNewsMaterialList, allMaterial } from "@/lib/api";

export const metadata = {
  title: "新闻详情 | 米鹊科技",
};

const COMPANY_ID = 1;

function getCategoryId(cat) {
  return cat?.id ?? cat?.newsTypeId ?? cat?.typeId;
}

function getArticlesFromCategory(cat) {
  return cat?.materialList || cat?.children || cat?.list || [];
}

function getArticleId(raw) {
  return raw?.id ?? raw?.materialId;
}

// 静态导出（output: export）下，动态路由需要在构建期枚举出全部文章 id
export async function generateStaticParams() {
  const ids = new Set();

  let cats = [];
  try {
    const res = await queryNewsMaterialList({ companyId: COMPANY_ID });
    cats = Array.isArray(res) ? res : res?.content || [];
  } catch {
    cats = [];
  }

  for (const cat of cats) {
    getArticlesFromCategory(cat).forEach((a) => {
      const id = getArticleId(a);
      if (id != null) ids.add(String(id));
    });

    const cid = getCategoryId(cat);
    if (cid == null) continue;
    try {
      const listRes = await allMaterial({
        companyId: COMPANY_ID,
        current: 1,
        size: 9999,
        newsTypeId: cid,
      });
      const list = listRes?.content || listRes?.records || listRes || [];
      list.forEach((a) => {
        const id = getArticleId(a);
        if (id != null) ids.add(String(id));
      });
    } catch {
      // 单个分类失败不影响其它分类
    }
  }

  // 兜底：接口在构建期不可达时，至少生成一个占位页，避免 output:export 构建失败
  if (ids.size === 0) ids.add("0");

  return [...ids].map((id) => ({ id }));
}

export default function NewsDetailPage({ params }) {
  return (
    <PageShell>
      <main>
        <NewsDetail id={params.id} />
      </main>
    </PageShell>
  );
}
