# WegoFulfill Site

Astro 静态站点，复刻 [wegofulfill.com](https://wegofulfill.com)。

## 快速启动

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # 输出到 dist/
```

## 技术栈

- **Astro 4** — 静态生成，输出纯 HTML
- **Scoped CSS** — 组件级样式，无 CSS 框架
- **TypeScript** — 内容数据 (`src/data/*.ts`)
- **JSON-LD** — 结构化数据 (Organization / Article / FAQ / HowTo)

## 响应式导航

- **桌面端** (>900px)：Logo（左）| Nav（中）| "Get a Quote"（右）
- **移动端** (≤900px)：☰（左）| Logo（居中）| "Quote"（右）
- 移动端导航为下拉展开式

## 全局组件

- **Header.astro** — 响应式导航栏
- **Footer.astro** — 页脚 + 政策链接
- **InquiryForm.astro** — 询盘表单
- **BaseLayout.astro** — SEO meta + JSON-LD + WhatsApp 浮动按钮 (#25D366)

## CSS 变量

| 变量 | 值 | 用途 |
|---|---|---|
| `--color-primary` | `#2563eb` | 主色 |
| `--color-primary-dark` | `#1d4ed8` | 深主色 |
| `--color-bg-dark` | `#242a56` | 深色背景 |
| `--color-text` | `#393a56` | 正文 |
| `--color-text-light` | `#64748b` | 辅助文字 |

## 添加内容

编辑 `src/data/*.ts` → `git push` → Vercel 自动部署

## 部署

- **GitHub**: https://github.com/geemike/wegofulfill
- **Vercel**: https://wegofulfill.vercel.app
- 静态输出，零服务器，零维护