import type { Metadata } from "next";
import Link from "next/link";
import { articles, dateLabel, groupedArticles, yearOf } from "../../content/articles";

export const metadata: Metadata = {
  title: "洞见 · 曾崇瑞 Sam Tsang",
  description:
    "曾崇瑞关于人工智能、Web3 与真实世界资产（RWA）、跨境产业合作及中小企业数字化转型的文章与公开记录。原创长文直接署名，协会与媒体来稿标注来源。",
  alternates: { canonical: "/insights/" },
  openGraph: {
    type: "website",
    url: "/insights/",
    title: "洞见 · 曾崇瑞 Sam Tsang",
    description: "关于人工智能、Web3 与 RWA、跨境产业合作与中小企业数字化转型的判断与公开记录。",
  },
};

const navItems: [string, string][] = [
  ["关于", "/#about"],
  ["现任职务", "/#roles"],
  ["活动", "/#timeline"],
  ["媒体", "/#media"],
  ["洞见", "/insights/"],
  ["联系", "/#contact"],
];

const years = [...new Set(articles.map((article) => yearOf(article.date)))].sort();
const range = years.length > 1 ? `${years[0]} — ${years[years.length - 1]}` : years[0] ?? "2026";

export default function InsightsPage() {
  const groups = groupedArticles();

  return (
    <main>
      <header className="site-header">
        <Link className="site-mark" href="/" aria-label="返回首页">
          <span className="site-mark-monogram" aria-hidden="true">ST</span>
          <span className="site-mark-rule" aria-hidden="true" />
          <span className="site-mark-copy" aria-hidden="true">
            <strong>OFFICIAL PROFILE</strong>
            <small>HONG KONG</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} aria-current={href === "/insights/" ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <span aria-hidden="true" />
      </header>

      <section className="insights-hero" id="top">
        <div className="insights-hero-inner">
          <Link className="insights-home" href="/">← 返回首页</Link>
          <p className="kicker">INSIGHTS · 洞见</p>
          <h1>
            把判断写下来，
            <br />
            让经验可以被<em>复用</em>。
          </h1>
          <p className="insights-lede">
            这里收录曾崇瑞关于人工智能、Web3 与真实世界资产、跨境产业合作，以及中小企业数字化转型的判断与公开记录。
            原创长文直接署名；协会与媒体来稿标注来源，不做内容搬运。
          </p>
          <div className="insights-meta">
            <span>共 {articles.length} 篇 · 持续更新</span>
            <span>{range}</span>
            <span>AI + 金融 · Web3 · RWA · 跨境</span>
            <span>中文</span>
          </div>
        </div>
      </section>

      <div className="insights-list">
        {groups.map((group) => (
          <section className="article-group" key={group.year} aria-label={`${group.year} 年文章`}>
            <h2 className="group-year">{group.year}</h2>
            {group.items.map((article) => (
              <Link className="article-row" href={`/insights/${article.slug}/`} key={article.slug}>
                <time dateTime={article.date}>{dateLabel(article.date)}</time>
                <div>
                  <div className="article-tags">
                    <span className="tag-kind">{article.kind}</span>
                    {article.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.standfirst}</p>
                </div>
                <span className="article-row-cta">
                  阅读 · {article.minutes} 分钟 <i aria-hidden="true">→</i>
                </span>
              </Link>
            ))}
          </section>
        ))}
      </div>

      <footer>
        <p>曾崇瑞 · Sam Tsang · TSANG SUNG SUI</p>
        <p>官方网站 · 信息更新至 2026 年 11 月</p>
        <div className="footer-socials" aria-label="个人联系方式">
          <a href="https://www.linkedin.com/in/btcsam/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>
          </a>
          <a href="https://x.com/btcsam" target="_blank" rel="noreferrer" aria-label="X" title="X">
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
            </svg>
          </a>
        </div>
        <a className="back-to-top" href="#top" aria-label="返回顶部">↑</a>
      </footer>
    </main>
  );
}
