import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import NewsDetailByIndex from "@/components/NewsDetailByIndex";

export const metadata = {
  title: "新闻详情 | 米鹊科技",
};

export default function NewsDetailPage() {
  return (
    <PageShell>
      <main>
        <Suspense fallback={null}>
          <NewsDetailByIndex />
        </Suspense>
      </main>
    </PageShell>
  );
}
