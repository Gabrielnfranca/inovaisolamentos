const fs = require('fs');
const files = ['contato.html', 'servicos.html', 'sobre.html', 'projetos.html'];

files.forEach(f => {
    let t = fs.readFileSync(f, 'utf8');
    // If it's single encoded (garbled bytes representing Ã§)
    // we can decode using Buffer latin1 to utf8
    try {
        // We know they currently have replacement chars? No wait, my bad Node script might have ruined them.
        t = t.replace(//g, 'ç'); // If this is U+FFFD it means data is lost.
    } catch(e){}
});