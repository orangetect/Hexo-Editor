<p align="center">
  <a href="README.md">🇨🇳 简体中文</a> ·
  <a href="README-EN.md">🇺🇸 English</a>
</p>

# Hexo Editor

> 📌 一个专为 Hexo 博客作者打造的本地 Markdown 编辑器，支持 Hexo front-matter 可视化、实时预览、Hexo 一键命令、文章导出等功能。  
> 基于 **Electron + HTML + JavaScript** 构建，可打包为 Windows 桌面应用。

---

## 🌟 功能特性

### ✍️ Markdown 编辑与实时预览
- 完整 Markdown 语法支持  
- 代码高亮（Highlight.js）  
- 数学公式（MathJax）  
- 流程图 / 时序图（Mermaid）  
- 插入本地或在线图片  
- 文本颜色标记（`<span style="color:...">`）  
- 自动保存到 LocalStorage  

---

### 🧾 Front-matter 可视化编辑

内置字段包括：

- `title`
- `slug`
- `date`
- `tags`
- `categories`
- `excerpt`

支持 **自定义 Front-matter 字段**：  
只需在输入框中按行填写即可：

```yaml
top: true
banner: /img/banner.jpg
keywords: Hexo, Markdown, Editor
toc: true
```

所有自定义字段都会自动追加到 front-matter。

---

### ⚙️ 一键 Hexo 操作（Electron 桌面版）

配置 Hexo 目录后即可运行：

- `hexo clean`
- `hexo g`
- `hexo s`
- `hexo d`
- 一键导出文章到 `source/_posts`

---

### 💾 多格式导出

- 导出 `.md`（带完整 front-matter）
- 导出 `.html`（包含渲染后的内容）
- 支持自定义输出目录（Electron 桌面版）

---

## 🖼 界面截图

（可将真实截图命名为 `screenshot1.png`、`screenshot2.png`，放在仓库根目录）

```
📷 Screenshot 1 – 编辑器 + 预览区  
📷 Screenshot 2 – Front-matter 管理界面
```

---

## 🚀 本地开发运行

```bash
git clone https://github.com/yourname/Hexo-Editor.git
cd Hexo-Editor

npm install
npm run start
```

---

## 📦 打包为 Windows EXE

```bash
npm run dist
```

打包后的文件将输出到：

```
dist/
```

---

## 📁 项目结构

```text
Hexo-Editor/
├── index.html          # 主界面（编辑器 + 预览）
├── main.js             # Electron 主进程
├── preload.js          # 前端与主进程通信的桥梁
├── package.json
├── dist/               # 打包输出目录
├── README.md           # 中文说明
└── README-EN.md        # 英文说明
```

---

## 📚 Front-matter 示例

```yaml
---
title: 使用 Hexo Editor 写博文
date: 2025-01-01 12:00:00
tags:
  - Hexo
  - Editor
categories:
  - 工具
excerpt: "一个专为 Hexo 打造的 Markdown 编辑器。"

top: true
banner: /img/banner.jpg
keywords: Hexo, Markdown, Editor
toc: true
comment: true
---
```

---

## 🧠 常见问题 FAQ

### 🔹 YAMLException：`a multiline key may not be an implicit key`

通常是因为 front-matter 中出现了非 `key: value` 格式的内容。

**正确写法：**

```yaml
top: true
banner: /img/banner.jpg
```

**错误写法：**

```yaml
这是不合法的 YAML
top true
```

请确保自定义字段每一行都是合法 YAML。

---

## 📄 License

MIT © yourname

如果觉得好用，欢迎点个 ⭐ 支持一下！

