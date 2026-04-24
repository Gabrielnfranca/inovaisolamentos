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

        // Centralizar o ícone com o texto ou ajustando seu estilo online
        html = html.replace(
            /<li><span class="icon flaticon-engineer"><\/span><a href="isolamento-termico\.html">Isolamento Térmico<\/a><\/li>/g,
            `<li><span class="icon flaticon-engineer" style="top: 0px; font-size: 32px;"></span><a href="isolamento-termico.html" style="padding-top: 7px;">Isolamento Térmico</a></li>`
        );

        fs.writeFileSync(file, html, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log('All files updated successfully!');