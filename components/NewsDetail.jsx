"use client";

import { useEffect, useState } from "react";
import {
  queryNewsMaterialList,
  allMaterial,
  getMaterialDetail,
} from "@/lib/api";

const COMPANY_ID = 1;

function formatDate(value) {
  if (!value) return "";
  return String(value).replace("T", " ").slice(0, 10);
}

function getCategoryId(cat) {
  return cat?.id ?? cat?.newsTypeId ?? cat?.typeId;
}

function getArticlesFromCategory(cat) {
  return cat?.materialList || cat?.children || cat?.list || [];
}

function getArticleId(raw) {
  return raw?.id ?? raw?.materialId;
}

function pickContent(raw) {
  return (
    raw?.content ||
    raw?.materialContent ||
    raw?.detail ||
    raw?.details ||
    raw?.richText ||
    raw?.html ||
    raw?.body ||
    raw?.text ||
    ""
  );
}

function normalizeArticle(raw) {
  if (!raw) return null;
  return {
    id: getArticleId(raw),
    title: raw.title || raw.name || raw.materialName || raw.subject || "",
    date: formatDate(
      raw.createTime ||
        raw.publishTime ||
        raw.releaseTime ||
        raw.updateTime ||
        raw.createDate,
    ),
    image:
      raw.coverImg ||
      raw.coverUrl ||
      raw.cover ||
      raw.picUrl ||
      raw.imgUrl ||
      raw.image ||
      raw.titleImg ||
      "",
    summary: raw.summary || raw.intro || raw.description || raw.digest || "",
    content: pickContent(raw),
  };
}

export default function NewsDetail({ id }) {
  const [article, setArticle] = useState(null);
  // loading | done | error
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    const targetId = String(id);

    // 详情接口不可用时，从列表数据中兜底查找
    async function findInLists() {
      const res = await queryNewsMaterialList({
        companyId: COMPANY_ID,
      }).catch(() => null);
      const cats = Array.isArray(res) ? res : res?.content || [];

      for (const cat of cats) {
        const inline = getArticlesFromCategory(cat);
        const hit = inline.find((a) => String(getArticleId(a)) === targetId);
        if (hit) return hit;
      }

      for (const cat of cats) {
        const cid = getCategoryId(cat);
        if (cid == null) continue;
        const listRes = await allMaterial({
          companyId: COMPANY_ID,
          current: 1,
          size: 9999,
          newsTypeId: cid,
        }).catch(() => null);
        const list = listRes?.content || listRes?.records || listRes || [];
        const hit = list.find((a) => String(getArticleId(a)) === targetId);
        if (hit) return hit;
      }

      return null;
    }

    (async () => {
      let raw = await getMaterialDetail(id).catch(() => null);
      raw = raw?.data ?? raw?.content ?? raw;

      const usable = raw && (pickContent(raw) || raw.title || raw.name);
      if (!usable) {
        raw = await findInLists();
      }

      if (cancelled) return;

      const data = normalizeArticle(raw);
      if (data && data.id != null) {
        setArticle(data);
        setStatus("done");
      } else {
        setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (status === "loading") {
    return (
      <section className="section">
        <div className="container">
          <p className="news-detail-state">加载中…</p>
        </div>
      </section>
    );
  }

  if (status === "error" || !article) {
    return (
      <section className="section">
        <div className="container">
          <p className="news-detail-state">未找到相关文章</p>
          <a className="news-detail-back" href="/news">
            ← 返回新闻资讯
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <article className="detail-article">
          <a className="news-detail-back" href="/news">
            ← 返回新闻资讯
          </a>
          {article.date ? <p className="eyebrow">{article.date}</p> : null}
          <h2>{article.title}</h2>
          {article.image ? (
            <img
              className="media-frame"
              src={article.image}
              alt={article.title}
              style={{ width: "100%", margin: "28px 0" }}
            />
          ) : null}
          {article.content ? (
            <div
              className="detail-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : article.summary ? (
            <p>{article.summary}</p>
          ) : null}
        </article>
      </div>
    </section>
  );
}
