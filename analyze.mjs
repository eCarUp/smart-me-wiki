import {readFile} from 'node:fs/promises';
import * as cheerio from 'cheerio';
const $=cheerio.load(await readFile('.migration-cache/dok.smart-me.com/schnittstellen/api.html','utf8'));
const fams=new Map();
$('section span[style]').each((_,el)=>{
  const st=$(el).attr('style')||'';
  const m=st.match(/font-family:\s*([^;]+)/);
  if(m) fams.set(m[1].trim(), (fams.get(m[1].trim())||0)+1);
});
console.log([...fams.entries()].sort((a,b)=>b[1]-a[1]).slice(0,8));
console.log('--- ein code-p komplett ---');
const p=$('section p').filter((_,el)=>$(el).text().includes('import requests')).first();
console.log($.html(p).replace(/style="[^"]*"/g,m=>m.slice(0,80)+'..."').slice(0,600));
console.log('--- prev/next siblings text ---');
console.log('prev:',JSON.stringify($(p).prev().text().slice(0,60)));
console.log('next:',JSON.stringify($(p).next().text().slice(0,60)));
