const fs = require('fs');
const path = require('path');

const directoryPath = 'c:/SISTEMA/Isolamentos Inova/isolamentoinova';
const htmlFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(directoryPath, file);
    let html = fs.readFileSync(filePath, 'utf-8');

    // Substituir <a href="servicos.html">Serviços</a> seguido de <ul><li>Isolamento</li><li>Montagem</li>
    // para adicionar <li>Todos os Serviços</li>
    
    // Expressão regular foca na abertura de <ul> e fechamento </ul>, buscando adicionar no final
    // Padrão encontrado nos HTML: 
    // <a href="servicos.html">Serviços</a>
    // <ul>
    //     <li><a href="isolamento-termico.html">Isolamento Térmico</a></li>
    //     <li><a href="montagem-de-chapa.html">Montagem de Chapa</a></li>
    // </ul>

    const regexHeaderDropdown = /(<li[^>]*><a href="servicos\.html">Serviços<\/a>\s*<ul>\s*<li><a href="isolamento-termico\.html">Isolamento Térmico<\/a><\/li>\s*<li><a href="montagem-de-chapa\.html">Montagem de Chapa<\/a><\/li>)(\s*<\/ul>)/g;
    
    html = html.replace(regexHeaderDropdown, (match, p1, p2) => {
        // Se já tiver "Todos os Serviços" no bloco (ou caso algo escape), não mexe
        return p1 + '\n                                            <li><a href="servicos.html">Todos os Serviços</a></li>' + p2;
    });

    fs.writeFileSync(filePath, html, 'utf-8');
});

console.log('Submenu "Todos os Serviços" adicionado aos arquivos que estavam faltando.');