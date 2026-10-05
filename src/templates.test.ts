import {readFileSync,readdirSync} from 'node:fs';
import {expect,it} from 'vitest';

it('contains 170 distinct local pages with unique region IDs',()=>{
  const files=readdirSync('public/templates').filter(f=>f.endsWith('.svg'));
  expect(files).toHaveLength(170);
  const pages=files.map(file=>readFileSync(`public/templates/${file}`,'utf8'));
  expect(new Set(pages).size).toBe(170);
  for(const svg of pages){
    expect(svg).toContain('viewBox="0 0 600 800"');
    const ids=[...svg.matchAll(/id="(region-[^"]+)"/g)].map(m=>m[1]);
    expect(ids.length).toBeGreaterThanOrEqual(5);
    expect(new Set(ids).size).toBe(ids.length);
  }
});
