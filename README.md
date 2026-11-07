# Alavala Ram Akhil — Developer Portfolio

A high-performance, minimalist personal portfolio and technical blog tailored for **Alavala Ram Akhil**, inspired by and modeled after the aesthetic of **[dheerajakula.dev](https://dheerajakula.dev/)**.

Built with modern semantic HTML5, pure CSS variables, and vanilla JavaScript—delivering zero external dependencies, sub-millisecond load times, and instantaneous browser rendering.

---

## ⚡ Quick Start

### 1. View Directly in Any Browser
No `npm`, `node`, `python`, or build step required!
Simply navigate to this folder and double-click:
```text
C:\Users\ASUS\.gemini\antigravity\scratch\dheerajakula-portfolio\index.html
```
or open it in Google Chrome, Microsoft Edge, Firefox, or Brave.

### 2. (Optional) Run with Local HTTP Server
```powershell
# Using Python (if installed)
python -m http.server 3000

# Or using Node / npx (if installed)
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```text
dheerajakula-portfolio/
├── index.html        # Main semantic markup, SEO, and accessible layout
├── styles.css        # Minimalist dark/light mode design system & typography
├── site-data.js      # Central configuration file for all bio, experience, projects, and articles
├── app.js            # Reactive rendering, theme toggle, Cmd+K palette, article reader modal
└── README.md         # Documentation & deployment guide
```

---

## 🎨 Key Features

1. **Obsidian Dark & Clean Light Themes**
   - Seamless toggling between an obsidian dark theme (`#0a0a0d`) and crisp light theme.
   - Persistent theme state saved across browser sessions in `localStorage`.
2. **Command Palette (`Cmd+K` / `Ctrl+K`)**
   - Interactive search modal supporting quick jumps to sections, projects, deep-dive articles, and external profiles.
3. **Interactive Article & Project Drawer**
   - Click on any featured article to read full formatted articles with code blocks inside an elegant reading modal.
4. **Project Tag Filtering**
   - Filter showcased projects in real time across tags: `All`, `Web Development`, `Software Engineering`, `Creative Tech`, and `Developer Tools`.
5. **One-Click Email Copying & Interactive Toasts**
   - Click the "Copy Email" button to immediately copy `akhilalavala50@gmail.com` with animated toast feedback.
6. **Zero Dependencies**
   - No framework build steps, no node_modules, no webpack/vite lock-in.

---

## 🛠️ Making Future Edits

All content is cleanly organized in `site-data.js`. Whenever you want to add a new project, experience, or article, just edit [**`site-data.js`**](file:///C:/Users/ASUS/.gemini/antigravity/scratch/dheerajakula-portfolio/site-data.js) and reload your browser!

---

## 🚀 Free Deployment Guide

### GitHub Pages (Recommended)
1. Push this folder to a GitHub repository (`github.com/akhilalavala50-alt/portfolio`).
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, set Source to `Deploy from a branch` and select `main` / `root`.
4. Your site will be live at `https://akhilalavala50-alt.github.io/portfolio` in seconds!

### Vercel / Netlify
1. Drag and drop the `dheerajakula-portfolio` folder directly into [Vercel](https://vercel.com) or [Netlify Drop](https://app.netlify.com/drop).
2. It will deploy instantly with zero configuration.
