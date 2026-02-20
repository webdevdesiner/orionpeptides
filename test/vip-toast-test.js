const { JSDOM } = require('jsdom');

async function runTest() {
  const dom = new JSDOM(`<!doctype html><html><body></body></html>`, {
    runScripts: "dangerously",
    resources: "usable",
    url: "https://example.com/?ref=formigao"
  });

  const { window } = dom;
  const { document } = window;

  // Toast script (same logic used in layout)
  (function() {
    try {
      if (!window.location.search || !window.location.search.includes('ref=')) return;
      const params = new URLSearchParams(window.location.search);
      const ref = params.get('ref');
      if (!ref) return;

      const code = String(ref).toUpperCase().replace(/\s+/g, '');
      const toast = document.createElement('div');
      toast.className = 'vip-toast';
      toast.innerHTML = `<span style="font-size:18px">🎁</span><span> <span class="gold">Código VIP-${code}</span> ativado com sucesso!</span>`;
      // minimal styles to not affect detection
      toast.style.position = 'fixed';
      document.body.appendChild(toast);

      // simulate show
      toast.classList.add('show');

      // expose for test inspection
      window.__VIP_TOAST = toast;
    } catch (e) {
      // ignore
      window.__VIP_ERROR = String(e);
    }
  })();

  // wait briefly for DOM tasks
  await new Promise((r) => setTimeout(r, 100));

  const toast = window.__VIP_TOAST;
  if (!toast) {
    console.error('TOAST_NOT_FOUND', window.__VIP_ERROR || '');
    process.exit(2);
  }
  const text = toast.textContent || '';
  console.log('TOAST_TEXT:', text.trim());
  if (text.includes('VIP-FORMIGAO')) {
    console.log('TEST_PASS');
    process.exit(0);
  } else {
    console.error('TEST_FAIL: unexpected toast text');
    process.exit(3);
  }
}

runTest();

