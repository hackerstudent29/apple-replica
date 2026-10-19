import { spawn, execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import os from 'os';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = path.resolve('docs/screenshots');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const pages = [
  { name: '01-homepage.png', url: 'http://localhost:3000/' },
  { name: '02-iphone.png', url: 'http://localhost:3000/iphone' },
  { name: '03-mac.png', url: 'http://localhost:3000/mac' },
  { name: '04-ipad.png', url: 'http://localhost:3000/ipad' },
  { name: '05-watch.png', url: 'http://localhost:3000/watch' },
  { name: '06-airpods.png', url: 'http://localhost:3000/airpods' },
  { name: '07-tv-home.png', url: 'http://localhost:3000/tv-home' },
  { name: '08-store.png', url: 'http://localhost:3000/store' },
];

function killPid(pid) {
  try {
    execSync(`taskkill /F /T /PID ${pid} >nul 2>&1`);
  } catch (e) {}
}

function capture(page) {
  return new Promise((resolve) => {
    const outFile = path.join(OUT_DIR, page.name);
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-ss-'));
    console.log(`Capturing ${page.url} -> ${page.name}...`);
    
    // Remove old file if exists so we can detect when new one is written
    if (fs.existsSync(outFile)) {
      try { fs.unlinkSync(outFile); } catch(e) {}
    }

    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-extensions',
      `--user-data-dir=${tempDir}`,
      '--window-size=1440,900',
      '--hide-scrollbars',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=3000',
      `--screenshot=${outFile}`,
      page.url
    ];

    const proc = spawn(CHROME, args, { stdio: 'ignore' });
    let resolved = false;

    // Check periodically if file has been created with good size
    const checkInterval = setInterval(() => {
      if (fs.existsSync(outFile)) {
        try {
          const stats = fs.statSync(outFile);
          if (stats.size > 20000) { // at least 20KB
            // Give 500ms more just in case, then finish
            setTimeout(() => {
              if (!resolved) {
                resolved = true;
                clearInterval(checkInterval);
                clearTimeout(timeoutTimer);
                killPid(proc.pid);
                try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
                console.log(`✓ Saved ${page.name} (${(fs.statSync(outFile).size / 1024).toFixed(1)} KB)`);
                resolve();
              }
            }, 600);
          }
        } catch (e) {}
      }
    }, 400);

    const timeoutTimer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        clearInterval(checkInterval);
        killPid(proc.pid);
        try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
        if (fs.existsSync(outFile) && fs.statSync(outFile).size > 1000) {
          console.log(`✓ Saved ${page.name} on timeout (${(fs.statSync(outFile).size / 1024).toFixed(1)} KB)`);
        } else {
          console.error(`✗ Timeout capturing ${page.name}`);
        }
        resolve();
      }
    }, 10000);

    proc.on('close', () => {
      if (!resolved) {
        resolved = true;
        clearInterval(checkInterval);
        clearTimeout(timeoutTimer);
        try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
        if (fs.existsSync(outFile) && fs.statSync(outFile).size > 1000) {
          console.log(`✓ Saved ${page.name} (${(fs.statSync(outFile).size / 1024).toFixed(1)} KB)`);
        } else {
          console.error(`✗ Failed to capture ${page.name}`);
        }
        resolve();
      }
    });
  });
}

async function run() {
  for (const page of pages) {
    await capture(page);
    await new Promise(r => setTimeout(r, 600));
  }
  console.log('Finished capturing all screenshots!');
}

run();
