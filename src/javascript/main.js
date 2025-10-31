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
          copyBtn.textContent = 'Copied!';
          setTimeout(() => (copyBtn.textContent = 'Copy Status'), 900);
        } catch (_) {
          alert('Copy failed.');
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

      // Converters
      const round = (n) => Math.round(n * 100) / 100;
      toF.addEventListener('click', () => {
        const c = parseFloat(celsius.value);
        if (!isNaN(c)) {
          fahrenheit.value = round((c * 9) / 5 + 32);
        }
      });
      toC.addEventListener('click', () => {
        const f = parseFloat(fahrenheit.value);
        if (!isNaN(f)) {
          celsius.value = round(((f - 32) * 5) / 9);
        }
      });

      // Word counter
      const updateCounts = () => {
        const text = (wcInput.value || '').trim();
        const words = text ? text.split(/\s+/).length : 0;
        const chars = (wcInput.value || '').length;
        wcStats.textContent = `${words} words, ${chars} characters`;
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
        try { await navigator.clipboard.writeText(t); copyUuid.textContent = 'Copied!'; setTimeout(() => copyUuid.textContent = 'Copy', 900); } catch (_) {}
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
        try { await navigator.clipboard.writeText(t); copyB64.textContent = 'Copied!'; setTimeout(() => copyB64.textContent = 'Copy Result', 900); } catch (_) {}
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
        try { await navigator.clipboard.writeText(t); copyUrlBtn.textContent = 'Copied!'; setTimeout(() => copyUrlBtn.textContent = 'Copy Result', 900); } catch (_) {}
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
        try { await navigator.clipboard.writeText(t); copyHash.textContent = 'Copied!'; setTimeout(() => copyHash.textContent = 'Copy Hash', 900); } catch (_) {}
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
      genBtn?.addEventListener('click', () => {
        const pw = generatePassword();
        passOut.textContent = pw || '(choose at least one character set)';
      });
      copyPass?.addEventListener('click', async () => {
        const text = passOut.textContent || '';
        if (!text || text.startsWith('(')) return;
        try {
          await navigator.clipboard.writeText(text);
          copyPass.textContent = 'Copied!';
          setTimeout(() => (copyPass.textContent = 'Copy'), 900);
        } catch (_) { /* ignore */ }
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
      });