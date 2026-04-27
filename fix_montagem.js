const fs = require('fs');
let html = fs.readFileSync('montagem-de-chapa.html', 'utf8');

html = html.replace(
  'O <strong>isolamento térmico industrial</strong> é um investimento estratégico fundamental para qualquer empresa que busca reduzir custos operacionais e aumentar a segurança. Na <strong>Inova Isolamentos Térmicos</strong>, projetamos soluções sob medida para conter perdas de calor e proteger seus ativos mais valiosos.',
  'A <strong>montagem de chapa e funilaria industrial</strong> atua como a proteção externa essencial para sistemas isolados termicamente ou processos mecânicos expostos. Na <strong>Inova Isolamentos</strong>, confeccionamos sob medida e instalamos chapas que garantem durabilidade, estética e resistência aos seus equipamentos industriais.'
);

html = html.replace('Por que investir em Isolamento Térmico?', 'Por que investir em Revestimento Metálico?');

html = html.replace(
  'Em processos industriais onde o controle de temperatura é crí­tico, falhas no isolamento podem resultar em gastos excessivos com combustí­vel e energia elétrica. Nossa abordagem técnica garante uma barreira eficiente contra a troca de calor com o ambiente externo.',
  'O revestimento metálico protege materiais de isolamento contra intempéries, desgaste físico e químico, garantindo propriedades prolongadas e evitando a condensação externa precoce em tubulações, dutos e caldeiras.'
);

let oldList = \<li style="margin-bottom: 10px;"><strong>Economia de Energia:</strong> Redução significativa na dissipação de calor em tubulações, caldeiras e fornos, diminuindo o consumo de gás, óleo ou eletricidade.</li>
                                    <li style="margin-bottom: 10px;"><strong>Segurança Operacional:</strong> Proteção de colaboradores contra queimaduras por contato em superfí­cies superaquecidas e redução da temperatura ambiente no local de trabalho.</li>
                                    <li style="margin-bottom: 10px;"><strong>Controle de Processo:</strong> Manutenção da temperatura ideal estável, essencial para a qualidade final de produtos quí­micos, alimentí­cios e farmacêuticos.</li>
                                    <li style="margin-bottom: 10px;"><strong>Sustentabilidade:</strong> A maior eficiência energética reduz a pegada de carbono da sua indústria, contribuindo para metas ambientais e regulatórias.</li>\;

let newList = \<li style="margin-bottom: 10px;"><strong>Proteção Mecânica Constante:</strong> As chapas resistem a choques diretos e atrito, estendendo a vida útil de tubulações e não deixando o isolamento ser esmagado.</li>
                                    <li style="margin-bottom: 10px;"><strong>Estanqueidade Contra Umidade:</strong> Impede que chuvas e fluidos entrem, anulando os riscos de oxidação de canos ou empastamento de lãs isolantes subjacentes.</li>
                                    <li style="margin-bottom: 10px;"><strong>Resistência Anticorrosiva:</strong> Selecionamos o tipo ideal de chapa (alumínio liso, corrugado, galvanizado ou inox) conforme a agressão química do ambiente e a criticidade da planta.</li>
                                    <li style="margin-bottom: 10px;"><strong>Puro Padrão Estético e Higiene:</strong> O acabamento final liso em chapa assegura facilidade de lavagem, sanitização constante e aprovação nas inspeções de saúde (ex: indústrias alimentícias e sanitárias).</li>\;

html = html.replace(oldList, newList);

html = html.replace('Soluções e Materiais de Alta Qualidade', 'Tipos de Chapa e Montagens Estruturadas');

let oldList2Match = /Trabalhamos com os melhores isolantes térmicos do mercado mundial(.*?)proteger seus ativos mais valiosos./s;
let newList2Str = \Trabalhamos com os melhores isolantes térmicos.*\; // dummy comment
let regex2 = /Trabalhamos com os melhores isolantes térmicos do mercado mundial.*?cada caloria gerada seja aproveitada ao máximo no seu processo produtivo./s;
let newTextH3 = \Executamos recortes, frisos e adaptações funileiras exclusivas para o dimensional correto de cada maquinário utilizando chapas rígidamente normatizadas:</p>
                                
                                <p style="margin-bottom: 15px;"><strong>Chapa de Alumínio Liso:</strong> Material muito flexível para modelagem cilíndrica e excelente contra oxidação natural leve, possui formidável custo-benefício e manutenção de higiene.</p>
                                <p style="margin-bottom: 15px;"><strong>Chapa de Alumínio Corrugado:</strong> Absorve de forma primorosa eventuais choques físicos e dilatações térmicas intensas; sua corrugação superficial serve de alívio mecânico contínuo da peça.</p>
                                <p style="margin-bottom: 15px;"><strong>Chapa em Aço Inox (Séries 300 e 400):</strong> Nobre e indispensável para ambientes imensamente corrosivos, zonas molhadas por sais minerais, polos litorâneos e rigor químico.</p>
                                <p style="margin-bottom: 30px;"><strong>Chapa de Aço Galvanizado:</strong> Opção de estupenda resiliência estrutural, excelente em ambientes fechados onde há risco rotineiro de empilhadeiras baterem nas redes sem necessitar beleza estética pura.</p>
                                
                                <p style="margin-bottom: 40px;">A fixação técnica na folga perfeita com cintos de aperto e parafusos de inox garante que o revestimento permaneça imutável. Com a equipe Inova, você assegura a estabilidade produtiva do conjunto isolado por anos a fio.\;
html = html.replace(regex2, newTextH3);

html = html.replace('alt="Serviço de Isolamento Térmico Industrial - Inova"', 'alt="Serviço de Montagem de Chapa e Revestimento Metálico - Inova"');
html = html.replace('alt="Isolamento de Tubulações Industriais - Inova"', 'alt="Instalação de Chapas Metálicas - Inova"');
html = html.replace('Exemplo de isolamento em tubulações industriais executado pela nossa equipe.', 'Exemplo de acabamento sob medida em chapa de alumínio liso sobre tubulações.');

html = html.replace('a melhor solução técnica em isolamento térmico.', 'a melhor solução de funilaria, revestimentos em chapa e cortes sob medida.');
html = html.replace('<li><strong>Especialidade :</strong> Isolações Térmicas</li>', '<li><strong>Especialidade :</strong> Revestimentos e Chapas</li>');
html = html.replace('<li><strong>Materiais :</strong> Lã de Rocha / Vidro</li>', '<li><strong>Materiais :</strong> Alumínio, Inox e Galvalume</li>');

let oldSelect = \<select class="custom-select-box">
                                            <option>Selecione o Serviço</option>
                                            <option>Isolamento Térmico</option>
                                            <option>Funilaria Industrial</option>
                                            <li>Outros</li>
                                        </select>\;
let newSelect = \<select class="custom-select-box" name="servico">
                                            <option>Selecione o Serviço</option>
                                            <option>Montagem de Chapa / Funilaria</option>
                                            <option>Isolamento Térmico</option>
                                            <option>Outros</option>
                                        </select>\;
html = html.replace(oldSelect, newSelect);
html = html.replace('Back to Home', 'Voltar ao Início');

// Make sure to write file preserving UTF-8 correctly
fs.writeFileSync('montagem-de-chapa.html', html, 'utf8');
console.log('Todos os textos trocados e UTF-8 preservado.');
