"use client";

import { useState } from "react";

type Language = "zh" | "en";

const copy = {
  zh: {
    nav: [
      ["关于", "#about"],
      ["现任职务", "#roles"],
      ["活动", "#timeline"],
      ["媒体", "#media"],
    ],
    eyebrow: "SAM TSANG · TSANG SUNG SUI",
    name: "曾崇瑞",
    headline: "连接产业、资本与科技，\n推动数字经济走向真实世界。",
    intro:
      "香港商协会领导者、科技投资人及数字经济产业推动者。长期连接香港、中国内地与国际市场，聚焦 AI、Web3、RWA 与中小企业数字化转型。",
    primaryCta: "了解我的工作",
    secondaryCta: "媒体报道",
    portraitAlt: "曾崇瑞 Sam Tsang 商务肖像",
    current: "现任",
    roleStrip: [
      "港中联执行会长",
      "香港区块链协会常务副会长",
      "IDOM Capital 创始人兼 CEO",
      "IDN 科技集团董事局主席",
    ],
    aboutKicker: "ABOUT",
    aboutTitle: "一个以香港为枢纽的\n跨境产业连接者",
    aboutBody: [
      "曾崇瑞的工作横跨商协会、科技投资与产业合作。他关注的不只是前沿技术本身，而是如何将人工智能、区块链和数据资产转化为中小企业真正可用的增长工具。",
      "从香港出发，他持续推动与重庆、福建、贵州、西安、南京及东盟市场的交流，在政府、企业、资本与技术团队之间搭建长期合作网络。",
    ],
    stats: [
      ["2021—2026", "公开活动时间线"],
      ["10+", "已核实公众号原文"],
      ["HK · CN · ASEAN", "跨境合作网络"],
    ],
    rolesKicker: "CURRENT ROLES",
    rolesTitle: "社会职务与企业角色",
    roles: [
      ["执行会长", "香港中小企业工商联合会（港中联 / HCFSME）"],
      ["常务副会长", "香港区块链协会（HKBA）"],
      ["创始人兼 CEO", "IDOM Capital（美国）"],
      ["董事局主席", "IDN 科技集团（美国）"],
      ["创会主席", "港中联 Web3.0 行业发展委员会"],
      ["副总裁", "盛峻资本（香港）"],
    ],
    focusLabel: "长期关注",
    focus: ["AI + 金融", "Web3", "RWA", "数字经济", "跨境合作", "中小企业转型"],
    timelineKicker: "SELECTED MOMENTS",
    timelineTitle: "近期活动与公共参与",
    timelineIntro: "以公开协会稿、媒体报道及峰会记录为依据，活动日期与文章发布日期分别整理。",
    timeline: [
      ["2026.06", "重庆", "主持“AI+金融”圆桌", "第八届西洽会渝港 AI+产业协同专题活动"],
      ["2026.05", "贵州", "香港企业家贵州行", "考察算力基础设施与产业数智化实践"],
      ["2026.04", "福建", "闽港经贸科创对接", "围绕 AI、生物医药超算与数据资产化展开交流"],
      ["2026.01", "香港", "AI 赋能中小企业", "获颁港中联执行会长授牌并作主题分享"],
      ["2025.11", "西安", "数字经济高峰论坛大会主席", "推动 AI、大数据与实体产业的产投融合作"],
      ["2024.11", "重庆", "两岸暨港澳服务业论坛", "发表数字经济全球挑战报告与青年机遇主题演讲"],
      ["2021.12", "线上", "元宇宙与数字经济分享", "以青年事务发展委员会副主席身份参与服务业论坛"],
    ],
    mediaKicker: "MEDIA ARCHIVE",
    mediaTitle: "经核实的公开报道",
    mediaIntro: "同一事件的不同媒体来源归入同一传播脉络，保留原始页面以便查证。",
    read: "查看原文",
    media: [
      ["港中联官微", "携手西洽会 · 渝港谱新篇", "2026.06.21", "https://mp.weixin.qq.com/s?__biz=MzkxNTQ5MzA0OQ==&mid=2247488750&idx=1&sn=7c3bcce3e81cf42305292e20f5d9d1ff"],
      ["港中联官微", "山海联袂，黔港同心", "2026.05.20", "https://mp.weixin.qq.com/s?__biz=MzkxNTQ5MzA0OQ==&mid=2247488644&idx=1&sn=d7ca70111ce6e2892abd143746c78055"],
      ["香港区块链协会", "AI+Web3 中小企业数字升级计划", "2026.06.05", "https://mp.weixin.qq.com/s?__biz=MzkyNDY1MTMzNA==&mid=2247485813&idx=1&sn=90a94e671f7bc9d91881f4506a37cd33"],
      ["财华智库", "香港财富管理高峰论坛 · Web3Space", "2026.01.09", "https://www.top100hk.com/ceremony/year12/"],
      ["香港商报", "渝港联动觅商机", "2025.10.26", "https://www.hkcd.com.hk/hkcdweb/content_p/2025/10/26/content_191948.html"],
      ["新浪财经", "两岸服务业大咖集聚重庆", "2024.11.20", "https://finance.sina.com.cn/jjxw/2024-11-20/doc-incwsynq2162426.shtml"],
    ],
    visionKicker: "POINT OF VIEW",
    visionQuote: "技术的价值，不在于概念有多新，而在于能否真正帮助企业降低成本、提升效率，并连接更大的市场。",
    visionCredit: "曾崇瑞 · 关于中小企业数字化转型",
    contactKicker: "CONNECT",
    contactTitle: "让合作从一次对话开始",
    contactBody: "欢迎就产业合作、科技项目、峰会演讲、项目孵化及媒体采访进行交流。",
    contactButton: "联系 IDOM Capital",
    footer: "曾崇瑞 · Sam Tsang · TSANG SUNG SUI",
    note: "本网站为本地预览版本 · 信息更新至 2026 年 7 月",
  },
  en: {
    nav: [["About", "#about"], ["Roles", "#roles"], ["Moments", "#timeline"], ["Media", "#media"]],
    eyebrow: "SAM TSANG · TSANG SUNG SUI",
    name: "Sam Tsang",
    headline: "Connecting industry, capital and technology\nto move the digital economy forward.",
    intro: "Hong Kong–based association leader, technology investor and digital-economy advocate connecting Hong Kong, Mainland China and international markets across AI, Web3, RWA and SME transformation.",
    primaryCta: "Explore my work",
    secondaryCta: "Media archive",
    portraitAlt: "Business portrait of Sam Tsang",
    current: "CURRENT",
    roleStrip: ["Executive President, HCFSME", "Executive Vice Chairman, HKBA", "Founder & CEO, IDOM Capital", "Chairman, IDN Technology Group"],
    aboutKicker: "ABOUT",
    aboutTitle: "A cross-border ecosystem builder\nwith Hong Kong at the center",
    aboutBody: ["Sam Tsang works across business associations, technology investment and industrial collaboration. His focus is turning AI, blockchain and data assets into practical growth tools for SMEs.", "From Hong Kong, he builds long-term networks across Chongqing, Fujian, Guizhou, Xi’an, Nanjing and ASEAN—connecting government, enterprise, capital and technology teams."],
    stats: [["2021—2026", "public activity timeline"], ["10+", "verified WeChat articles"], ["HK · CN · ASEAN", "cross-border network"]],
    rolesKicker: "CURRENT ROLES",
    rolesTitle: "Leadership and enterprise roles",
    roles: [["Executive President", "Hong Kong Federation of Commerce for SMEs"], ["Executive Vice Chairman", "Hong Kong Blockchain Association"], ["Founder & CEO", "IDOM Capital (United States)"], ["Chairman", "IDN Technology Group (United States)"], ["Founding Chairman", "HCFSME Web3.0 Industry Development Committee"], ["Vice President", "Shengjun Capital (Hong Kong)"]],
    focusLabel: "FOCUS AREAS",
    focus: ["AI + Finance", "Web3", "RWA", "Digital Economy", "Cross-border Growth", "SME Transformation"],
    timelineKicker: "SELECTED MOMENTS",
    timelineTitle: "Recent public engagements",
    timelineIntro: "Compiled from verified association releases, media reports and event records, with event and publication dates distinguished.",
    timeline: [["2026.06", "Chongqing", "Moderated the AI + Finance roundtable", "Western China International Fair for Investment and Trade"], ["2026.05", "Guizhou", "Hong Kong Entrepreneurs Delegation", "Exploring computing infrastructure and industrial digitalization"], ["2026.04", "Fujian", "Fujian–Hong Kong innovation dialogue", "AI, biomedical computing and data assetization"], ["2026.01", "Hong Kong", "AI for SME transformation", "Appointed Executive President of HCFSME"], ["2025.11", "Xi’an", "Chair of the Digital Economy Summit", "Connecting AI, data and industrial investment"], ["2024.11", "Chongqing", "Cross-Strait Services Forum", "Presented on global digital-economy challenges and youth opportunity"], ["2021.12", "Online", "Metaverse and digital-economy talk", "Participated as Vice Chair of the Youth Affairs Committee"]],
    mediaKicker: "MEDIA ARCHIVE",
    mediaTitle: "Verified public coverage",
    mediaIntro: "Multiple reports about one event are grouped into the same narrative while original source pages remain available for verification.",
    read: "View source",
    media: [["HCFSME WeChat", "Hong Kong and Chongqing at the WCIFIT", "2026.06.21", "https://mp.weixin.qq.com/s?__biz=MzkxNTQ5MzA0OQ==&mid=2247488750&idx=1&sn=7c3bcce3e81cf42305292e20f5d9d1ff"], ["HCFSME WeChat", "Hong Kong Entrepreneurs in Guizhou", "2026.05.20", "https://mp.weixin.qq.com/s?__biz=MzkxNTQ5MzA0OQ==&mid=2247488644&idx=1&sn=d7ca70111ce6e2892abd143746c78055"], ["HKBA", "AI + Web3 SME Digital Upgrade Initiative", "2026.06.05", "https://mp.weixin.qq.com/s?__biz=MzkyNDY1MTMzNA==&mid=2247485813&idx=1&sn=90a94e671f7bc9d91881f4506a37cd33"], ["Finet", "Hong Kong Wealth Management Summit", "2026.01.09", "https://www.top100hk.com/ceremony/year12/"], ["Hong Kong Commercial Daily", "Hong Kong–Chongqing Business Delegation", "2025.10.26", "https://www.hkcd.com.hk/hkcdweb/content_p/2025/10/26/content_191948.html"], ["Sina Finance", "Cross-Strait Services Leaders Gather in Chongqing", "2024.11.20", "https://finance.sina.com.cn/jjxw/2024-11-20/doc-incwsynq2162426.shtml"]],
    visionKicker: "POINT OF VIEW",
    visionQuote: "The value of technology is not how new the idea sounds, but whether it helps businesses lower costs, improve efficiency and reach a larger market.",
    visionCredit: "Sam Tsang · On SME digital transformation",
    contactKicker: "CONNECT",
    contactTitle: "Let collaboration begin with a conversation",
    contactBody: "Open to conversations around industrial partnerships, technology ventures, speaking engagements, incubation and media.",
    contactButton: "Contact IDOM Capital",
    footer: "曾崇瑞 · Sam Tsang · TSANG SUNG SUI",
    note: "Local preview · Information current as of July 2026",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const t = copy[language];

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "曾崇瑞",
      alternateName: ["Sam Tsang", "TSANG SUNG SUI"],
      image: "/portrait.jpg",
      jobTitle: "Executive President, HCFSME",
      description: "Hong Kong association leader, technology investor and digital economy advocate.",
      sameAs: ["https://idom.capital/", "https://www.hkba.club/membership.html"],
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sam Tsang home">
          <span className="brand-cn">曾崇瑞</span>
          <span className="brand-en">SAM TSANG</span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <button className="language-toggle" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label="Switch language">
          {language === "zh" ? "EN" : "中文"}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> HONG KONG · GREATER CHINA · GLOBAL</p>
          <h1><span className="name-line">{t.name}</span><span className="name-roman">SAM TSANG</span></h1>
          <p className="hero-statement">{t.headline.split("\n").map((line) => <span key={line}>{line}</span>)}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-role-line">
            {t.roleStrip.map((role) => <span key={role}>{role}</span>)}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">{t.primaryCta}<span>↓</span></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src="/portrait.jpg" alt={t.portraitAlt} />
          </div>
          <div className="portrait-label">INDUSTRY · CAPITAL · TECHNOLOGY</div>
        </div>
        <div className="hero-index" aria-label="Section index">
          <a href="#about"><span>00</span> PROFILE / 2026</a>
          <a href="#roles"><span>01</span> ROLES</a>
          <a href="#timeline"><span>02</span> TIMELINE</a>
          <a href="#media"><span>03</span> MEDIA</a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="kicker">{t.aboutKicker}</p>
          <h2>{t.aboutTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
        </div>
        <div className="about-content">
          {t.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-signature">SAM TSANG <span>／ HONG KONG</span></div>
        </div>
        <div className="stats-row">
          {t.stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section roles-section" id="roles">
        <div className="section-heading light">
          <p className="kicker">{t.rolesKicker}</p>
          <h2>{t.rolesTitle}</h2>
        </div>
        <div className="roles-layout">
          <div className="roles-list">
            {t.roles.map(([title, organization], index) => (
              <article className="role-row" key={organization}>
                <span className="role-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{organization}</p>
              </article>
            ))}
          </div>
          <aside className="focus-card">
            <p>04 / {t.focusLabel}</p>
            <div>{t.focus.map((item) => <span key={item}>{item}</span>)}</div>
          </aside>
        </div>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-heading heading-row">
          <div><p className="kicker">{t.timelineKicker}</p><h2>{t.timelineTitle}</h2></div>
          <p className="section-intro">{t.timelineIntro}</p>
        </div>
        <div className="timeline">
          {t.timeline.map(([date, place, title, detail]) => (
            <article className="timeline-item" key={`${date}-${title}`}>
              <time>{date}</time><span className="place">{place}</span><div><h3>{title}</h3><p>{detail}</p></div><span className="timeline-dot" />
            </article>
          ))}
        </div>
      </section>

      <section className="vision-section">
        <p className="kicker">{t.visionKicker}</p>
        <blockquote>“{t.visionQuote}”</blockquote>
        <p className="vision-credit">{t.visionCredit}</p>
      </section>

      <section className="section media-section" id="media">
        <div className="section-heading heading-row">
          <div><p className="kicker">{t.mediaKicker}</p><h2>{t.mediaTitle}</h2></div>
          <p className="section-intro">{t.mediaIntro}</p>
        </div>
        <div className="media-grid">
          {t.media.map(([source, title, date, url]) => (
            <a className="media-card" href={url} key={`${source}-${title}`} target="_blank" rel="noreferrer">
              <div><span className="media-source">{source}</span><time>{date}</time></div>
              <h3>{title}</h3>
              <span className="media-link">{t.read} ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        <a className="button button-light" href="mailto:contact@idom.capital">{t.contactButton}<span>↗</span></a>
      </section>

      <footer>
        <p>{t.footer}</p><p>{t.note}</p><a href="#top">↑</a>
      </footer>
    </main>
  );
}
