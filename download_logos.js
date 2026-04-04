import fs from 'fs';
import path from 'path';
import https from 'https';

const companies = [
  { name: 'ALSHAYA GROUP', domain: 'alshaya.com' },
  { name: 'BBC STUDIOS', domain: 'bbcstudios.com' },
  { name: 'asics', domain: 'asics.com' },
  { name: 'Angi', domain: 'angi.com' },
  { name: 'Clarks', domain: 'clarks.com' },
  { name: 'dwelly', domain: 'dwelly.com' },
  { name: 'TOUS', domain: 'tous.com' },
  { name: 'Avolta', domain: 'avoltaworld.com' },
  { name: 'AERONES', domain: 'aerones.com' },
  { name: 'Lululemon', domain: 'lululemon.com' },
  { name: 'CHALHOUB GROUP', domain: 'chalhoubgroup.com' },
  { name: 'MAERSK', domain: 'maersk.com' },
  { name: 'SWAROVSKI', domain: 'swarovski.com' },
  { name: 'Holland&Barrett', domain: 'hollandandbarrett.com' },
  { name: 'TIMES PROPERTY', domain: 'timesproperty.ca' },
  { name: 'bluerock', domain: 'bluerock.com' },
  { name: 'dojo', domain: 'dojo.tech' },
  { name: 'BREITLING', domain: 'breitling.com' },
  { name: 'Orium', domain: 'orium.com' },
  { name: 'Velasca', domain: 'velasca.com' },
  { name: 'BCG', domain: 'bcg.com' },
  { name: 'SANDOZ', domain: 'sandoz.com' }
];

const outDir = path.join(process.cwd(), 'public', 'logos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function normalizeName(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function downloadLogo(company) {
  const url = `https://logo.clearbit.com/${company.domain}`;
  const normalized = normalizeName(company.name);
  const dest = path.join(outDir, `${normalized}.png`);
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects if any
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        https.get(res.headers.location, (redirectRes) => {
          const file = fs.createWriteStream(dest);
          redirectRes.pipe(file);
          file.on('finish', () => { file.close(); console.log(`Downloaded (redirect): ${company.name}`); resolve(); });
        }).on('error', reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        console.error(`Failed to fetch ${company.name} (${url}): ${res.statusCode}`);
        resolve(); // resolve anyway to continue loop
        return;
      }
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${company.name}`);
        resolve();
      });
    }).on('error', (e) => {
        console.error(`Error on ${company.name}:`, e);
        resolve();
    });
  });
}

async function main() {
  for (const c of companies) {
    await downloadLogo(c);
  }
}

main().catch(console.error);
