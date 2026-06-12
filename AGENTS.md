# WegoFulfill Site

复刻 [wegofulfill.com](https://wegofulfill.com) 的 Astro 静态站点。

## 快速启动

```bash
npm install
npm run dev              # http://localhost:4321/
npm run build            # 输出到 dist/
node serve.cjs           # 预览构建结果
```

局域网访问：`npx astro dev --port 4321 --host 0.0.0.0`

## 技术栈

- **Astro 4** — 静态站点生成，输出纯 HTML
- **CSS Custom Properties** — 全局主题变量（`src/styles/global.css`）
- **TypeScript 数据文件** — 内容管理（`src/data/`）
- **JSON-LD** — 结构化数据，SEO/GEO 优化
- **Formsubmit.co** — 表单提交（无需后端）

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.astro     # 导航栏（WegoFulfill 文字 Logo）
│   ├── Footer.astro     # 页脚
│   └── InquiryForm.astro # 询盘表单（白底卡片样式）
├── data/                # TypeScript 内容数据
│   ├── products.ts      # 6 个服务
│   ├── guides.ts        # 4 篇指南
│   ├── comparisons.ts   # 3 篇对比
│   ├── case-studies.ts  # 3 篇案例
│   └── posts.ts         # 4 篇博客
├── layouts/
│   └── BaseLayout.astro # 基础布局（SEO meta、JSON-LD、字体）
├── pages/               # 路由页面
│   ├── index.astro      # 首页（10 个板块）
│   ├── about.astro      # 关于我们
│   ├── contact.astro    # 联系页
│   ├── faq.astro        # FAQ
│   ├── resources.astro  # 资源中心
│   ├── privacy.astro    # 隐私政策
│   ├── refund-reshipment.astro
│   ├── shipping-delivery.astro
│   ├── terms.astro      # 服务条款
│   ├── blog/            # 博客列表 + 详情
│   ├── guides/          # 指南列表 + 详情
│   ├── comparisons/     # 对比列表 + 详情
│   ├── case-studies/    # 案例列表 + 详情
│   └── services/        # 服务列表 + 详情
└── styles/
    └── global.css       # 全局样式变量和基础类
public/images/           # 静态资源
    ├── wegofulfill-team.jpg       # 团队照片
    ├── wegofulfill-logo.png       # 站点 Logo
    ├── wegofulfill-logo-blue.png  # 蓝色变体 Logo
    ├── woocommerce-logo.svg       # WooCommerce
    ├── shopify-logo.svg           # Shopify
    ├── tiktok-logo.svg            # TikTok Shop
    ├── amazon-logo.svg            # Amazon
    └── ebay-logo.svg              # eBay
```

## 首页板块（index.astro）

1. Hero（渐变背景 + CTA）
2. Stats Bar（4 项数据叠加卡片）
3. 物流速度 + 物流商 + 平台集成 Logo
4. How It Works（6 步流程卡片）
5. 对比表（WegoFulfill vs AliExpress，7 行）
6. Core Services（6 个服务卡片）
7. Every Parcel is A Promise（图文拆分）
8. FAQ（4 个手风琴）
9. Free Resources（3 张资源卡片）
10. InquiryForm（询盘表单）

全部使用 Astro CSS 类：`.section`、`.section-alt`、`.section-title`、`.container`、`.grid-3`、`.card`、`.btn`、`.btn-primary`

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

## 添加新内容

在对应 `src/data/*.ts` 文件中添加条目，重新构建即可自动生成页面。

## 部署

- 静态输出 `dist/` 部署到 **Vercel** 或 **Cloudflare Pages**
- 无服务器、无数据库、零维护
