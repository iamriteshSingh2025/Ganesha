import { build } from './node_modules/vite/dist/node/index.js';
try {
  await build({ logLevel: 'silent' });
} catch(e) {
  if(e.errors) {
    for(const err of e.errors) {
      console.log('FILE:', err.id);
      console.log('TEXT:', err.text);
      console.log('LINE:', err.loc?.line, 'COL:', err.loc?.column);
    }
  } else {
    console.log(e.message);
    console.log(e.stack);
  }
}
