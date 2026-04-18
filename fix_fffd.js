const fs = require('fs');
const files = ['contato.html', 'servicos.html', 'sobre.html', 'projetos.html'];

const dict = {
  'Serviï¿½os': 'Serviços',
  'serviï¿½os': 'serviços',
  'Instalaï¿½ï¿½es': 'Instalações',
  'Tï¿½rmicas': 'Térmicas',
  'Tï¿½RMICAS': 'TÉRMICAS',
  'tï¿½rmico': 'térmico',
  'Tï¿½rmico': 'Térmico',
  'Conheï¿½a': 'Conheça',
  'diï¿½rio': 'diário',
  'Soluï¿½ï¿½es': 'Soluções',
  'soluï¿½ï¿½es': 'soluções',
  'eficiï¿½ncia': 'eficiência',
  'Eficiï¿½ncia': 'Eficiência',
  'energï¿½tica': 'energética',
  'orï¿½amento': 'orçamento',
  'Orï¿½amento': 'Orçamento',
  'Nï¿½s': 'Nós',
  'Sï¿½o Paulo': 'São Paulo',
  'Tubulaï¿½ï¿½es': 'Tubulações',
  'Tubulaï¿½ï¿½o': 'Tubulação',
  'Manutenï¿½ï¿½o': 'Manutenção',
  'Lï¿½ Rocha': 'Lã Rocha',
  'Cï¿½mera': 'Câmera',
  'Acï¿½stico': 'Acústico',
  'Fluï¿½dos': 'Fluídos',
  'Indï¿½stria': 'Indústria',
  'Construï¿½ï¿½o': 'Construção',
  'Aplicaï¿½ï¿½o': 'Aplicação',
  'Preï¿½o': 'Preço',
  'vocï¿½': 'você',
  'Vocï¿½': 'Você',
  'Inï¿½cio': 'Início',
  'Alumï¿½nio': 'Alumínio',
  'Criogï¿½nico': 'Criogênico',
  'Proteï¿½ï¿½o': 'Proteção',
  'Apoio/Manutenï¿½ï¿½o': 'Apoio/Manutenção',
  'Endereï¿½o': 'Endereço',
  'Territï¿½rio': 'Território',
  'Aprovaï¿½ï¿½o': 'Aprovação',
  'Avanï¿½ada': 'Avançada',
  'Mï¿½todos': 'Métodos',
  'Padrï¿½es': 'Padrões',
  'Sï¿½lidos': 'Sólidos',
  'Fï¿½brica': 'Fábrica',
  'Tï¿½cnicos': 'Técnicos',
  'tï¿½cnicos': 'técnicos',
  'Ã§': 'ç', 'Ãµ': 'õ', 'TÃ©': 'Té', 'tÃ©': 'té', 'Ã¡': 'á', 'Ãª': 'ê', 'Ã©': 'é', 'Ã³': 'ó', 'Ã£': 'ã', 'Ãº': 'ú', 'Ã¢': 'â', 'Ã­':'í', 'Ã': 'í'
};

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  
  for (let [bad, good] of Object.entries(dict)) {
    text = text.split(bad).join(good);
  }
  
  // also catch general ï¿½ replacing with reasonable guesses based on nearby chars
  // but it's risky, so we just do targeted strings.
  
  fs.writeFileSync(f, text, 'utf8');
  console.log('Fixed ' + f);
});
