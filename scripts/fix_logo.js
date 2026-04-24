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

        // Capture logo-2 e colocar tamanho máximo
        html = html.replace(
            /<img src="images\/[lL]ogo-2\.(png|jpg|jpeg)"[^>]*>/g,
            '<img src="images/Logo-2.png" alt="Inova Isolamentos" style="max-height: 85px; width: auto;">'
        );

        fs.writeFileSync(file, html, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log('All logos updated successfully!');
