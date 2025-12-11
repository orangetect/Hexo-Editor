<p align="center">
  <a href="README.md">🇨🇳 简体中文</a> ·
  <a href="README-EN.md">🇺🇸 English</a>
</p>

<h1 align="center">Hexo Editor</h1>

<p align="center">
  <!-- Badges -->
  <img src="https://img.shields.io/badge/platform-Windows-blue.svg" />
  <img src="https://img.shields.io/badge/build-Electron-green.svg" />
  <img src="https://img.shields.io/badge/markdown-supported-brightgreen.svg" />
  <img src="https://img.shields.io/github/license/yourname/Hexo-Editor.svg" />
  <img src="https://img.shields.io/github/stars/yourname/Hexo-Editor.svg?style=social" />
</p>

> A desktop Markdown editor specifically designed for **Hexo bloggers**.  
> Supports real-time Markdown preview, visual front-matter editing, one-click Hexo commands, article export, custom fields, images, themes, and more.  
> Built with **Electron + HTML + JavaScript**, and can be packaged as a Windows desktop application.

---

## ✨ Features

### 📝 Markdown Editing & Live Preview
- Full Markdown syntax support  
- Code highlighting (Highlight.js)  
- Math formulas via MathJax  
- Flowcharts / sequence diagrams via Mermaid  
- Insert local or remote images  
- Text color styling with HTML `<span>`  
- Auto-save via LocalStorage  

---

### 🔖 Visual Front-matter Editing

Built-in fields:

- `title`
- `slug`
- `date`
- `tags`
- `categories`
- `excerpt`

Supports **custom front-matter fields** simply by typing one key-value pair per line:

```yaml
top: true
banner: /img/banner.jpg
keywords: Hexo, Markdown, Editor
toc: true
```

All custom fields will be **automatically appended** to the front-matter.

---

### ⚙️ One-click Hexo Commands (Electron Desktop Version)

After setting the Hexo directory, you can run:

- `hexo clean`
- `hexo g`
- `hexo s`
- `hexo d`
- Export articles directly into `source/_posts`

---

### 💾 Export Options

- Export `.md` (with complete front-matter)  
- Export `.html` (with fully rendered content)  
- Custom output directory (Electron version)

---

## 🖼 Screenshots

Place real screenshots named as:

```
screenshot1.png
screenshot2.png
```

Display (example):

```
📷 Screenshot 1 – Editor + Preview  
📷 Screenshot 2 – Front-matter Panel
```

---

## 🚀 Development

```bash
git clone https://github.com/yourname/Hexo-Editor.git
cd Hexo-Editor

npm install
npm run start
```

---

## 📦 Build Windows EXE

```bash
npm run dist
```

Output directory:

```
dist/
```

---

## 📁 Project Structure

```text
Hexo-Editor/
├── index.html          # Main UI (Editor + Preview)
├── main.js             # Electron main process
├── preload.js          # Bridge between renderer and main
├── package.json
├── dist/               # Built output
├── README.md           # Chinese documentation
└── README-EN.md        # English documentation
```

---

## 📚 Example Front-matter

```yaml
---
title: Writing Blog Posts with Hexo Editor
date: 2025-01-01 12:00:00
tags:
  - Hexo
  - Editor
categories:
  - Tools
excerpt: "A Markdown editor designed specifically for Hexo bloggers."

top: true
banner: /img/banner.jpg
keywords: Hexo, Markdown, Editor
toc: true
comment: true
---
```

---

## 🧠 FAQ

### 🔹 YAMLException: `a multiline key may not be an implicit key`

This error usually occurs when a line in front-matter is **not in valid `key: value`** YAML format.

Correct:

```yaml
top: true
banner: /img/banner.jpg
```

Wrong:

```yaml
this is invalid
top true
```

Ensure every custom line is legal YAML.

---

## 📄 License

MIT © yourname

If you find this project helpful, please consider giving it a ⭐ on GitHub!

