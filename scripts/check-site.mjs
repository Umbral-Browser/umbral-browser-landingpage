import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('dist');
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    const file = path.join(dir,entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
const pages = walk(root).filter(file => file.endsWith('.html'));
assert.equal(pages.length,30,'Expected 10 pages in each of three languages.');
let links = 0;
for (const file of pages) {
  const html=fs.readFileSync(file,'utf8');
  const relative=path.relative(root,file).split(path.sep).join('/');
  const lang=relative.startsWith('en/')?'en':relative.startsWith('ca/')?'ca':'es';
  assert.match(html,new RegExp(`<html lang="${lang}"`),relative);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,relative+' must have one h1');
  assert.match(html, /id="main-content"/, relative+' must provide skip target');
  assert.match(html, /rel="canonical"/, relative+' must have canonical metadata');
  assert.equal((html.match(/hreflang="(?:es|en|ca)"/g)||[]).length,6,relative+' needs alternate and picker links');
  assert.ok(!html.includes('<script'),relative+' should work without client JS');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(new Set(ids).size,ids.length,relative+' has duplicate IDs');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const raw=match[1].replaceAll('&amp;','&');
    if (/^(?:https?:|mailto:|data:)/.test(raw)) continue;
    const [pathname,hash]=raw.split('#');
    let target=pathname ? (pathname.startsWith('/')?path.join(root,pathname):path.resolve(path.dirname(file),pathname)) : file;
    if (fs.existsSync(target)&&fs.statSync(target).isDirectory()) target=path.join(target,'index.html');
    assert.ok(fs.existsSync(target),`${relative}: missing target ${raw}`);
    if(hash&&target.endsWith('.html')) {
      const targetHTML=target===file?html:fs.readFileSync(target,'utf8');
      assert.ok(targetHTML.includes(`id="${hash}"`),`${relative}: missing anchor ${raw}`);
    }
    links++;
  }
  for (const image of html.matchAll(/<img\b[^>]*>/g)) assert.match(image[0],/\balt="[^"]*"/,relative+' has image without alt');
}
const content=JSON.parse(fs.readFileSync('src/content/pages.json','utf8'));
const expected=Object.keys(content.es).sort();
for (const lang of ['en','ca']) assert.deepEqual(Object.keys(content[lang]).sort(),expected);
for (const [lang,localized] of Object.entries(content)) for (const [slug,page] of Object.entries(localized)) {
 assert.ok(page.title&&page.intro&&page.sections.length,`${lang}/${slug} empty`);
 assert.ok(page.sections.every(s=>s.heading&&s.paragraphs.every(Boolean)),`${lang}/${slug} incomplete`);
}
console.log(`Verified ${pages.length} HTML pages, ${links} local links/resources, anchors, metadata, translation coverage and no client JavaScript.`);
