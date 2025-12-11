<p align="center">
  <a href="README.md">🇨🇳 简体中文</a> ·
  <a href="README-EN.md">🇺🇸 English</a>
</p>

# Hexo Editor

> 📌 一个专为 Hexo 博客作者打造的本地 Markdown 编辑器 + Hexo front-matter 可视化设置 + 一键 Hexo 操作（clean / g / s / d）。

支持 **Markdown 实时预览、MathJax、Mermaid、代码高亮、图片插入、自定义 front-matter 字段、自定义背景 & 主题** 等功能。  
基于 **Electron + HTML + JS**，可打包为 **Windows .exe** 运行。

---

## 🌟 功能特性

### ✍️ Markdown 编辑 & 实时预览
- 支持完整 Markdown 语法
- 代码高亮（Highlight.js）
- 数学公式（MathJax）
- 流程图 / 序列图等（Mermaid）
- 插入本地图片 / 网络图片
- 文字颜色标记（`<span style="color:...">`）
- 自动保存内容（LocalStorage）

---

### 🧾 Hexo Front-matter 可视化编辑

内置字段：

- `title`
- `slug`
- `date`
- `tags`
- `categories`
- `excerpt`

并支持 **自定义 front-matter 字段**：  
在“自定义 Front-matter”输入框中按行填写：

```yaml
top: true
banner: /img/banner.jpg
keywords: Hexo, Markdown, Editor
toc: true
会被原样追加到 front-matter 里，兼容各种 Hexo 主题。

🧰 一键 Hexo 操作（Electron 版本）
配置好 Hexo 目录后，可一键执行：

hexo clean

hexo g

hexo s

hexo d

一键导出文章到 source/_posts

💾 文件导出
导出为 .md（带完整 front-matter）

导出为 .html（包含渲染后的内容）

支持自定义输出目录（Electron 版本）

🖼 界面预览
你可以将实际截图保存为 screenshot1.png / screenshot2.png 放在仓库根目录

text
复制代码
📷 Screenshot 1 – 编辑 + 预览界面
📷 Screenshot 2 – front-matter 设置面板
🚀 本地运行
确保已安装 Node.js，然后：

bash
复制代码
git clone https://github.com/orangetect/Hexo-Editor.git
cd Hexo-Editor

# 安装依赖
npm install

# 开发调试
npm run start
📦 打包为 Windows EXE
bash
复制代码
npm run dist
打包完成后，安装包 / 可执行文件位于：

text
复制代码
dist/
你可以上传到 GitHub Releases 分发给其他用户。

📁 项目结构
text
复制代码
Hexo-Editor/
├── index.html          # 主界面（编辑器 + 预览）
├── main.js             # Electron 主进程
├── preload.js          # 与前端交互的桥梁
├── package.json
├── dist/               # 打包输出目录
├── README.md           # 中文说明
└── README-EN.md        # 英文说明
📚 自定义 front-matter 示例
完整示例：

yaml
复制代码
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
🧠 常见问题 FAQ
🔹 Hexo 报 YAMLException：a multiline key may not be an implicit key
原因通常是 front-matter 中出现了单独一行的文本，不是 key: value 格式。
请确保“自定义 front-matter”中的每一行都是 YAML 合法语法，例如：

✅ 正确：

yaml
复制代码
top: true
banner: /img/banner.jpg
❌ 错误：

yaml
复制代码
这是错误写法
top true
📄 License
MIT © orangetect

如果觉得好用，欢迎 ⭐ Star 支持一下！
