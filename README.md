## Lazy Addie Utilities

A tiny, fast, single‑page website with useful everyday tools. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

### Preview

Add screenshots to `docs/` for GitHub to render them here. Suggested filenames:

- `docs/preview-dark.png` (dark mode)
- `docs/preview-light.png` (light mode)

If these files exist, they will appear below:

![Dark mode preview](docs/preview-dark.png)
![Light mode preview](docs/preview-light.png)

Tip: In your browser, take screenshots of the page (one in dark, one in light), save them to `docs/` with the names above, commit, and push.

### Features

- **Theme toggle with persistence**: Remembers your preference in `localStorage`, reacts to system changes.
- **SecurePass password generator**: Length 4–128, choose lowercase/UPPERCASE/numbers/symbols, copy to clipboard.
- **Quick tools**:
  - Say Hello and Show Time status area with copy button
  - Temperature converter (C ↔ F)
  - Word and character counter
  - UUID v4 generator with copy
  - Base64 encode/decode (UTF‑8 safe) with copy
  - URL encode/decode with copy
  - SHA‑256 hasher with copy
  - Tip calculator (per‑person split)
- **Accessible by default**: Landmarks, labels, `aria-*`, focus styles, high contrast.
- **Works offline locally**: Just open the file — no server required.

### Quick start

Open `index.html` directly in your browser:

```bash
# Linux/macOS
xdg-open index.html || open index.html
```

Or serve locally for nice URLs and clipboard permissions:

```bash
python3 -m http.server 5173
# then visit http://localhost:5173
```

### Project structure

```text
.
├── index.html            # App markup and sections
├── src/
│   ├── css/
│   │   └── style.css     # Dark/Light theme, layout, components
│   └── javascript/
│       └── main.js       # All interactive tools and logic
└── docs/                 # Place screenshots here (preview-*.png)
```

### Implementation notes

- Theme toggle switches the `light` class on `<body>` and stores `theme` in `localStorage`.
- SecurePass ensures at least one character from each selected set and shuffles the result.
- Base64 uses `TextEncoder`/`TextDecoder` for UTF‑8 safety.
- SHA‑256 uses `crypto.subtle.digest('SHA-256', ...)` and hex encodes the result.
- Clipboard actions fall back gracefully if permissions are denied.

### Keyboard and accessibility

- All interactive controls are focusable with visible focus rings.
- Inputs and buttons have associated labels (`label`/`aria-*`).
- Status messages use `role="status"` and `aria-live="polite"`.

### Customization

- Edit colors via CSS custom properties in `:root` and `.light`.
- Add or remove tools by duplicating a `.tile` in `index.html` and wiring events in `src/javascript/main.js`.


### License

MIT — do whatever you like, just keep the license and attribution.


