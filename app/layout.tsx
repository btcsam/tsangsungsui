import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "曾崇瑞 Sam Tsang | 数字经济产业推动者",
  description: "曾崇瑞（Sam Tsang）个人主页：香港商协会领导者、科技投资人及数字经济产业推动者。",
  icons: { icon: "/portrait.jpg", shortcut: "/portrait.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hans"><body>{children}</body></html>;
}
