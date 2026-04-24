const fs = require('fs');
let newHtml = fs.readFileSync('index.html', 'utf8');

const replacements = {
  'Isolamento Térmico de Equipamentos': 'Equipamento de Vapor',
  'Isolamento de Linhas': 'Chapas de Alumínio Corrugado',
  'Isolamento e Controle de Temperatura': 'Manutenção em Caldeiras',
  'Tratamento Acústico Industrial': 'Equipamento de Vapor'
};

for (const [oldT, newT] of Object.entries(replacements)) {
  newHtml = newHtml.replace('>'+oldT+'<', '>'+newT+'<');
}

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Títulos alterados com sucesso.');
