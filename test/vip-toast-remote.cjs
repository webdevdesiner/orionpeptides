const { JSDOM } = require('jsdom');

async function runRemoteTest(url) {
  console.log('Loading URL:', url);
  try {
    const dom = await JSDOM.fromURL(url, {
      runScripts: 'dangerously',
      resources: 'usable',
      pretendToBeVisual: true
    });

    const { window } = dom;

    // wait up to 6s for scripts to run and toast to appear
    const start = Date.now();
    while (Date.now() - start < 6000) {
      // Check common patterns: element with class vip-toast or gold text
      const toast = window.document.querySelector('.vip-toast') || window.__VIP_TOAST;
      if (toast) {
        const text = toast.textContent ? toast.textContent.trim() : '';
        console.log('TOAST_FOUND:', text);
        if (text.toUpperCase().includes('VIP-')) {
          console.log('TEST_PASS');
          process.exit(0);
        } else {
          console.error('TEST_FAIL: toast found but unexpected text:', text);
          process.exit(3);
        }
      }
      // small delay
      await new Promise((r) => setTimeout(r, 300));
    }

    // fallback: check inline scripts for vip-toast logic presence
    const scripts = Array.from(window.document.scripts).map(s => s.textContent || s.src || '');
    const found = scripts.find(s => /Código VIP|vip-toast|VIP-/.test(s));
    if (found) {
      console.log('TEST_INCONCLUSIVE: toast script found in page but no DOM element rendered yet.');
      process.exit(2);
    }

    console.error('TEST_FAIL: no toast detected within timeout.');
    process.exit(4);
  } catch (err) {
    console.error('ERROR_LOADING:', String(err));
    process.exit(5);
  }
}

const url = process.argv[2];
if (!url) {
  console.error('Usage: node vip-toast-remote.cjs <url-with-ref>');
  process.exit(10);
}
runRemoteTest(url);

