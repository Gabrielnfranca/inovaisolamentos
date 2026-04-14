const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const galleryStart = '<div class="filter-list clearfix">';
let endIndex = html.indexOf('<!--End Project Section-->');

let startIndex = html.indexOf(galleryStart);
if (startIndex === -1 || endIndex === -1) {
    console.error("Gallery start/end not found!");
    process.exit(1);
}

const wURL = 'https://api.whatsapp.com/send?phone=+5511983037647';
const wURL2 = 'https://wa.me/5519992451368';

function makeBlock(categoryClass, categoryTitle, imgSrc, h3Text, linkOverride, detailTitle, specificUrl) {
    const url = specificUrl || wURL;
    const detailsH4 = linkOverride || 'Ver Detalhes';
    const detailT = detailTitle || categoryTitle;

    return `
                    <!--Project Block Two-->
                    <div class="project-block-two mix all ${categoryClass} col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="inner-box">
                            <div class="image">
                                <img src="${imgSrc}" alt="${h3Text}" />
                            </div>
                            <div class="lower-box">
                                <h3>${h3Text}</h3>
                                <div class="title">${categoryTitle}</div>
                                <div class="go-title">Ver Detalhes <span class="icon flaticon-arrow-pointing-to-right"></span></div>
                            </div>
                            <div class="overlay-content" style="background-image:url('${imgSrc}')">
                                <div class="overlay-inner">
                                    <h4><a href="${url}" target="_blank">${detailsH4}</a></h4>
                                    <div class="title">${detailT}</div>
                                    <a class="go" href="${url}" target="_blank">Solicitar Orçamento <span class="icon flaticon-arrow-pointing-to-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
}

const tubImages = [
    'images/services/Tubulações/04e4df72-079c-446d-89b8-eab83a299a6e.JPG',
    'images/services/Tubulações/0d7edbfb-f9de-4ed6-84a0-6dc0c76ebf6a.JPG',
    'images/services/Tubulações/2eb87cb9-2354-43ac-8d6e-46a17ae5fa0a.JPG',
    'images/services/Tubulações/53540b4f-0cbe-4dc3-b003-e0be4671a4d8.JPG'
];

const equipImages = [
    'images/services/Equipamento/05df710e-f358-4415-806a-09b7409395ca.JPG',
    'images/services/Equipamento/107007e1-8c35-43d9-a45e-5879c2c5bd9e.JPG',
    'images/services/Equipamento/2d0edc99-84e2-4366-8056-72e906f38c75.JPG',
    'images/services/Equipamento/4300a9c6-c958-484b-bf43-f8e1e69f8435.JPG'
];

let newGalleryHtml = '<div class="filter-list clearfix">\n';

tubImages.forEach(img => newGalleryHtml += makeBlock('tubulacao', 'Tubulações', img, 'Isolamento de Tubulações'));
equipImages.forEach(img => newGalleryHtml += makeBlock('equipamentos', 'Equipamentos', img, 'Equipamento Industrial'));
newGalleryHtml += makeBlock('caldeiras', 'Caldeiras', 'images/services/Caldeiras/fb6911c5-1b69-47c0-85c8-e6e25fc743cc.JPG', 'Isolamento de Caldeiras');
newGalleryHtml += makeBlock('funilaria', 'Funilaria Industrial', 'images/resource/project-4.jpg', 'Remoção e Reinstalação de Chapas', 'Revestimento em Alumínio', 'Proteção Mecânica', wURL2);
newGalleryHtml += makeBlock('funilaria', 'Funilaria Industrial', 'images/resource/project-6.jpg', 'Chapas de Alumínio Corrugado', 'Chapas de Alumínio Corrugado', 'Proteção Mecânica', wURL2);

let endHtml = `
                </div>
            </div>
        </div>
    </section>
    
    <!--`;

fs.writeFileSync('index.html', html.substring(0, startIndex) + newGalleryHtml + endHtml + html.substring(endIndex + 4), 'utf8');

// Also ensuring encoding doesn't break
let text = fs.readFileSync('index.html', 'utf8');
text = text.replace(/TÃ©rmico/g, 'Térmico').replace(/TubulaÃ§Ãµes/g, 'Tubulações').replace(/Ã§/g, 'ç').replace(/Ãµ/g, 'õ').replace(/Ã£/g, 'ã').replace(/Ã©/g, 'é').replace(/Ã/g, 'í').replace(/Â/g, '');
fs.writeFileSync('index.html', text, 'utf8');
