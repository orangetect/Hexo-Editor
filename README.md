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
