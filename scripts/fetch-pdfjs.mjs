// Vendor the pinned, official npm build. No PDF content leaves the browser.
import {mkdir, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const version='6.5.438';
const meta=await (await fetch(`https://registry.npmjs.org/pdfjs-dist/${version}`)).json();
const bytes=Buffer.from(await (await fetch(meta.dist.tarball)).arrayBuffer());
if(`sha512-${createHash('sha512').update(bytes).digest('base64')}`!==meta.dist.integrity) throw new Error('PDF.js package integrity mismatch');
await mkdir(new URL('../.deps/',import.meta.url),{recursive:true});
await writeFile(new URL('../.deps/pdfjs.tgz',import.meta.url),bytes);
console.log(`Verified pdfjs-dist ${version}; saved .deps/pdfjs.tgz`);
