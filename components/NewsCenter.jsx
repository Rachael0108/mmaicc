"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { queryNewsMaterialList, allMaterial } from "@/lib/api";

const COMPANY_ID = 1;
const PREVIEW_COUNT = 3;

function getCategoryName(cat) {
  return (
    cat?.name || cat?.typeName || cat?.newsTypeName || cat?.title || "分类"
  );
}

function getCategoryId(cat) {
  return cat?.id ?? cat?.newsTypeId ?? cat?.typeId;
}

function getArticlesFromCategory(cat) {
  return cat?.materialList || cat?.children || cat?.list || [];
}

function formatDate(value) {
  if (!value) return "";
  return String(value).replace("T", " ").slice(0, 10);
}

function normalizeArticle(raw) {
  return {
    id: raw?.id ?? raw?.materialId,
    title: raw?.title || raw?.name || raw?.materialName || raw?.subject || "",
    date: formatDate(
      raw?.createTime ||
        raw?.publishTime ||
        raw?.releaseTime ||
        raw?.updateTime ||
        raw?.createDate,
    ),
    image:
      raw?.coverImg ||
      raw?.coverUrl ||
      raw?.cover ||
      raw?.picUrl ||
      raw?.imgUrl ||
      raw?.image ||
      raw?.titleImg ||
      "",
  };
}

export default function NewsCenter() {
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null);
  // 按分类 id 缓存文章列表
  const [articlesMap, setArticlesMap] = useState({});
  const [loading, setLoading] = useState(true);

  const loadArticles = useCallback(async (id) => {
    if (id == null) return;
    try {
      const res = await allMaterial({
        companyId: COMPANY_ID,
        current: 1,
        size: 9999,
        newsTypeId: id,
      });
      const list = (res?.content || res?.records || res || []).map(
        normalizeArticle,
      );
      setArticlesMap((prev) => ({ ...prev, [id]: list }));
    } catch (err) {
      setArticlesMap((prev) => ({ ...prev, [id]: [] }));
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    queryNewsMaterialList({ companyId: COMPANY_ID })
      .then((res) => {
        if (cancelled) return;
        const list = Array.isArray(res) ? res : res?.content || [];
        if (!list.length) return;
        setCategories(list);

        const firstId = getCategoryId(list[0]);
        setActiveId(firstId);

        // 预填层级数据中已带的文章，避免重复请求
        const seeded = {};
        list.forEach((cat) => {
          const cid = getCategoryId(cat);
          const inline = getArticlesFromCategory(cat);
          if (inline.length) seeded[cid] = inline.map(normalizeArticle);
        });
        setArticlesMap(seeded);

        if (!seeded[firstId]) loadArticles(firstId);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [loadArticles]);

  function handleTab(id) {
    setActiveId(id);
    if (!articlesMap[id]) loadArticles(id);
  }

  if (!loading && categories.length === 0) return null;

  const activeArticles = (articlesMap[activeId] || []).slice(0, PREVIEW_COUNT);

  return (
    <section className="section  news-center-section">
      <div className="container">
        <div className="core-products-header">
          <p className="eyebrow">新闻资讯</p>
          <h2 className="section-title">企业动态</h2>
          <p className="section-lead core-products-lead">
            关注医疗行业生态，了解米鹊科技最新动态
          </p>
        </div>

        <div className="news-center-layout">
          <div className="news-tabs">
            {categories.map((cat) => {
              const id = getCategoryId(cat);
              return (
                <button
                  key={id}
                  type="button"
                  className={`news-tab${id === activeId ? " is-active" : ""}`}
                  onClick={() => handleTab(id)}
                >
                  {getCategoryName(cat)}
                </button>
              );
            })}
          </div>

          <div className="news-center-content">
            {activeArticles.length > 0 ? (
              <div className="news-center-cards">
                {activeArticles.map((article) => (
                  <Link
                    key={article.id}
                    className="news-center-card"
                    href={`/newsDetail/${article.id}`}
                  >
                    <div className="news-center-cover">
                      {article.image ? (
                        <img src={article.image} alt={article.title} />
                      ) : (
                        <div className="news-center-cover-placeholder" />
                      )}
                    </div>
                    <div className="news-center-card-body">
                      <p className="news-center-date">{article.date}</p>
                      <h3 className="news-center-card-title">
                        {article.title}
                      </h3>
                      <span className="news-center-more">
                        阅读全文
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="news-center-empty">
                {loading ? "加载中…" : "暂无相关动态"}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
