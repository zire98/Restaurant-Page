# 🍴 Restaurante Page  

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)  
![Webpack](https://img.shields.io/badge/Webpack-5-blue)  
![CSS3](https://img.shields.io/badge/CSS3-styles-blueviolet)  
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-brightgreen)  

A simple, modular, and responsive restaurant website built with **vanilla JavaScript**, **Webpack**, and **dynamic DOM manipulation**.  
This project demonstrates how to structure, organize, and render a multi-page layout without a frontend framework by simulating API calls with JSON data.  

🔗 **Live Demo**: [GitHub Pages Deployment](https://zire98.github.io/Restaurant-Page/)  


---

## 🚀 Features  

- **Dynamic Page Rendering** – all pages (`Home`, `Menu`, `About`) are generated and injected into the DOM dynamically.  
- **JSON Data Simulation** –  
  - `about.json` → renders the "About Us" section.  
  - `menu.json` → populates the restaurant menu dynamically.  
- **Reusable DOM Utilities** – utility functions (e.g., `createEl`) abstract repetitive DOM logic for cleaner code.  
- **Modular Structure** – pages separated into independent modules.  
- **Modern Workflow** – Webpack bundling, NPM scripts, GitHub Pages deployment.  
- **Responsive Design** – styled with a clean `style.css`.  

---

## 📂 Project Structure  
```
Restaurante-Page/
├── dist/ # Production build (deployed to GitHub Pages)
├── src/
│ ├── assets/
│ │ ├── data/
│ │ │ ├── about.json
│ │ │ └── menu.json
│ │ └── images/ # Images used throughout the site
│ ├── pages/
│ │ ├── home.js
│ │ ├── menu.js
│ │ └── about.js
│ ├── utils/
│ │ └── dom.js # Utility functions (createEl, clear DOM, build menu items)
│ ├── index.js # Entry point: imports modules, manages navigation
│ ├── style.css # Global styles
│ └── template.html # Base HTML structure (header, nav, footer, content container)
├── .gitignore # Ignores node_modules and dist/
├── package.json
├── package-lock.json
├── webpack.config.js
└── README.md
```

---

## 🛠️ Tools & Technologies  

- **JavaScript (ES6 Modules)**  
- **Webpack**  
- **NPM**  
- **HTML5 / CSS3**  
- **Git & GitHub Pages**  

---

## 📖 What I Learned  

- **Modular Architecture** → splitting pages into independent modules with `index.js` as the control center.  
- **Dynamic DOM Manipulation** → reusable utilities (`createEl`, clear DOM, render menu items).  
- **Working with JSON** → simulating API responses and rendering structured data.  
- **Webpack & Build Process** → loaders, entry/output config, optimized builds.  
- **Deployment Workflow** → building into `dist/` and deploying to GitHub Pages.  

---

## ⚡ Getting Started  

### Clone the repository  
```bash
git clone https://github.com/zire98/Restaurant-Page.git
cd Restaurante-Page
npm install
npm run start
npm run build
```

---

## Author 

- Made with love zire98.

