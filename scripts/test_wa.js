const fs=require('fs'); 
let txt = fs.readFileSync('servicos.html','utf8'); 
const matches = txt.match(/<a[^>]+href=["'][^"']*wa\.me[^"']*["'][^>]*>.*?<\/a>|<a[^>]+href=["'][^"']*whatsapp[^"']*["'][^>]*>.*?<\/a>/gis);
if(matches) console.log(matches.join('\n\n---\n\n'));
else console.log('NONE');
