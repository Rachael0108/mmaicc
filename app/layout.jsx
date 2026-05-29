import "./globals.css";

export const metadata = {
  title: "米鹊科技",
  description: "上海米鹊科技有限公司官网",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
