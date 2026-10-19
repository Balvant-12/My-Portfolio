# Balvant Chaudhary – Developer Portfolio

A complete, responsive, production-ready personal portfolio website built with **HTML5, CSS3, and vanilla JavaScript**. No frameworks, no build steps, no backend.

## 📁 Project Structure

```
my-portfolio/
├── index.html        # Main HTML (all sections)
├── style.css         # Design system + all styles
├── script.js         # Data + all interactions
├── README.md
└── assets/
    ├── Resume.pdf    ← Place your PDF here
    └── images/       ← Project screenshots go here
```

## 🚀 Run Locally

No build step required. Three options:

### Option 1 – VS Code Live Server (recommended)
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

### Option 2 – Python HTTP server
```bash
python -m http.server 8080
# Open http://localhost:8080
```

### Option 3 – Node.js `serve`
```bash
npx serve .
# or: npm install -g serve && serve .
```

## 🌐 Deploy to GitHub Pages

1. **Create a GitHub repository** named `my-portfolio` (or any name you like).
2. **Push all files** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/Balvant-12/my-portfolio.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repository.
4. Under **Source**, select `Deploy from a branch` → branch: `main` → folder: `/ (root)`.
5. Click **Save**. Your site will be live at:
   ```
   https://Balvant-12.github.io/my-portfolio/
   ```

> ✅ All asset paths are relative, so the site works on GitHub Pages without modification.

## ✏️ How to Update Content

### Update your Resume PDF
Replace `assets/Resume.pdf` with your new file (keep the same filename), or update the `href` in `index.html` and `script.js`.

### Add a new project
Open `script.js` and add a new object to the `PROJECTS` array:

```js
{
  id: "project-2",
  number: "02",
  title: "Your Project Name",
  description: "Short description.",
  tags: ["React", "Node.js"],
  features: ["Feature 1", "Feature 2"],
  githubUrl: "https://github.com/Balvant-12/project-name",
  liveUrl: null,               // or a live URL string
  useIllustration: false,      // false = use an image
  imagePath: "assets/images/project-2.png",
}
```

### Update Competitive Programming stats
Open `script.js` and edit the `CP_PROFILES` array — ratings, problem counts, and contest counts are all there.

### Update Achievements
Open `script.js` and edit the `ACHIEVEMENTS` array.

### Update Profile Links
Search for `#` placeholder URLs in `script.js` and replace with your real profile links:
- CodeChef profile URL (look for `id: "codechef"`)
- AtCoder profile URL (look for `id: "atcoder"`)

## 🎨 Design System

| Token | Value |
|-------|-------|
| Accent | `hsl(221, 83%, 63%)` |
| Violet | `hsl(258, 75%, 65%)` |
| Font | Inter + JetBrains Mono |
| Dark bg | `hsl(222, 22%, 8%)` |
| Radius | 6px / 12px / 18px / 24px |

## ♿ Accessibility

- Semantic HTML5 elements throughout
- ARIA labels on all interactive elements
- Visible focus states for keyboard navigation
- Sufficient color contrast on both themes
- `prefers-reduced-motion` respected

## 📋 Placeholders to Fill In

| Item | Location | Status |
|------|----------|--------|
| LinkedIn URL | `index.html` – multiple links | ⚠️ Placeholder |
| CodeChef profile URL | `script.js` → `CP_PROFILES` | ⚠️ Placeholder |
| AtCoder profile URL | `script.js` → `CP_PROFILES` | ⚠️ Placeholder |
| MediKiosk GitHub URL | `script.js` → `PROJECTS` | ⚠️ Placeholder |
| MediKiosk Live Demo | `script.js` → `PROJECTS` | ⚠️ Placeholder |
| Open Graph image | `index.html` `<meta>` tags | Optional |

---

*Built with ♥ · HTML · CSS · JavaScript*