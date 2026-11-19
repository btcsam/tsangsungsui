import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, dateLabel, getArticle } from "../../../content/articles";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} · 曾崇瑞 Sam Tsang`,
    description: article.standfirst,
    alternates: { canonical: `/insights/${article.slug}/` },
    openGraph: {
      type: "article",
      url: `/insights/${article.slug}/`,
      title: article.title,
      description: article.standfirst,
      publishedTime: article.date,
      images: [{ url: article.cover.src, width: article.cover.width, height: article.cover.height, alt: article.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.standfirst,
      images: [article.cover.src],
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const ordered = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
  const index = ordered.findIndex((item) => item.slug === article.slug);
  const next = index > 0 ? ordered[index - 1] : undefined;
  const prev = index < ordered.length - 1 ? ordered[index + 1] : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.standfirst,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "zh-Hans",
    image: [`https://tsangsungsui.com${article.cover.src}`],
    mainEntityOfPage: `https://tsangsungsui.com/insights/${article.slug}/`,
    isBasedOn: article.source?.url,
    author: article.source
      ? { "@type": "Organization", name: "香港中小企业工商联合会（港中联）", url: "https://hcfsme.org" }
      : { "@type": "Person", name: "曾崇瑞", alternateName: "Sam Tsang", url: "https://tsangsungsui.com/" },
    publisher: { "@type": "Person", name: "曾崇瑞", alternateName: "Sam Tsang", url: "https://tsangsungsui.com/" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
          <Link href="/#about">关于</Link>
          <Link href="/#roles">现任职务</Link>
          <Link href="/#timeline">活动</Link>
          <Link href="/#media">媒体</Link>
          <Link href="/insights/" aria-current="page">洞见</Link>
          <Link href="/#contact">联系</Link>
        </nav>
        <span aria-hidden="true" />
      </header>

      <article className="article-page" id="top">
        <header className="article-head">
          <div className="article-head-inner">
            <Link className="article-back" href="/insights/">← 全部文章</Link>
            <p className="kicker">INSIGHTS · {article.kind}</p>
            <h1>{article.title}</h1>
            <p className="article-standfirst">{article.standfirst}</p>

            {article.source ? (
              <p className="article-source">
                <b>{article.kind}</b>
                本文转自 <span>{article.source.name}</span> 公众号 2026 年 11 月 13 日发布的原文（繁体），经整理编辑；文中图片来自同一篇报道。
                <a className="article-source-link" href={article.source.url} target="_blank" rel="noreferrer">
                  阅读公众号原文 ↗
                </a>
              </p>
            ) : null}

            <div className="article-byline">
              <strong>曾崇瑞 Sam Tsang</strong>
              <time dateTime={article.date}>{dateLabel(article.date)}</time>
              <span>约 {article.minutes} 分钟</span>
            </div>
          </div>
        </header>

        <div className="article-body">
          {article.blocks.map((block, i) => {
            const key = `${block.type}-${i}`;
            switch (block.type) {
              case "p":
                return <p key={key}>{block.text}</p>;
              case "h2":
                return <h2 key={key}>{block.text}</h2>;
              case "h3":
                return <h3 key={key}>{block.text}</h3>;
              case "ul":
                return (
                  <ul key={key}>
                    {block.items.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong> — {item.text}
                      </li>
                    ))}
                  </ul>
                );
              case "quote":
                return (
                  <figure className="article-quote" key={key}>
                    <blockquote>{block.text}</blockquote>
                    <figcaption>{block.cite}</figcaption>
                  </figure>
                );
              case "figure":
                return (
                  <figure key={key}>
                    <Image src={block.src} alt={block.alt} width={block.width} height={block.height} sizes="(max-width: 860px) 100vw, 664px" />
                    <figcaption>{block.caption}</figcaption>
                  </figure>
                );
              default:
                return null;
            }
          })}

          <hr />
          <p className="article-credit">{article.credit}</p>
        </div>

        <div className="article-foot">
          <div className="article-sign">
            <span>SAM TSANG ／ HONG KONG</span>
            <span>{dateLabel(article.date)}</span>
          </div>

          {prev || next ? (
            <nav className="article-pager" aria-label="文章导航">
              {prev ? (
                <Link href={`/insights/${prev.slug}/`}>
                  <span>← 上一篇</span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`/insights/${next.slug}/`}>
                  <span>下一篇 →</span>
                  <strong>{next.title}</strong>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          ) : null}
        </div>
      </article>

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
