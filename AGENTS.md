# WegoFulfill Site

复刻 [wegofulfill.com](https://wegofulfill.com) 的 Astro 静态站点。定位 **China Fulfillment Partner**（中国采购发货服务商，服务海外 Shopify 卖家）。

## 快速启动

```bash
npm install
npm run dev              # http://localhost:4321/
npm run build            # 40 页，输出 dist/
npm run preview          # 预览构建结果
```

局域网访问：`npx astro dev --port 4321 --host 0.0.0.0`

> 注意：PowerShell 执行策略限制，npm 命令需用 `cmd /c "npm run dev"` 包裹，或直接在普通终端运行。

## 技术栈

- **Astro 4**（v4.16.x）— 静态生成，零 JS 输出
- **@astrojs/sitemap**（锁定 3.2.1，3.7.x 在 Astro 4 上会报错）
- **CSS Custom Properties** — 全局主题变量（`src/styles/global.css`）
- **TypeScript** — 内容数据（`src/data/*.ts`）
- **Schema.org JSON-LD** — 自动结构化数据（8 种类型）

## 项目结构

```
src/
├── components/
│   ├── Header.astro        # 导航栏（桌面 logo 居左，移动端 ☰|logo|Quote）
│   ├── Footer.astro        # 页脚 + 政策链接
│   ├── InquiryForm.astro   # 询盘表单
│   └── RelatedLinks.astro  # 自动相关文章
├── data/                   # 内容（编辑这里即可新增文章）
│   ├── products.ts         # 6 个服务
│   ├── guides.ts           # 6 篇指南（含 DDP、品牌化）
│   ├── comparisons.ts      # 6 篇对比（含 Spocket/Zendrop/AutoDS）
│   ├── case-studies.ts     # 3 篇案例
│   └── posts.ts            # 4 篇博客
├── lib/
│   └── schema.ts           # JSON-LD 生成器（8 种）
├── layouts/
│   └── BaseLayout.astro    # SEO meta、favicon、自动 Schema、WhatsApp 浮动按钮
├── pages/                  # 40 个静态页面
│   ├── index.astro         # 首页（10+ 板块）
│   ├── china-fulfillment-partner.astro  # 核心服务落地页
│   ├── about/ contact/ faq/ resources/
│   ├── services/ guides/ blog/
│   ├── case-studies/ comparisons/
│   └── privacy/ terms/ shipping-delivery/ refund-reshipment
└── styles/
    └── global.css          # CSS 变量 + 基础类
public/
├── images/                 # Logo、照片、OG 图、SVG 图标
├── favicon.ico             # 多尺寸 favicon（16/32/48）
├── favicon-16/32/48/180/192/512.png
├── favicon.svg             # 矢量 favicon（任意尺寸清晰）
├── apple-touch-icon.png    # iOS 主屏图标
└── site.webmanifest        # PWA 清单（主题色 #2563eb）
```

## 首页板块（index.astro）

1. Hero（渐变背景 + CTA）
2. Stats Bar（No MOQ / 1-2 Days / 5-10 Days / 90 Days）
3. 物流速度 + 物流商 Logo + 平台集成 Logo
4. How It Works（3 步流程）
5. 对比表（WegoFulfill vs Others，含 Schema 结构化数据）
6. Core Services（6 个服务卡片）
7. Every Parcel is A Promise
8. FAQ（手风琴）
9. Free Resources（资源卡片）
10. InquiryForm（询盘表单）

## 关于页面（about.astro）

- Hero: "From Technology to Supply Chain"
- 5 行时间线故事（2016→2024）+ 真实照片
- 时间线条（年份节点）
- "What This Means for You" 深色区域
- "What Sets Us Apart" 价值卡片
- 仓库介绍 + 数据统计

## 核心架构

### Schema 自动化系统（`src/lib/schema.ts`）

8 个 JSON-LD 生成函数，BaseLayout 自动注入：

| 函数 | 用途 |
|------|------|
| `organizationSchema()` | Organization + LocalBusiness（每页自动） |
| `breadcrumbSchema()` | 面包屑（通过 breadcrumbs prop） |
| `faqSchema()` | FAQPage（富摘要） |
| `articleSchema()` | Article（博客/指南/案例/对比） |
| `serviceSchema()` | Service（服务详情） |
| `aboutPageSchema()` | AboutPage + Person |
| `contactPageSchema()` | ContactPage |
| `howToSchema()` | HowTo（指南备用） |

BaseLayout 接受 `schema` 和 `breadcrumbs` props，自动叠加 Organization + BreadcrumbList + 页面专属 Schema。

### BaseLayout Props

```astro
<BaseLayout
  title="..."
  description="..."           # ≤160 字符
  breadcrumbs={[{ name: 'Home', url: '/' }, ...]}
  schema={[faqSchema(faqs), serviceSchema(...)]}
>
```

### 响应式导航

- **桌面**（>900px）：Logo（左）| Nav（中）| "Get a Quote"（右）
- **移动**（≤900px）：☰ 汉堡（左）| Logo（居中）| "Quote"（右）
- 移动端菜单下拉全屏展开

### 内容管理

编辑 `src/data/*.ts` 即可：

- `products.ts` — 6 个服务
- `guides.ts` — 6 篇指南（含 DDP、品牌化）
- `comparisons.ts` — 6 篇对比（含 Spocket/Zendrop/AutoDS）
- `case-studies.ts` — 3 篇案例
- `posts.ts` — 4 篇博客

每篇文章自动获得：Article Schema + 面包屑 + 相关文章 + sitemap 收录。

### 关键页面

- `/` — 首页（10+ 板块，数据条，客户评价）
- `/china-fulfillment-partner/` — 核心服务落地页
- `/about/` — 创始人故事（2016→2024 时间线）
- `/contact/` — 询盘表单 + FAQ + 发货区域
- `/services/` / `/guides/` / `/comparisons/` / `/case-studies/` / `/blog/`

## Favicon

品牌蓝（`#2563eb`）圆角方块 + 白色 W（矢量路径绘制，所有尺寸居中一致）。

- `favicon.ico` — 16/32/48 多尺寸（兜底）
- `favicon-{16,32,48,180,192,512}.png` — 各平台尺寸
- `favicon.svg` — 矢量版（`mask-icon` 用）
- `apple-touch-icon.png` — iOS 主屏图标（180）
- `site.webmanifest` — PWA 清单（含主题色）

在 BaseLayout `<head>` 中引用。

## CSS 变量（global.css）

| 变量 | 值 | 用途 |
|---|---|---|
| `--color-primary` | `#2563eb` | 主色 |
| `--color-primary-dark` | `#1d4ed8` | 深主色 |
| `--color-bg` | `#ffffff` | 白色背景 |
| `--color-bg-alt` | `#eff6ff` | 浅蓝背景 |
| `--color-bg-dark` | `#242a56` | 深色背景 |
| `--color-text` | `#393a56` | 正文 |
| `--color-text-light` | `#64748b` | 辅助文字 |
| `--color-border` | `#e2e8f0` | 边框 |

## WhatsApp 浮动按钮

BaseLayout 全局加载，右下角固定，绿色 `#25D366`，点击跳转 `wa.me/8619925247178`。

## SEO/GEO 优化要点

- 域名：`https://wegofulfill.com`
- OG 图绝对 URL：`https://wegofulfill.com/images/og-default.jpg`
- `robots.txt` → `sitemap-index.xml`
- 所有图片：lazy load + width/height（零 CLS）
- Meta description ≤ 160 字符
- 硬核数据（退款率 8%→1.5%、成本节省 30-50%）→ AI 引擎引用友好
- 每页自动 BreadcrumbList，内容页自动 Article Schema，首页 FAQPage + Service + AggregateRating

## 部署

GitHub 推送后 Vercel 和 Cloudflare Pages 同时自动部署。

```bash
# 通过 SSH 推送（本机网络封了 github.com:443，SSH 22 端口可用）
git add -A && git commit -m "update" && git push origin main
```

- **GitHub**: https://github.com/geemike/wegofulfill
- **Vercel**: https://wegofulfill.vercel.app（自动部署）
- **Cloudflare Pages**: 连接同一仓库（自动部署）
- **域名**: https://wegofulfill.com（DNS 待指向 Vercel/Cloudflare）

> Git remote 已切到 SSH：`git@github.com:geemike/wegofulfill.git`。SSH 密钥：`~/.ssh/id_ed25519`（公钥已加到 GitHub）。HTTPS 443 本地被封，用 `git.exe` 走 SSH 推送。

## 添加新内容

1. 编辑 `src/data/*.ts`（products、guides、comparisons、posts、case-studies）
2. Schema、sitemap、面包屑、相关文章全部自动生成
3. `git push` → Vercel/Cloudflare 部署

无 CMS、无数据库——纯 TypeScript 文件。

## 多语言（规划中）

暂未实施。计划方案：**独立国家域名**（wegofulfill.de / .fr / .es / .it），每个站点内容用 AI 翻译生成，权重各自集中。不做子目录（`/de/`），用一个域名集中权重。届时需补 `hreflang` 标签。