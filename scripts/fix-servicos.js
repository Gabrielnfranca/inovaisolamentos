const fs = require('fs');
let html = fs.readFileSync('servicos.html', 'utf8');

// remove diario de obra
// find block exactly:
let startIdx = html.indexOf('<!--Project Block Four-->');
let diArioIdx = html.indexOf('DiÃ¡rio de Obra');
if (startIdx !== -1 && diArioIdx !== -1) {
    // we want to find the exact block and slice it:
    let block = html.substring(startIdx, startIdx + 1100);
    // since block four might appear elsewhere, let's find the specific block for Diário de obra
    if (block.includes('DiÃ¡rio de Obra')) {
        let endIdx = block.indexOf('</div>\r\n                </div>');
        if (endIdx !== -1) {
            html = html.replace(block.substring(0, endIdx + 30), '');
        }
    }
}

// Remove floating whatsapp button
html = html.replace(/<!-- WhatsApp Floating Button -->\s*<a href="[^"]*whatsapp[^"]*" class="whatsapp-float".*?<\/a>\s*/is, '');

// Remove all quote buttons that redirect to WhatsApp
html = html.replace(/<div class="outer-box">\s*<a href="https:\/\/api\.whatsapp\.com[^"]+" class="theme-btn quote-btn">.*?<\/a>\s*<\/div>/is, '');

// Strip the link around the phone number but keep the number itself
html = html.replace(/<a href="https:\/\/api\.whatsapp\.com[^"]+">(<span class="icon fa fa-phone"><\/span>[^<]+)<\/a>/is, '$1');

// Any remaining whatsapp links that user asked to delete
html = html.replace(/<a[^>]*href="https:\/\/api\.whatsapp\.com[^>]*>([\s\S]*?)<\/a>/gis, '$1');

fs.writeFileSync('servicos.html', html, 'utf8');
console.log('done.');
