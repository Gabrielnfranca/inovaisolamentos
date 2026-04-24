const fs = require('fs');

const files = [
    'index.html',
    'servicos.html',
    'sobre.html',
    'contato.html',
    'projetos.html',
    'isolamento-termico.html'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');

        // Corrige o nome do arquivo para "Logo-small.png" (com L maiúsculo)
        html = html.replace(/src="images\/logo-small\.png"/g, 'src="images/Logo-small.png"');

        fs.writeFileSync(file, html, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log('Case sensitivity fixed for Vercel!');