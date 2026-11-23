// Run: node build.mjs — copies header/footer from index.html into the case pages.
import fs from 'fs';
const grab = (s, a, b) => s.slice(s.indexOf(a), s.indexOf(b) + b.length);
const src = fs.readFileSync('index.html', 'utf8');
const [H, F] = [['<!--HEADER-->', '<!--/HEADER-->'], ['<!--FOOTER-->', '<!--/FOOTER-->']].map(([a, b]) => grab(src, a, b));
for (const f of ['logiqwealth.html', 'logiqassist.html', 'logiqlead.html']) {
  let t = fs.readFileSync(f, 'utf8');
  t = t.replace(grab(t, '<!--HEADER-->', '<!--/HEADER-->'), () => H).replace(grab(t, '<!--FOOTER-->', '<!--/FOOTER-->'), () => F);
  fs.writeFileSync(f, t);
}
