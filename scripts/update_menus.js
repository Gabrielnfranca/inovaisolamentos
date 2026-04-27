const fs = require('fs');
const path = require('path');

const directoryPath = 'c:/SISTEMA/Isolamentos Inova/isolamentoinova';
const htmlFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(directoryPath, file);
    let html = fs.readFileSync(filePath, 'utf-8');

    // 1. Inserir no Footer -> "Links Úteis" (Serviços dropdown e outros similares se existir ul)
    // O padrão geral para links normais de rodapé ou menu:
    html = html.replace(
        /<li><a href="isolamento-termico.html">Isolamento Térmico<\/a><\/li>(\s*)<\/ul>/g,
        '<li><a href="isolamento-termico.html">Isolamento Térmico</a></li>$1    <li><a href="montagem-de-chapa.html">Montagem de Chapa</a></li>$1</ul>'
    );

    // E para o caso específico onde "Todos os Serviços" também está na lista (Menu Header)
    html = html.replace(
        /<li><a href="isolamento-termico.html">Isolamento Térmico<\/a><\/li>(\s*)<li><a href="servicos.html">Todos os Serviços<\/a><\/li>/g,
        '<li><a href="isolamento-termico.html">Isolamento Térmico</a></li>$1<li><a href="montagem-de-chapa.html">Montagem de Chapa</a></li>$1<li><a href="servicos.html">Todos os Serviços</a></li>'
    );

    // 2. Inserir no Footer -> "Serviços Especializados"
    html = html.replace(
        /<li><span class="icon flaticon-engineer" style="top: 0px; font-size: 32px;"><\/span><a href="isolamento-termico.html" style="padding-top: 7px;">Isolamento Térmico<\/a><\/li>(\s*)<\/ul>/g,
        '<li><span class="icon flaticon-engineer" style="top: 0px; font-size: 32px;"></span><a href="isolamento-termico.html" style="padding-top: 7px;">Isolamento Térmico</a></li>$1    <li><span class="icon flaticon-engineer" style="top: 0px; font-size: 32px;"></span><a href="montagem-de-chapa.html" style="padding-top: 7px;">Montagem de Chapa</a></li>$1</ul>'
    );

    fs.writeFileSync(filePath, html, 'utf-8');
});

console.log('Links adicionados nas footers e menus de todas as páginas HTML.');