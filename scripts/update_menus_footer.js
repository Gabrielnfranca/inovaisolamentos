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

        // 1. Atualiza o menu Serviços normal
        html = html.replace(
            /<li><a href="servicos\.html">Serviços<\/a><\/li>/g,
            `<li class="dropdown"><a href="servicos.html">Serviços</a>
                                        <ul>
                                            <li><a href="isolamento-termico.html">Isolamento Térmico</a></li>
                                        </ul>
                                    </li>`
        );

        // 1.2 Atualiza o menu Serviços quando está ativo (current)
        html = html.replace(
            /<li class="current"><a href="servicos\.html">Serviços<\/a><\/li>/g,
            `<li class="current dropdown"><a href="servicos.html">Serviços</a>
                                        <ul>
                                            <li><a href="isolamento-termico.html">Isolamento Térmico</a></li>
                                        </ul>
                                    </li>`
        );

        // 2. Atualiza a Footer
        html = html.replace(
            /<h2>Materiais<\/h2>\s*<\/div>\s*<ul class="list-style-two">[\s\S]*?<\/ul>/g,
            `<h2>Serviços Especializados</h2>
                            </div>
                            <ul class="list-style-two">
                            	<li><span class="icon flaticon-engineer"></span><a href="isolamento-termico.html">Isolamento Térmico</a></li>
                            </ul>`
        );

        fs.writeFileSync(file, html, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log('All files updated successfully!');