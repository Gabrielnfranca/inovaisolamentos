const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

html = html.replace(/<div class="text">[\s\S]*?<strong>isolamento térmico<\/strong>[\s\S]*?<\/div>[\s\S]*?<a class="go".*?<\/a>/, `<div class="text">Soluções de <strong>isolamento térmico</strong> sob medida, assegurando a conservação e qualidade térmica na indústria de laticínios.</div>`);
html = html.replace(/<div class="text">Isolamento térmico sanitário[\s\S]*?<\/div>[\s\S]*?<a class="go".*?<\/a>/, `<div class="text">Isolamento térmico constante, desenhado para manter o controle rigoroso da temperatura em linhas de produção de alimentos e bebidas.</div>`);
html = html.replace(/<div class="text">Máxima conservação de calor[\s\S]*?<\/div>[\s\S]*?<a class="go".*?<\/a>/, `<div class="text">Máxima proteção em caldeiras e turbinas rotativas, garantindo segurança na geração industrial de biocombustíveis.</div>`);
html = html.replace(/<div class="text">Revestimentos térmicos de alta performance[\s\S]*?<\/div>[\s\S]*?<a class="go".*?<\/a>/, `<div class="text">Revestimentos térmicos de alta exigência para vasos de pressão e tubulações, focados em otimizar a fabricação de papel e celulose.</div>`);

fs.writeFileSync("index.html", html, "utf8");
console.log("Regex replaces completed!");
