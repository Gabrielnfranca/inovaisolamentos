const fs = require("fs");
const files = ["sobre.html", "projetos.html", "contato.html", "servicos.html", "isolamento-termico.html", "index.html"];

files.forEach(f => {
  let content = fs.readFileSync(f, "utf8");
  
  // Substitui explicitamente o char \uFFFD (Replacement Character) de palavras conhecidas
  content = content.replace(/T\uFFFDrmico/g, "Térmico");
  content = content.replace(/t\uFFFDrmico/g, "térmico");
  content = content.replace(/solu\uFFFD\uFFFDes/g, "soluções");
  content = content.replace(/ind\uFFFDstria/g, "indústria");
  content = content.replace(/Ind\uFFFDstria/g, "Indústria");
  content = content.replace(/T\uFFFDrmicas/g, "Térmicas");
  content = content.replace(/t\uFFFDrmicas/g, "térmicas");
  content = content.replace(/efici\uFFFDncia/g, "eficiência");
  content = content.replace(/energ\uFFFDtica/g, "energética");
  content = content.replace(/di\uFFFDrio/g, "diário");
  
  fs.writeFileSync(f, content, "utf8");
});
console.log("Fixed com regex FFFD!");
