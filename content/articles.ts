export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: { title: string; text: string }[] }
  | { type: "quote"; text: string; cite: string }
  | { type: "figure"; src: string; alt: string; width: number; height: number; caption: string };

export type Article = {
  slug: string;
  title: string;
  standfirst: string;
  /** ISO date of publication, used for grouping and structured data */
  date: string;
  minutes: number;
  /** 报道 = 转载/整理的公开报道；原创 = 本人撰写 */
  kind: "报道" | "原创";
  tags: string[];
  source?: { name: string; url: string };
  cover: { src: string; alt: string; width: number; height: number };
  /** 文末来源说明 */
  credit: string;
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "2026-hkftw-sme-ai-challenge",
    title: "应邀出任 2026 香港金融科技周「中小企创智挑战赛」评委",
    standfirst:
      "11 月 2 日，于 2026 香港金融科技周期间，应邀担任数码港与恒生银行合办「中小企创『智』挑战赛」（SME AI Innovation Challenge）决赛评委，以中小企业视角参与评审，推动 AI 方案真正落地。",
    date: "2026-11-13",
    minutes: 6,
    kind: "报道",
    tags: ["金融科技", "港中联"],
    source: { name: "港中联", url: "https://mp.weixin.qq.com/s/w9yEhe_7s6fitZGK0keS0g" },
    cover: {
      src: "/insights/2026-hkftw/cover.jpg",
      alt: "数码港决赛现场合影",
      width: 1080,
      height: 719,
    },
    credit: "本文根据港中联公众号 2026 年 11 月 13 日发布的报道整理，原文为繁体，图片来自该报道。",
    blocks: [
      {
        type: "p",
        text: "11 月 2 日，港中联执行会长、IDN 科技集团董事局主席曾崇瑞先生应邀担任「中小企创『智』挑战赛」（SME AI Innovation Challenge）评委，于 2026 香港金融科技周期间参与决赛评审工作。",
      },
      { type: "h2", text: "01　应邀评审：关注中小企 AI 落地" },
      {
        type: "p",
        text: "「中小企创『智』挑战赛」由数码港与恒生银行合办，于 2026 香港金融科技周期间举行决赛。赛事面向 AI 企业、初创及方案供应商，邀请他们为香港中小企提供实用、可负担、可扩展的人工智能方案，协助中小企加速数码转型与智能升级。",
      },
      {
        type: "figure",
        src: "/insights/2026-hkftw/cover.jpg",
        alt: "数码港决赛现场合影",
        width: 1080,
        height: 719,
        caption:
          "数码港决赛现场。左起：曾崇瑞、数码港人工智能与数据科学总监严涤宇、恒生银行董事总经理黄宏活、香港 AI 培训学院（HK AI-SOLVE Academy）创办人文恩澄、香港中小型企业总商会会长黎卓斌。",
      },
      { type: "h3", text: "双重身份，双重判断" },
      {
        type: "p",
        text: "作为 IDN 科技集团董事局主席，他深耕人工智能产业，对 AI 技术的成熟度与落地路径有一线判断；身兼港中联执行会长，他长期服务全球华人中小企业，深谙中小企数码转型的真实痛点。评审过程中，他从技术可行性与场景价值双重维度，对入围决赛的方案进行评估。",
      },
      { type: "p", text: "赛事聚焦四大中小企应用场景：" },
      {
        type: "ul",
        items: [
          { title: "销售与市场推广", text: "AI 辅助获客、内容创作、定价与推广投放" },
          { title: "客户互动与体验", text: "对话式服务、多语言支持、个性化留存分析" },
          { title: "营运与生产力", text: "流程自动化、库存物流优化、文书处理" },
          { title: "会计、财务与现金流", text: "自动化会计、审计报告、营运资金可视化" },
        ],
      },
      { type: "h2", text: "02　世界级平台：香港的国际坐标" },
      {
        type: "p",
        text: "11 月 2 日至 6 日，由香港特区政府财经事务及库务局、商务及经济发展局和投资推广署主办的「香港金融科技周 × StartmeupHK 2026」在香港会议展览中心举行，以「金融科技枢纽：联通世界、共建未来」为主题，聚焦「金融+」「AI+」及企业「走出去」三大增长引擎。适逢国家「十五五」规划与香港首个五年规划开局，战略意义深远。",
      },
      {
        type: "figure",
        src: "/insights/2026-hkftw/stats.png",
        alt: "2026 香港金融科技周关键数据",
        width: 873,
        height: 255,
        caption: "香港金融科技周 2026 关键数据：120+ 经济体、45,000+ 与会者、1,000+ 演讲嘉宾、800+ 参展机构。",
      },
      {
        type: "p",
        text: "行政长官李家超出席开幕式并致辞；财政司司长陈茂波表示，特区政府将提供清晰规则与可靠基建，让企业收款、融资及支付更快捷可靠。活动期间，各监管机构围绕人工智能应用与治理、代币化、支付互联等领域公布多项新措施——中小企业的 AI 转型，正是这座国际金融科技枢纽的核心议题。",
      },
      {
        type: "figure",
        src: "/insights/2026-hkftw/venue.jpg",
        alt: "香港金融科技周会场巡礼",
        width: 1060,
        height: 804,
        caption: "会场巡礼：主视觉墙、十大专题论坛区、场馆霓虹标识与腾讯营销云展台。",
      },
      { type: "h2", text: "03　港中联的使命：服务会员，链接全球" },
      {
        type: "p",
        text: "评审之外，曾崇瑞先生一行亦到访恒生银行展位，就商业银行服务如何支持中小企发展、金融与创科生态如何协同赋能等议题交流探讨。",
      },
      {
        type: "figure",
        src: "/insights/2026-hkftw/hangseng.jpg",
        alt: "与恒生银行董事总经理黄宏活于展位合影",
        width: 1080,
        height: 719,
        caption: "于恒生银行展位，与恒生银行董事总经理黄宏活合影。",
      },
      {
        type: "p",
        text: "香港中小企业工商联合会（HCFSME 港中联）长期以来立足香港、服务中小企，致力于推动会员企业数码转型与国际化发展。本届香港金融科技周云集全球金融科技与 AI 创科资源，是中小企洞察趋势、对接资源、探索落地应用的重要国际平台。",
      },
      { type: "p", text: "港中联参与本次活动，正是延续一贯以来助企发展的使命：" },
      {
        type: "ul",
        items: [
          { title: "把握前沿", text: "掌握国际 AI 与金融科技趋势，为会员企业决策提供参考。" },
          { title: "对接资源", text: "藉评委与参访契机，为会员链接创科生态与国际市场资源。" },
          { title: "推动落地", text: "把优质 AI 方案带到中小企面前，助力转化为实实在在的生产力。" },
        ],
      },
      {
        type: "figure",
        src: "/insights/2026-hkftw/expo.jpg",
        alt: "国际金融机构展位巡礼",
        width: 1060,
        height: 804,
        caption: "国际金融机构展位巡礼：中银香港、恒生银行、渣打、汇丰。",
      },
      {
        type: "quote",
        text: "智能技术虽已普及，但多数中小企业仍面临「执行鸿沟」。技术落地的关键，在于将技术真正嵌入业务流程，实现降本增效。",
        cite: "港中联执行会长 · IDN 科技集团董事局主席 曾崇瑞",
      },
      {
        type: "p",
        text: "未来，港中联将持续发挥商协会的桥梁纽带作用，收集中小企数码转型的真实痛点，组织更多参访与对接活动，助力会员企业把握大湾区及全球市场机遇，在国际舞台上链接资源、行稳致远。",
      },
      {
        type: "figure",
        src: "/insights/2026-hkftw/closing.png",
        alt: "商源香江 · 惠通全球",
        width: 1076,
        height: 336,
        caption: "商源香江 · 惠通全球。",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);

export const dateLabel = (iso: string) => iso.replaceAll("-", ".");

export const yearOf = (iso: string) => iso.slice(0, 4);

/** 按年份倒序分组，年份内按日期倒序 */
export const groupedArticles = () => {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
  const groups: { year: string; items: Article[] }[] = [];
  for (const article of sorted) {
    const year = yearOf(article.date);
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.items.push(article);
    else groups.push({ year, items: [article] });
  }
  return groups;
};
