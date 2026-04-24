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

        // Regex para encontrar a parte EXATA do top-right menu (onde fica o atalho rápido escuro no topo)
        // e remover a estrutura de Dropdown "Serviços -> Isolamento Térmico" apenas dele,
        // devolvendo para o link simples <li><a href="servicos.html">Serviços</a></li>
        const rgxTopMenu = /(<div class=\"top-right clearfix\">[\s\S]*?<li><a href=\"contato\.html\">Contato<\/a><\/li>\s*)<li class=\"dropdown\"><a href=\"servicos\.html\">Serviços<\/a>\s*<ul>\s*<li><a href=\"isolamento-termico\.html\">Isolamento Térmico<\/a><\/li>\s*<\/ul>\s*<\/li>/;

        html = html.replace(rgxTopMenu, '$1<li><a href="servicos.html">Serviços</a></li>');

        fs.writeFileSync(file, html, 'utf8');
        console.log(`Corrigido menu no topo de ${file}`);
    }
});

console.log('Top menus corrigidos com sucesso!');