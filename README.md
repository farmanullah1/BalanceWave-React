# BalanceWave 〰️

> Premium SIM balance & tax calculator for Pakistan — built for the 2026 tax regulations.

**Live Demo:** [https://farmanullah1.github.io/BalanceWave-React/](https://farmanullah1.github.io/BalanceWave-React/)  
**Portfolio:** [https://farmanullah1.github.io/My-Portfolio/](https://farmanullah1.github.io/My-Portfolio/)

---

## ✨ Features

- **⚡ Precision Calculation**: Updated for the 2026 Pakistan 15% Withholding Tax (WHT) inclusive rules.
- **🎯 Reverse Mode**: Enter your desired net balance, and we'll tell you exactly how much to recharge.
- **📡 Carrier Auto-detect**: Intelligent detection of Jazz, Zong, Telenor, Ufone, Onic, and SCOm prefixes.
- **🎨 Dynamic Skinning**: 4 premium color themes (Ocean, Sunset, Forest, Violet) with independent Dark Mode.
- **📱 Mobile Optimized**: Glassmorphic UI with haptic feedback and responsive layouts for all devices.
- **📊 History Tracking**: Persistent local storage for your last 8 calculations.
- **📋 One-Tap Export**: Smart copy-to-clipboard with formatted breakdown for easy sharing.

---

## 🧮 2026 Tax Rules

Following the latest telecom regulations in Pakistan, taxes are now calculated as inclusive of the net balance:

```text
Forward:  Net = Amount / 1.15
Reverse:  Recharge Needed = Net × 1.15
```

*Rate: **15% WHT** (Withholding Tax) applied on the net balance.*

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern CSS (Variables, Grid, Flexbox)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Clone
git clone https://github.com/farmanullah1/BalanceWave-React.git
cd BalanceWave-React

# Install
npm install

# Dev
npm run dev
```

---

## 🏗️ Build & Deploy

```bash
# Production Build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📄 License

MIT — feel free to use, modify, and distribute.

---

Built with ❤️ by [Farmanullah Ansari](https://farmanullah1.github.io/My-Portfolio/)
