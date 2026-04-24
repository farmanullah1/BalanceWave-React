# BalanceWave 〰️

> Smart SIM balance calculator for Pakistan — beautiful, fast, offline-capable.

**Live Demo:** https://farmanullah1.github.io/BalanceWave-React/  
**Portfolio:** https://farmanullah1.github.io/My-Portfolio/

---

## ✨ Features

| Feature | Details |
|---|---|
| **Forward Calculation** | Enter recharge amount → get net balance after 13.5% FED tax |
| **Reverse Calculation** | Enter desired balance → get how much to recharge |
| **Carrier Auto-detection** | Detects Jazz, Zong, Telenor, Ufone from number prefix |
| **4 Color Themes** | Ocean (default), Sunset, Forest, Violet |
| **Dark / Light Mode** | Independent toggle, remembered via localStorage |
| **Calculation History** | Last 8 calculations stored in localStorage |
| **Copy to Clipboard** | One-tap copy with haptic feedback on mobile |
| **Skeleton Loader** | Smooth UX with loading animation |
| **Animated Waves** | Background blobs + animated wave ribbon |
| **Fully Responsive** | Mobile, tablet, desktop |

---

## 🧮 Tax Formula

```
Forward:  Net Balance    = Recharge Amount × (1 − 0.135)
Reverse:  Recharge Needed = Desired Balance / (1 − 0.135) = Desired Balance / 0.865
```

Tax rate: **13.5% FED (Federal Excise Duty)** — standard Pakistan telecom tax.

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

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🏗️ Build

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

---

## 🚢 Deploy to GitHub Pages

1. Make sure `vite.config.js` has `base: '/BalanceWave-React/'`
2. Make sure `package.json` has `"homepage": "https://farmanullah1.github.io/BalanceWave-React"`
3. Run:

```bash
npm run deploy
```

This runs `npm run build` then uses `gh-pages` to push `dist/` to the `gh-pages` branch.

---

## 📁 Project Structure

```
balancewave/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Root component, state, history
    ├── App.css           # Layout, glass card, blobs, history
    ├── index.css         # CSS variables (4 skins + dark), keyframes
    ├── utils/
    │   └── carriers.js   # Carrier prefix detection
    └── components/
        ├── Navbar.jsx / .css       # Logo, portfolio link, skin & theme toggles
        ├── HeroCard.jsx / .css     # Title, subtitle, animated bars
        ├── CalculatorForm.jsx/.css # Input form, mode toggle
        └── ResultCard.jsx / .css  # Skeleton, empty state, result breakdown
```

---

## 🎨 Themes

| Skin | Colors |
|---|---|
| Ocean (default) | Cyan `#00B4D8` → Purple `#7b2ff7` |
| Sunset | Coral `#F4845F` → Magenta `#F72585` |
| Forest | Mint `#06D6A0` → Teal `#0077B6` |
| Violet | Purple `#7b2ff7` → Pink `#F72585` |

Each skin has a paired **dark mode** variant (toggled independently via the 🌙 button).

---

## 🛠️ Customisation

- **Tax rate:** Change `FED_TAX_RATE = 0.135` in `CalculatorForm.jsx`
- **History size:** Change `MAX_HISTORY = 8` in `App.jsx`
- **New skin:** Add a `[data-skin="myskin"]` block in `index.css` and a new entry in `SKINS` array in `Navbar.jsx`

---

## 📄 License

MIT — free to use, modify, and distribute.

---

Built with ❤️ by [Farmanullah](https://farmanullah1.github.io/My-Portfolio/)
