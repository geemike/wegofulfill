# WegoFulfill Site

复刻 [wegofulfill.com](https://wegofulfill.com) 的 Astro 静态站点。

## 快速启动

```bash
npm install
npm run dev              # http://localhost:4321/
npm run build            # 输出到 dist/
```

局域网访问：`npx astro dev --port 4321 --host 0.0.0.0`

## 技术栈

- **Astro 4** — 静态站点生成，输出纯 HTML
- **CSS Custom Properties** — 全局主题变量（`src/styles/global.css`）
- **TypeScript 数据文件** — 内容管理（`src/data/`）
- **JSON-LD** — 结构化数据，SEO/GEO 优化

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.astro     # 导航栏（桌面logo居左，移动端☰|logo|Quote）
│   ├── Footer.astro     # 页脚
│   └── InquiryForm.astro # 询盘表单
├── data/                # TypeScript 内容数据
│   ├── products.ts      # 6 个服务
│   ├── guides.ts        # 4 篇指南
│   ├── comparisons.ts   # 3 篇对比
│   ├── case-studies.ts  # 3 篇案例
│   └── posts.ts         # 4 篇博客
├── layouts/
│   └── BaseLayout.astro # 基础布局（SEO meta、JSON-LD、WhatsApp浮动按钮）
├── pages/               # 路由页面
│   ├── index.astro      # 首页（10 个板块）
│   ├── about.astro      # 关于我们（5 行时间线故事 + 团队照片）
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
    ├── five-family.jpg            # Five 全家福（首页+关于）
    ├── five-tibet.jpg             # 西藏之旅
    ├── five-chair.png             # 办公椅创业
    ├── wegofulfill-team.jpg       # 团队照片
    ├── wegofulfill-logo.png       # 站点 Logo
    ├── wegofulfill-logo-blue.png  # 蓝色变体 Logo
    ├── woocommerce-logo.svg       # WooCommerce
    ├── shopify-logo.svg           # Shopify
    ├── tiktok-logo.svg            # TikTok Shop
    ├── amazon-logo.svg            # Amazon
    ├── ebay-logo.svg              # eBay
    ├── yunexpress.svg             # YunExpress
    ├── 4px.svg                    # 4PX
    ├── wanb.svg                   # WanbExpress
    ├── yanwen.svg                 # Yanwen
    ├── dhl.svg                    # DHL
    └── fedex.svg                  # FedEx
```

## 首页板块（index.astro）

1. Hero（渐变背景 + CTA）
2. Stats Bar（No MOQ / 1-2 Days / 5-10 Days / 90 Days）
3. 物流速度 + 物流商Logo + 平台集成Logo
4. How It Works（3 步流程）
5. 对比表（WegoFulfill vs Others，含 Schema 结构化数据）
6. Core Services（6 个服务卡片）
7. Every Parcel is A Promise
8. FAQ（4 个手风琴）
9. Free Resources（3 张资源卡片）
10. InquiryForm（询盘表单）

## 关于页面（about.astro）

- Hero: "From Technology to Supply Chain"
- 5 行时间线故事（2016→2024）+ 真实照片
- 时间线条（7 个年份节点）
- "What This Means for You" 深色区域
- "What Sets Us Apart" 价值卡片
- 仓库介绍 + 数据统计

## 响应式导航

- **桌面端**：Logo（左）| Nav（中）| "Get a Quote"（右）
- **移动端**：☰ 汉堡菜单（左）| Logo（居中）| "Quote"（右）
- 移动端菜单下拉展开全宽

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

BaseLayout 全局加载，右下角固定，绿色 #25D366，点击跳转 `wa.me/8619925247178`。

## 添加新内容

在对应 `src/data/*.ts` 文件中添加条目，重新构建即可自动生成页面。

## 部署

```bash
git add -A && git commit -m "update" && git push
```

- GitHub: https://github.com/geemike/wegofulfill
- Vercel 自动部署（导入 GitHub 仓库即可）
- 静态输出，无服务器、无数据库、零维护