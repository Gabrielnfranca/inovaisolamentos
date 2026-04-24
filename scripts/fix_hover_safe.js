const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    /<div class="text">Soluções robustas[\s\S]*?<\/a>/,
    '<div class="text">Isolamento térmico sob medida para assegurar a conservação, higiene e qualidade térmica exigidas na indústria de laticínios.</div>'
);

html = html.replace(
    /<div class="text">Isolamento térmico sanitário[\s\S]*?<\/a>/,
    '<div class="text">Isolamento térmico sanitário e eficiente para controle rigoroso de temperatura em linhas de produção.</div>'
);

html = html.replace(
    /<h2>Biodísel <br> <\/h2>/,
    '<h2>Biodiesel <br> </h2>'
);

html = html.replace(
    /<div class="text">Máxima conservação de calor em caldeiras e turbinas[\s\S]*?<\/a>/,
    '<div class="text">Termo-isolamento inteligente para garantir eficiência processual, segurança e máxima redução de perda energética ao longo da cadeia de biocombustíveis.</div>'
);

html = html.replace(
    /<div class="text">Revestimentos térmicos de alta performance[\s\S]*?<\/a>/,
    '<div class="text">Proteção térmica de alta resistência contra agentes químicos, estabilizando a temperatura em reatores, digestores e tubulações da planta.</div>'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Replaced correctly!');
