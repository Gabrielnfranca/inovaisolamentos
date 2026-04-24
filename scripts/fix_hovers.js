const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace Block 1: Indústria Lácteos
html = html.replace(
    'Soluções robustas de <strong>isolamento térmico</strong> para processos térmicos complexos e alta resistência.</div>\r\n                                    <a class=\"go\" href=\"servicos.html\">Saiba Mais <span class=\"icon flaticon-arrow-pointing-to-right\"></span></a>',
    'Isolamento térmico sob medida para assegurar a conservação, higiene e qualidade térmica exigidas na indústria de laticínios.</div>'
);

// Replace Block 2: Alimentos e Bebidas
html = html.replace(
    'Isolamento térmico sanitário e eficiente para controle rigoroso de temperatura em linhas de produção.</div>\r\n                                    <a class=\"go\" href=\"servicos.html\">Saiba Mais <span class=\"icon flaticon-arrow-pointing-to-right\"></span></a>',
    'Isolamento térmico sanitário e eficiente para controle rigoroso de temperatura em linhas de produção.</div>'
);

// Replace Block 3: Biodiesel
html = html.replace(
    '<h2>Biodísel <br> </h2>',
    '<h2>Biodiesel <br> </h2>'
);

html = html.replace(
    'Máxima conservação de calor em caldeiras e turbinas, garantindo eficiência energética total.</div>\r\n                                    <a class=\"go\" href=\"servicos.html\">Saiba Mais <span class=\"icon flaticon-arrow-pointing-to-right\"></span></a>',
    'Termo-isolamento inteligente para garantir eficiência processual, segurança e máxima redução de perda energética ao longo da cadeia de biocombustíveis.</div>'
);

// Replace Block 4: Papel e Celulose
html = html.replace(
    'Revestimentos térmicos de alta performance para tubulações e vasos de pressão industriais.</div>\r\n                                    <a class=\"go\" href=\"servicos.html\">Saiba Mais <span class=\"icon flaticon-arrow-pointing-to-right\"></span></a>',
    'Proteção térmica de alta resistência contra agentes químicos, estabilizando a temperatura em reatores, digestores e tubulações da planta.</div>'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Hover sectors updated!');
