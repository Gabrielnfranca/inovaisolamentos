
const fs = require('fs');
const cheerio = require('cheerio');

const filePath = 'montagem-de-chapa.html';
const html = fs.readFileSync(filePath, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Atualizar Header/Título Banner
$('.page-breadcrumb li').last().text('Montagem de Chapa / Funilaria Industrial');
$('.page-title h1').text('Montagem de Chapa e Funilaria Industrial');

// 2. Corrigir o bloco de CONTEÚDO PRINCIPAL
const contentArea = $('.content-column .inner-column .text');

const seoContent = `
<p style='margin-bottom: 25px;'>A <strong>montagem de chapa e funilaria industrial</strong> é a etapa primordial para garantir a integridade estrutural e a proteção de sistemas em plantas produtivas. Na <strong>Inova Isolamentos</strong>, operamos com o que há de mais moderno em corte, dobra e montagem de revestimentos metálicos, assegurando que seus equipamentos, tubulações e tanques fiquem blindados contra o ambiente externo.</p>

<h3 style='margin-top: 30px; margin-bottom: 20px;'>Excelência em Revestimento Metálico e Proteção Mecânica</h3>
<p style='margin-bottom: 20px;'>Muitos processos industriais utilizam isolantes térmicos que, se ficarem expostos, perdem sua eficácia rapidamente devido à umidade e impactos físicos. Nosso serviço de funilaria industrial resolve este problema criando uma barreira de alta durabilidade com acabamentos precisos em alumínio, aço inox ou chapas galvanizadas.</p>

<ul class='list-style-one' style='margin-bottom: 30px;'>
    <li style='margin-bottom: 10px;'><strong>Resistência Total:</strong> Chapas moldadas para suportar intempéries (sol, chuva) e agressões mecânicas no dia a dia da fábrica.</li>
    <li style='margin-bottom: 10px;'><strong>Estanqueidade:</strong> Vedação absoluta que impede a infiltração de água, protegendo o revestimento interno e evitando corrosão sob isolamento (CUI).</li>
    <li style='margin-bottom: 10px;'><strong>Acabamentos Diversificados:</strong> Projetos em Alumínio Liso, Alumínio Corrugado, Aço Inox (AISI 304/316) e Chapas Galvalume.</li>
    <li style='margin-bottom: 10px;'><strong>Padrão Sanitário:</strong> Montagens específicas para indústrias de alimentos e bebidas, seguindo rigorosos padrões de higiene e fácil limpeza.</li>
</ul>

<div class='image' style='margin-top: 40px; margin-bottom: 40px;'>
    <img src='images/services/Funilária/c5597750-beab-495c-9c98-1755146c6be1.JPG' alt='Serviço de Funilaria Industrial e Montagem de Chapas - Inova' style='width: 100%; border-radius: 8px;' />
    <p style='font-style: italic; font-size: 13px; color: #777; margin-top: 10px;'>Exemplo de montagem de chapa em tubulações com acabamento de alta precisão técnica.</p>
</div>

<h3 style='margin-top: 30px; margin-bottom: 20px;'>Especialistas em Funilaria Industrial em São Paulo</h3>
<p style='margin-bottom: 20px;'>A Inova Isolamentos possui técnicos especializados na fabricação de peças de funilaria sob medida, como caixas de válvulas, curvas, reduções e terminais. Utilizamos equipamentos de ponta para garantir que cada vinco e rebite contribua para a estanqueidade total do sistema.</p>

<p style='margin-bottom: 15px;'><strong>Durabilidade:</strong> Nossos revestimentos são projetados para durar décadas, mesmo em ambientes corrosivos e litorâneos.</p>
<p style='margin-bottom: 30px;'><strong>Precisão:</strong> Cada projeto de chapa é moldado especificamente para o dimensional real do equipamento, eliminando frestas e pontos de infiltração.</p>

<p style='margin-bottom: 40px;'>Garanta o melhor acabamento para sua indústria. A montagem técnica de chapas da <strong>Inova</strong> é sinônimo de segurança operacional e valorização do patrimônio industrial.</p>

<div class='cta-box' style='background: #272727; padding: 40px; border-radius: 10px; text-align: center; color: #fff; margin-top: 50px;'>
    <h3 style='color: #fff; margin-bottom: 15px;'>Precisa de Funilaria Industrial ou Revestimento em Chapa?</h3>
    <p style='color: #ddd; margin-bottom: 25px;'>Nossa equipe técnica está pronta para executar seu projeto com máxima precisão e agilidade.</p>
    <a href='https://api.whatsapp.com/send?phone=+5511983037647' class='theme-btn btn-style-one' style='padding: 15px 40px;'>
        Solicitar Orçamento de Chapas <span class='fa fa-whatsapp' style='margin-left: 10px;'></span>
    </a>
</div>
`;

contentArea.html(seoContent);

// 3. Atualizar Imagens e Alts
$('.project-single-section .inner-box > .image img').attr('src', 'images/services/Funilária/654876b0-13f5-46fd-abf6-a4da12bd8788.JPG');
$('.project-single-section .inner-box > .image img').attr('alt', 'Montagem de Chapa e Revestimento Metálico Industrial');

// 4. Sidebar
$('.info-column .inner-column ul').html(`
    <li><strong>Especialidade :</strong> Funilaria e Chapas</li>
    <li><strong>Chapas :</strong> Alumínio / Inox / Galv</li>
    <li><strong>Tipo :</strong> Revestimento de Proteção</li>
    <li><strong>Atendimento :</strong> Todo o Brasil</li>
`);

// 5. Rodapé
$('.footer-widget.material-widget ul').html(`
    <li><span class='icon flaticon-engineer' style='top: 0px; font-size: 32px;'></span><a href='montagem-de-chapa.html' style='padding-top: 7px;'>Montagem de Chapa</a></li>
    <li><span class='icon flaticon-engineer' style='top: 0px; font-size: 32px;'></span><a href='isolamento-termico.html' style='padding-top: 7px;'>Isolamento Térmico</a></li>
`);

fs.writeFileSync(filePath, $.html(), 'utf8');
console.log('CONTEÚDO FOI TOTALMENTE REESCRITO PARA MONTAGEM DE CHAPA COM SEO');
