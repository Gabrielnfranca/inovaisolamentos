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

        // Capture logo-small e colocar tamanho máximo adequado para sticky header
        html = html.replace(
            /<img src="images\/([lL]ogo-small\.(png|jpg|jpeg))"[^>]*>/g,
            '<img src="images/logo-small.png" alt="Inova Isolamentos" style="max-height: 50px; width: auto;">'
        );

        fs.writeFileSync(file, html, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log('Small logos updated successfully!');