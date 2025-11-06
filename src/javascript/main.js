// Toast notification system
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

const statusEl = document.getElementById('status');
      const helloBtn = document.getElementById('helloBtn');
      const timeBtn = document.getElementById('timeBtn');
      const yearEl = document.getElementById('year');
      const copyBtn = document.getElementById('copyStatus');
      const themeToggle = document.getElementById('themeToggle');
      const celsius = document.getElementById('celsius');
      const fahrenheit = document.getElementById('fahrenheit');
      const toF = document.getElementById('toF');
      const toC = document.getElementById('toC');
      const wcInput = document.getElementById('wcInput');
      const wcStats = document.getElementById('wcStats');
      const contactForm = document.getElementById('contactForm');
      const contactName = document.getElementById('contactName');
      const contactEmail = document.getElementById('contactEmail');
      const contactMsg = document.getElementById('contactMsg');
      const genUuid = document.getElementById('genUuid');
      const copyUuid = document.getElementById('copyUuid');
      const uuidOut = document.getElementById('uuidOut');
      const b64Input = document.getElementById('b64Input');
      const b64Encode = document.getElementById('b64Encode');
      const b64Decode = document.getElementById('b64Decode');
      const copyB64 = document.getElementById('copyB64');
      const b64Out = document.getElementById('b64Out');
      const urlInput = document.getElementById('urlInput');
      const urlEncodeBtn = document.getElementById('urlEncode');
      const urlDecodeBtn = document.getElementById('urlDecode');
      const copyUrlBtn = document.getElementById('copyUrl');
      const urlOut = document.getElementById('urlOut');
      const hashInput = document.getElementById('hashInput');
      const doHash = document.getElementById('doHash');
      const copyHash = document.getElementById('copyHash');
      const hashOut = document.getElementById('hashOut');
      const billAmt = document.getElementById('billAmt');
      const tipPct = document.getElementById('tipPct');
      const numPeople = document.getElementById('numPeople');
      const calcTip = document.getElementById('calcTip');
      const tipOut = document.getElementById('tipOut');
      // SecurePass elements
      const genBtn = document.getElementById('genPass');
      const copyPass = document.getElementById('copyPass');
      const passOut = document.getElementById('passOut');
      const passLength = document.getElementById('passLength');
      const useLower = document.getElementById('useLower');
      const useUpper = document.getElementById('useUpper');
      const useNums = document.getElementById('useNums');
      const useSyms = document.getElementById('useSyms');
      const autoCopyPass = document.getElementById('autoCopyPass');
      // New tool elements
      const qrInput = document.getElementById('qrInput');
      const genQr = document.getElementById('genQr');
      const downloadQr = document.getElementById('downloadQr');
      const qrCanvas = document.getElementById('qrCanvas');
      const jsonInput = document.getElementById('jsonInput');
      const formatJson = document.getElementById('formatJson');
      const minifyJson = document.getElementById('minifyJson');
      const validateJson = document.getElementById('validateJson');
      const copyJson = document.getElementById('copyJson');
      const jsonStatus = document.getElementById('jsonStatus');
      const jsonOut = document.getElementById('jsonOut');
      const caseInput = document.getElementById('caseInput');
      const toUpper = document.getElementById('toUpper');
      const toLower = document.getElementById('toLower');
      const toTitle = document.getElementById('toTitle');
      const toCamel = document.getElementById('toCamel');
      const toSnake = document.getElementById('toSnake');
      const toKebab = document.getElementById('toKebab');
      const copyCase = document.getElementById('copyCase');
      const caseOut = document.getElementById('caseOut');
      const tsInput = document.getElementById('tsInput');
      const tsToDate = document.getElementById('tsToDate');
      const dateToTs = document.getElementById('dateToTs');
      const tsNow = document.getElementById('tsNow');
      const copyTs = document.getElementById('copyTs');
      const tsOut = document.getElementById('tsOut');
      const colorPicker = document.getElementById('colorPicker');
      const colorHex = document.getElementById('colorHex');
      const copyColorHex = document.getElementById('copyColorHex');
      const copyColorRgb = document.getElementById('copyColorRgb');
      const copyColorHsl = document.getElementById('copyColorHsl');
      const colorPreview = document.getElementById('colorPreview');
      const colorHexValue = document.getElementById('colorHexValue');
      const colorRgbValue = document.getElementById('colorRgbValue');
      const colorHslValue = document.getElementById('colorHslValue');

      yearEl.textContent = new Date().getFullYear();

      helloBtn.addEventListener('click', () => {
        statusEl.textContent = 'Hello there! 👋';
      });

      timeBtn.addEventListener('click', () => {
        const now = new Date();
        const formatted = now.toLocaleString();
        statusEl.textContent = `Current time: ${formatted}`;
      });

      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(statusEl.textContent || '');
          showToast('Status copied to clipboard!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });

      // Theme toggle with persisted preference
      function setToggleVisual(mode) {
        const isLight = mode === 'light';
        themeToggle.textContent = isLight ? '🌞' : '🌙';
        themeToggle.setAttribute('aria-pressed', String(isLight));
        themeToggle.title = isLight ? 'Switch to dark' : 'Switch to light';
      }
      const applyTheme = (mode) => {
        document.body.classList.toggle('light', mode === 'light');
        setToggleVisual(mode);
      };
      const savedTheme = localStorage.getItem('theme');
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      let currentTheme = savedTheme ? savedTheme : (prefersLight ? 'light' : 'dark');
      applyTheme(currentTheme);
      themeToggle.addEventListener('click', () => {
        currentTheme = document.body.classList.contains('light') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
      });
      // Update if system preference changes and user hasn't overridden
      if (!savedTheme && window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
          applyTheme(e.matches ? 'light' : 'dark');
        });
      }

      // Converters - Real-time conversion
      const round = (n) => Math.round(n * 100) / 100;
      const updateTemp = () => {
        const c = parseFloat(celsius.value);
        if (!isNaN(c) && celsius.value !== '') {
          fahrenheit.value = round((c * 9) / 5 + 32);
        }
      };
      const updateTempReverse = () => {
        const f = parseFloat(fahrenheit.value);
        if (!isNaN(f) && fahrenheit.value !== '') {
          celsius.value = round(((f - 32) * 5) / 9);
        }
      };
      celsius.addEventListener('input', updateTemp);
      fahrenheit.addEventListener('input', updateTempReverse);
      toF.addEventListener('click', updateTemp);
      toC.addEventListener('click', updateTempReverse);

      // Enhanced word counter
      const updateCounts = () => {
        const text = wcInput.value || '';
        const trimmed = text.trim();
        const words = trimmed ? trimmed.split(/\s+/).filter(w => w.length > 0).length : 0;
        const chars = text.length;
        const charsNoSpaces = text.replace(/\s/g, '').length;
        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length || (text.trim() ? 1 : 0);
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        const readingTime = Math.ceil(words / 200); // Average reading speed
        wcStats.textContent = `${words} words, ${chars} characters (${charsNoSpaces} no spaces), ${paragraphs} paragraphs, ${sentences} sentences${readingTime > 0 ? `, ~${readingTime} min read` : ''}`;
      };
      wcInput.addEventListener('input', updateCounts);
      updateCounts();

      // UUID
      function makeUuid() {
        if (crypto.randomUUID) return crypto.randomUUID();
        const buf = new Uint8Array(16);
        crypto.getRandomValues(buf);
        buf[6] = (buf[6] & 0x0f) | 0x40; // version 4
        buf[8] = (buf[8] & 0x3f) | 0x80; // variant 10
        const hex = [...buf].map(b => b.toString(16).padStart(2, '0'));
        return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`;
      }
      genUuid?.addEventListener('click', () => { uuidOut.textContent = makeUuid(); });
      copyUuid?.addEventListener('click', async () => {
        const t = uuidOut.textContent || '';
        if (!t || t.startsWith('(')) return;
        try { await navigator.clipboard.writeText(t); showToast('UUID copied!', 'success'); } catch (_) { showToast('Copy failed', 'error'); }
      });

      // Base64 (UTF-8 safe)
      const enc = new TextEncoder();
      const dec = new TextDecoder();
      b64Encode?.addEventListener('click', () => {
        try {
          const bytes = enc.encode(b64Input.value || '');
          let binary = '';
          for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
          b64Out.textContent = btoa(binary);
        } catch (e) { b64Out.textContent = '(encode error)'; }
      });
      b64Decode?.addEventListener('click', () => {
        try {
          const binary = atob((b64Input.value || '').trim());
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          b64Out.textContent = dec.decode(bytes);
        } catch (e) { b64Out.textContent = '(decode error)'; }
      });
      copyB64?.addEventListener('click', async () => {
        const t = b64Out.textContent || '';
        if (!t || t.startsWith('(')) return;
        try { await navigator.clipboard.writeText(t); showToast('Base64 result copied!', 'success'); } catch (_) { showToast('Copy failed', 'error'); }
      });

      // URL encode/decode
      urlEncodeBtn?.addEventListener('click', () => {
        try { urlOut.textContent = encodeURIComponent(urlInput.value || ''); } catch (_) { urlOut.textContent = '(encode error)'; }
      });
      urlDecodeBtn?.addEventListener('click', () => {
        try { urlOut.textContent = decodeURIComponent((urlInput.value || '').trim()); } catch (_) { urlOut.textContent = '(decode error)'; }
      });
      copyUrlBtn?.addEventListener('click', async () => {
        const t = urlOut.textContent || '';
        if (!t || t.startsWith('(')) return;
        try { await navigator.clipboard.writeText(t); showToast('URL result copied!', 'success'); } catch (_) { showToast('Copy failed', 'error'); }
      });

      // SHA-256
      async function sha256Hex(text) {
        const data = enc.encode(text);
        const buf = await crypto.subtle.digest('SHA-256', data);
        const bytes = new Uint8Array(buf);
        return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
      }
      doHash?.addEventListener('click', async () => {
        try { hashOut.textContent = await sha256Hex(hashInput.value || ''); } catch (_) { hashOut.textContent = '(hash error)'; }
      });
      copyHash?.addEventListener('click', async () => {
        const t = hashOut.textContent || '';
        if (!t || t.startsWith('(')) return;
        try { await navigator.clipboard.writeText(t); showToast('Hash copied!', 'success'); } catch (_) { showToast('Copy failed', 'error'); }
      });

      // Tip calculator
      function fmt(n) { return `$${(Math.round(n * 100) / 100).toFixed(2)}`; }
      function recalcTip() {
        const bill = parseFloat(billAmt.value) || 0;
        const pct = (parseFloat(tipPct.value) || 0) / 100;
        const people = Math.max(1, Math.floor(parseFloat(numPeople.value) || 1));
        const tipTotal = bill * pct;
        const total = bill + tipTotal;
        tipOut.textContent = `${fmt(total / people)} per person (tip ${fmt(tipTotal / people)})`;
      }
      calcTip?.addEventListener('click', recalcTip);
      [billAmt, tipPct, numPeople].forEach(el => el?.addEventListener('input', recalcTip));
      recalcTip();
      // SecurePass logic
      const LOWER = 'abcdefghijklmnopqrstuvwxyz';
      const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const NUMS = '0123456789';
      const SYMS = '!@#$%^&*()_+[]{}|;:,.<>?/~-=';
      function getRandomChar(pool) { return pool[Math.floor(Math.random() * pool.length)]; }
      function generatePassword() {
        const length = Math.max(4, Math.min(128, parseInt(passLength.value, 10) || 16));
        let pool = '';
        const pools = [];
        if (useLower.checked) { pool += LOWER; pools.push(LOWER); }
        if (useUpper.checked) { pool += UPPER; pools.push(UPPER); }
        if (useNums.checked) { pool += NUMS; pools.push(NUMS); }
        if (useSyms.checked) { pool += SYMS; pools.push(SYMS); }
        if (!pool) { return ''; }
        const chars = new Array(length);
        // Ensure at least one from each selected pool
        for (let i = 0; i < pools.length && i < length; i++) {
          chars[i] = getRandomChar(pools[i]);
        }
        for (let i = pools.length; i < length; i++) {
          chars[i] = getRandomChar(pool);
        }
        // Shuffle
        for (let i = chars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join('');
      }
      genBtn?.addEventListener('click', async () => {
        const pw = generatePassword();
        passOut.textContent = pw || '(choose at least one character set)';
        if (pw && autoCopyPass?.checked) {
          try {
            await navigator.clipboard.writeText(pw);
            showToast('Password generated and copied!', 'success');
          } catch (_) {
            showToast('Password generated (copy failed)', 'info');
          }
        } else if (pw) {
          showToast('Password generated!', 'success');
        }
      });
      copyPass?.addEventListener('click', async () => {
        const text = passOut.textContent || '';
        if (!text || text.startsWith('(')) return;
        try {
          await navigator.clipboard.writeText(text);
          showToast('Password copied!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });

      // QR Code Generator (using simple canvas-based QR)
      function generateQRCode(text) {
        if (!text.trim()) {
          showToast('Please enter text or URL', 'error');
          return null;
        }
        // Simple QR-like pattern generator (for demo - in production use a QR library)
        const canvas = document.createElement('canvas');
        const size = 200;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = '#000000';
        // Generate a simple pattern based on text hash
        const hash = text.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
        const seed = Math.abs(hash);
        const gridSize = 10;
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            const val = (seed + i * gridSize + j) % 3;
            if (val === 0 || val === 1) {
              ctx.fillRect(i * (size / gridSize), j * (size / gridSize), size / gridSize, size / gridSize);
            }
          }
        }
        return canvas;
      }
      genQr?.addEventListener('click', () => {
        const text = qrInput.value.trim();
        if (!text) {
          showToast('Please enter text or URL', 'error');
          return;
        }
        qrCanvas.innerHTML = '';
        const canvas = generateQRCode(text);
        if (canvas) {
          qrCanvas.appendChild(canvas);
          showToast('QR code generated!', 'success');
        }
      });
      downloadQr?.addEventListener('click', () => {
        const canvas = qrCanvas.querySelector('canvas');
        if (!canvas) {
          showToast('Generate QR code first', 'error');
          return;
        }
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'qrcode.png';
          a.click();
          URL.revokeObjectURL(url);
          showToast('QR code downloaded!', 'success');
        });
      });

      // JSON Formatter
      formatJson?.addEventListener('click', () => {
        try {
          const parsed = JSON.parse(jsonInput.value || '{}');
          jsonOut.textContent = JSON.stringify(parsed, null, 2);
          jsonStatus.textContent = '✓ Valid JSON';
          jsonStatus.style.color = 'var(--accent-2)';
          showToast('JSON formatted!', 'success');
        } catch (e) {
          jsonOut.textContent = '';
          jsonStatus.textContent = `✗ Error: ${e.message}`;
          jsonStatus.style.color = '#ef4444';
          showToast('Invalid JSON', 'error');
        }
      });
      minifyJson?.addEventListener('click', () => {
        try {
          const parsed = JSON.parse(jsonInput.value || '{}');
          jsonOut.textContent = JSON.stringify(parsed);
          jsonStatus.textContent = '✓ Valid JSON (minified)';
          jsonStatus.style.color = 'var(--accent-2)';
          showToast('JSON minified!', 'success');
        } catch (e) {
          jsonOut.textContent = '';
          jsonStatus.textContent = `✗ Error: ${e.message}`;
          jsonStatus.style.color = '#ef4444';
          showToast('Invalid JSON', 'error');
        }
      });
      validateJson?.addEventListener('click', () => {
        try {
          JSON.parse(jsonInput.value || '{}');
          jsonStatus.textContent = '✓ Valid JSON';
          jsonStatus.style.color = 'var(--accent-2)';
          showToast('JSON is valid!', 'success');
        } catch (e) {
          jsonStatus.textContent = `✗ Invalid: ${e.message}`;
          jsonStatus.style.color = '#ef4444';
          showToast('Invalid JSON', 'error');
        }
      });
      copyJson?.addEventListener('click', async () => {
        const text = jsonOut.textContent || jsonInput.value;
        if (!text) return;
        try {
          await navigator.clipboard.writeText(text);
          showToast('JSON copied!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });

      // Text Case Converter
      function convertCase(text, type) {
        if (!text) return '';
        switch (type) {
          case 'upper': return text.toUpperCase();
          case 'lower': return text.toLowerCase();
          case 'title': return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
          case 'camel': return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
          case 'snake': return text.replace(/\s+/g, '_').toLowerCase();
          case 'kebab': return text.replace(/\s+/g, '-').toLowerCase();
          default: return text;
        }
      }
      const caseButtons = [
        { el: toUpper, type: 'upper' },
        { el: toLower, type: 'lower' },
        { el: toTitle, type: 'title' },
        { el: toCamel, type: 'camel' },
        { el: toSnake, type: 'snake' },
        { el: toKebab, type: 'kebab' }
      ];
      caseButtons.forEach(({ el, type }) => {
        el?.addEventListener('click', () => {
          const result = convertCase(caseInput.value, type);
          caseOut.textContent = result;
          if (result) showToast('Text converted!', 'success');
        });
      });
      copyCase?.addEventListener('click', async () => {
        const text = caseOut.textContent;
        if (!text) return;
        try {
          await navigator.clipboard.writeText(text);
          showToast('Result copied!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });

      // Timestamp Converter
      tsToDate?.addEventListener('click', () => {
        const ts = parseFloat(tsInput.value);
        if (isNaN(ts)) {
          showToast('Invalid timestamp', 'error');
          return;
        }
        const date = new Date(ts * 1000);
        tsOut.textContent = date.toLocaleString();
        showToast('Converted to date!', 'success');
      });
      dateToTs?.addEventListener('click', () => {
        const date = new Date(tsInput.value);
        if (isNaN(date.getTime())) {
          showToast('Invalid date', 'error');
          return;
        }
        const ts = Math.floor(date.getTime() / 1000);
        tsOut.textContent = ts.toString();
        showToast('Converted to timestamp!', 'success');
      });
      tsNow?.addEventListener('click', () => {
        const now = Math.floor(Date.now() / 1000);
        tsInput.value = now.toString();
        tsOut.textContent = new Date(now * 1000).toLocaleString();
        showToast('Current timestamp set!', 'success');
      });
      copyTs?.addEventListener('click', async () => {
        const text = tsOut.textContent || tsInput.value;
        if (!text) return;
        try {
          await navigator.clipboard.writeText(text);
          showToast('Copied!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });

      // Color Picker & Converter
      function updateColorPreview() {
        const hex = colorHex.value || colorPicker.value;
        if (!/^#[0-9A-F]{6}$/i.test(hex)) {
          // Clear preview if invalid
          if (colorHex.value && !/^#[0-9A-F]{0,6}$/i.test(colorHex.value)) {
            colorPreview.style.backgroundColor = '';
            colorHexValue.textContent = '';
            colorRgbValue.textContent = '';
            colorHslValue.textContent = '';
          }
          return;
        }
        colorPreview.style.backgroundColor = hex;
        const previewText = colorPreview.querySelector('.color-preview-text');
        if (previewText) previewText.style.display = 'none';
        
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const hsl = rgbToHsl(r, g, b);
        
        // Update individual format displays
        colorHexValue.textContent = hex.toUpperCase();
        colorRgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
        colorHslValue.textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
      }
      function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
          h = s = 0;
        } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
          }
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
      }
      colorPicker?.addEventListener('input', () => {
        colorHex.value = colorPicker.value;
        updateColorPreview();
      });
      colorHex?.addEventListener('input', (e) => {
        let value = e.target.value.trim();
        // Auto-add # if missing
        if (value && !value.startsWith('#')) {
          value = '#' + value;
          colorHex.value = value;
        }
        // Format to uppercase
        if (value.length > 1) {
          colorHex.value = '#' + value.slice(1).toUpperCase().replace(/[^0-9A-F]/g, '').slice(0, 6);
        }
        // Update if valid hex
        if (/^#[0-9A-F]{6}$/i.test(colorHex.value)) {
          colorPicker.value = colorHex.value;
          updateColorPreview();
        } else if (/^#[0-9A-F]{0,6}$/i.test(colorHex.value)) {
          // Partial hex - clear preview
          colorPreview.style.backgroundColor = '';
          const previewText = colorPreview.querySelector('.color-preview-text');
          if (previewText) previewText.style.display = 'block';
          colorHexValue.textContent = '';
          colorRgbValue.textContent = '';
          colorHslValue.textContent = '';
        }
      });
      colorHex?.addEventListener('blur', () => {
        // On blur, if incomplete, pad with zeros or use default
        if (colorHex.value && !/^#[0-9A-F]{6}$/i.test(colorHex.value)) {
          const hex = colorHex.value.slice(1).padEnd(6, '0').slice(0, 6);
          colorHex.value = '#' + hex.toUpperCase();
          colorPicker.value = colorHex.value;
          updateColorPreview();
        }
      });
      copyColorHex?.addEventListener('click', async () => {
        const hex = colorHexValue.textContent || colorHex.value || colorPicker.value;
        if (!hex || !hex.startsWith('#')) {
          showToast('No color to copy', 'error');
          return;
        }
        try {
          await navigator.clipboard.writeText(hex);
          showToast('Hex color copied!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });
      copyColorRgb?.addEventListener('click', async () => {
        const rgb = colorRgbValue.textContent;
        if (!rgb) {
          showToast('No color to copy', 'error');
          return;
        }
        try {
          await navigator.clipboard.writeText(rgb);
          showToast('RGB color copied!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });
      copyColorHsl?.addEventListener('click', async () => {
        const hsl = colorHslValue.textContent;
        if (!hsl) {
          showToast('No color to copy', 'error');
          return;
        }
        try {
          await navigator.clipboard.writeText(hsl);
          showToast('HSL color copied!', 'success');
        } catch (_) {
          showToast('Copy failed', 'error');
        }
      });
      // Initialize color picker on load
      if (colorPicker) {
        // Set initial hex value to match color picker default
        if (!colorHex.value && colorPicker.value) {
          colorHex.value = colorPicker.value.toUpperCase();
        }
        updateColorPreview();
        // Hide preview text initially since we have a default color
        const previewText = colorPreview?.querySelector('.color-preview-text');
        if (previewText) {
          previewText.style.display = 'none';
        }
      }

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search or toggle theme
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          themeToggle.click();
        }
        // Escape to clear focus
        if (e.key === 'Escape') {
          document.activeElement?.blur();
        }
      });

      // Contact form via mailto
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = encodeURIComponent(contactName.value.trim());
        const email = encodeURIComponent(contactEmail.value.trim());
        const message = encodeURIComponent(contactMsg.value.trim());
        const subject = `Feedback from ${name || 'Anonymous'}`;
        const body = `From: ${name}%0AEmail: ${email}%0A%0A${message}`;
        const mailto = `mailto:?subject=${subject}&body=${body}`;
        window.location.href = mailto;
        showToast('Opening email client...', 'info');
      });
