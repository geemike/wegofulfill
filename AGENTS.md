# WegoFulfill Site

Astro 静态站点，定位 **China Fulfillment Partner**（中国采购发货服务商）。

## 快速启动

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # 40 页，输出 dist/
```

## 技术栈

- **Astro 4** — 静态生成，零 JS 输出
- **@astrojs/sitemap** — 构建时自动生成 sitemap-index.xml
- **Scoped CSS** — 组件级样式
- **TypeScript** — 内容数据 (`src/data/*.ts`)
- **Schema.org JSON-LD** — 自动结构化数据 (8 种类型)

## 核心架构

### Schema 自动化系统 (`src/lib/schema.ts`)

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

### BaseLayout Props

```astro
<BaseLayout
  title="..."
  description="..."
  breadcrumbs={[{ name: 'Home', url: '/' }, ...]}
  schema={[faqSchema(faqs), serviceSchema(...)]}
>
```

### 响应式导航

- **桌面** (>900px)：Logo（左）| Nav（中）| "Get a Quote"（右）
- **移动** (≤900px)：☰（左）| Logo（居中）| "Quote"（右）

### 内容管理

编辑 `src/data/*.ts` 即可：
- `products.ts` — 6 个服务
- `guides.ts` — 6 篇指南（含 DDP、品牌化）
- `comparisons.ts` — 6 篇对比（含 Spocket/Zendrop/AutoDS）
- `case-studies.ts` — 3 篇案例
- `posts.ts` — 4 篇博客

每篇文章自动获得：Article Schema + 面包屑 + 相关文章 + sitemap 收录

### 关键页面

- `/` — 首页（10+ 板块，数据条，客户评价）
- `/china-fulfillment-partner/` — 核心服务落地页
- `/about/` — 创始人故事（2016→2024 时间线）
- `/contact/` — 询盘表单 + FAQ + 发货区域
- `/services/` / `/guides/` / `/comparisons/` / `/case-studies/` / `/blog/`

## CSS 变量

| 变量 | 值 | 用途 |
|---|---|---|
| `--color-primary` | `#2563eb` | 主色 |
| `--color-primary-dark` | `#1d4ed8` | 深主色 |
| `--color-bg-dark` | `#242a56` | 深色背景 |
| `--color-text` | `#393a56` | 正文 |
| `--color-text-light` | `#64748b` | 辅助文字 |

## SEO/GEO 优化要点

- 域名：`https://wegofulfill.com`
- OG 图绝对 URL：`https://wegofulfill.com/images/og-default.jpg`
- robots.txt → `sitemap-index.xml`
- WhatsApp 浮动按钮（全局，#25D366）
- 所有图片：lazy load + width/height（零 CLS）
- Meta description ≤ 160 字符
- 硬核数据（退款率 8%→1.5%，成本节省 30-50%）— AI 引擎引用友好

## 部署

- **GitHub**: https://github.com/geemike/wegofulfill
- **Vercel**: 自动部署（git push 触发）
- 静态输出，零服务器，零维护