const fs = require('fs');
const path = require('path');

const directoryPath = 'c:/SISTEMA/Isolamentos Inova/isolamentoinova';
const htmlFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(directoryPath, file);
    let html = fs.readFileSync(filePath, 'utf-8');

    // Usaremos uma Regex flexível para capturar o conteúdo do widget "Links Úteis"
    // E vamos substituir pelo novo HTML limpo apenas com as páginas existentes.
    
    // Captura desde '<div class="row clearfix">' logo após '<h2>Links Úteis</h2></div>'
    // Até o final da segunda coluna de links que tem 'Sustentabilidade</a></li></ul></div></div>'
    
    const regexLinksWidget = /<div class="row clearfix">\s*<div class="column col-md-6 col-sm-6 col-xs-12">\s*<ul class="links">[\s\S]*?<li><a href="#">Sustentabilidade<\/a><\/li>\s*<\/ul>\s*<\/div>\s*<\/div>/g;

    const novoConteudoLinks = `<div class="row clearfix">
                                <div class="column col-md-12 col-sm-12 col-xs-12">
                                <ul class="links">
                                        <li><a href="index.html">Página Inicial</a></li>
                                        <li><a href="sobre.html">Sobre Nós</a></li>
                                        <li><a href="servicos.html">Nossos Serviços</a></li>
                                        <li><a href="projetos.html">Projetos</a></li>
                                        <li><a href="contato.html">Contato</a></li>
                                    </ul>
                                </div>
                            </div>`;

    html = html.replace(regexLinksWidget, novoConteudoLinks);
    fs.writeFileSync(filePath, html, 'utf-8');
});

console.log('Rodapé Limpo: links inexistentes (Blog, Setores, etc) foram removidos de todas as páginas.');