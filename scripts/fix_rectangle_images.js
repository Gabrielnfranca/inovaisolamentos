const fs = require('fs');
const filePath = 'c:/SISTEMA/Isolamentos Inova/isolamentoinova/montagem-de-chapa.html';
let html = fs.readFileSync(filePath, 'utf8');

// Ajustando para um formato retangular mais profissional (proporção de banner)
// A altura de 320px é excelente para serviços, pois permite ver conteúdo abaixo da dobra.

// Atualiza o container da imagem principal
html = html.replace(
    'style="max-height: 450px; overflow: hidden; border-radius: 10px; margin-bottom: 30px;"',
    'style="max-height: 320px; overflow: hidden; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.08);"'
);

// Atualiza a tag img principal
html = html.replace(
    'style="width: 100%; height: 450px; object-fit: cover; object-position: center;"',
    'style="width: 100%; height: 320px; object-fit: cover; object-position: center;"'
);

// Atualiza a imagem secundária
html = html.replace(
    'style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);"',
    'style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.12);"'
);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Finalizado: Imagens agora estão no formato retangular panorâmico.');
