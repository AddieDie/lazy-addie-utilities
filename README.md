# Lazy Addie Utilities

A fast, feature-rich single-page web application with essential everyday tools. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies. Works completely offline.

![Lazy Addie Utilities](https://img.shields.io/badge/version-2.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![No Dependencies](https://img.shields.io/badge/dependencies-none-success)

## ✨ Features

### 🎨 User Experience
- **Dark/Light Theme Toggle** - Persistent theme preference with system preference detection
- **Toast Notifications** - Beautiful, non-intrusive feedback for all actions
- **Keyboard Shortcuts** - Quick theme toggle with `Ctrl/Cmd + K`
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Polished transitions and hover effects throughout
- **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

### 🔐 SecurePass Password Generator
- Customizable length (4-128 characters)
- Character set selection (lowercase, uppercase, numbers, symbols)
- Auto-copy option for quick password generation
- Ensures at least one character from each selected set
- Secure random generation with shuffling

### 🛠️ Utility Tools

#### Text & Encoding Tools
- **Word Counter** - Real-time word, character, paragraph, sentence count with reading time estimate
- **Text Case Converter** - Convert to UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case
- **Base64 Encode/Decode** - UTF-8 safe encoding and decoding
- **URL Encode/Decode** - Escape and unescape URLs
- **SHA-256 Hasher** - Generate cryptographic hashes

#### Data Format Tools
- **JSON Formatter** - Format, minify, and validate JSON with error messages
- **UUID Generator** - Generate RFC 4122 compliant UUID v4
- **Timestamp Converter** - Convert between Unix timestamps and human-readable dates

#### Visual Tools
- **Color Picker & Converter** - Interactive color picker with HEX, RGB, and HSL conversion
- **QR Code Generator** - Generate QR codes from text or URLs with download option

#### Conversion Tools
- **Temperature Converter** - Real-time conversion between Celsius and Fahrenheit
- **Tip Calculator** - Calculate tip and split bills per person

#### Status & Feedback
- **Status Display** - Show messages with copy functionality
- **Contact Form** - Quick email draft generation

## 🚀 Quick Start

### Option 1: Direct File Access
Simply open `index.html` in your browser:

```bash
# Linux
xdg-open index.html

# macOS
open index.html

# Windows
start index.html
```

### Option 2: Local Server (Recommended)
For better clipboard permissions and URL handling, use a local server:

```bash
# Python 3
python3 -m http.server 5173

# Node.js (with http-server)
npx http-server -p 5173

# PHP
php -S localhost:5173
```

Then visit `http://localhost:5173` in your browser.

## 📁 Project Structure

```
lazy-addie-utilities/
├── index.html              # Main HTML structure
├── README.md               # This file
├── LICENSE                 # MIT License
└── src/
    ├── css/
    │   └── style.css       # All styles (themes, layout, components)
    └── javascript/
        └── main.js         # All interactive functionality
```

## 🎯 Key Features Explained

### Theme System
- Uses CSS custom properties for easy theming
- Persists user preference in `localStorage`
- Automatically detects system preference on first visit
- Smooth transitions between themes

### Toast Notification System
- Non-blocking notifications for user feedback
- Three types: success (green), error (red), info (blue)
- Auto-dismiss after 3 seconds
- Accessible with `aria-live` regions

### Password Generation
- Cryptographically secure random generation
- Guarantees at least one character from each selected character set
- Fisher-Yates shuffle algorithm for randomness
- Auto-copy option for seamless workflow

### Color Picker
- Native browser color picker integration
- Real-time HEX input validation and formatting
- Automatic conversion between HEX, RGB, and HSL
- Visual color preview with gradient overlay
- Individual copy buttons for each format

### JSON Tools
- Full JSON validation with detailed error messages
- Pretty printing with 2-space indentation
- Minification for production use
- Syntax highlighting ready (monospace font)

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + K` - Toggle dark/light theme
- `Escape` - Clear focus from active element

## 🎨 Customization

### Changing Colors
Edit CSS custom properties in `src/css/style.css`:

```css
:root {
  --accent: #4f46e5;      /* Primary accent color */
  --accent-2: #22c55e;    /* Secondary accent color */
  --bg: #0b1020;          /* Background color */
  /* ... more variables */
}
```

### Adding New Tools
1. Add a new `.tile` section in `index.html`
2. Wire up event listeners in `src/javascript/main.js`
3. Style as needed in `src/css/style.css`

### Modifying Layout
The grid layout uses CSS Grid with `repeat(auto-fit, minmax(240px, 1fr))`. Adjust the `minmax` values to change tile sizes.

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES6+ JavaScript support
- Uses Web Crypto API for secure operations
- Clipboard API for copy functionality

### Security
- All cryptographic operations use browser-native APIs
- No external dependencies or CDN resources
- Works completely offline
- No data is sent to external servers

### Performance
- Zero build step - instant loading
- Minimal JavaScript footprint
- Efficient DOM manipulation
- CSS transitions for smooth animations

## 📝 Implementation Notes

- **Theme Toggle**: Switches `light` class on `<body>`, stores preference in `localStorage`
- **Password Generator**: Uses `crypto.getRandomValues()` for secure randomness
- **Base64**: Uses `TextEncoder`/`TextDecoder` for UTF-8 safety
- **SHA-256**: Uses `crypto.subtle.digest()` for hashing
- **QR Codes**: Canvas-based generation (can be replaced with a library for production)
- **Color Conversion**: Manual RGB to HSL conversion algorithm
- **Toast System**: Pure JavaScript DOM manipulation with CSS animations

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles throughout
- Keyboard navigation support
- Focus indicators on all interactive elements
- Screen reader friendly
- High contrast color schemes
- Proper heading hierarchy

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly button sizes
- Optimized spacing for small screens
- Sticky header for easy navigation

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - feel free to use this project for any purpose, commercial or personal. Just keep the license and attribution.

## 🙏 Acknowledgments

Built with vanilla web technologies - no frameworks required. Designed for simplicity, speed, and offline functionality.

---

**Made with ❤️ for lazy developers who want powerful tools without the bloat.**
