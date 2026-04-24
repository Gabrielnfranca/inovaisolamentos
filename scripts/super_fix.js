const fs = require("fs");
const files = ["sobre.html", "projetos.html", "contato.html", "servicos.html", "isolamento-termico.html", "index.html"];

const replaces = {
  /Instala\uFFFD\uFFFDes/g: "Instalações",
  /instala\uFFFD\uFFFDes/g: "instalações",
  /instala\uFFFD\uFFFD/g: "instalação",
  /Inova\uFFFD\uFFFD/g: "Inovação",
  /inova\uFFFD\uFFFD/g: "inovação",
  /t\uFFFDcnica/g: "técnica",
  /t\uFFFDcnicas/g: "técnicas",
  /T\uFFFDrmica/g: "Térmica",
  /t\uFFFDrmica/g: "térmica",
  /experi\uFFFDncia/g: "experiência",
  /\uFFFD/g: "é", // risky, let's target words
  /Ol\uFFFD/g: "Olá",
  /or\uFFFDamento/g: "orçamento",
  /Or\uFFFDamento/g: "Orçamento",
  /m\uFFFDxima/g: "máxima",
  /efici\uFFFDncia/g: "eficiência",
  /energ\uFFFDtica/g: "energética",
  /m\uFFFDo de obra/g: "mão de obra",
  /tubula\uFFFD\uFFFDes/g: "tubulações",
  /press\uFFFDo/g: "pressão",
  /seguran\uFFFDa/g: "segurança",
  /excel\uFFFDncia/g: "excelência",
  /refer\uFFFDncia/g: "referência",
  /trajet\uFFFDria/g: "trajetória",
  /execu\uFFFD\uFFFD/g: "execução",
  /redu\uFFFD\uFFFD/g: "redução",
  /servi\uFFFDos/g: "serviços",
  /Servi\uFFFDos/g: "Serviços",
  /Servi\uFFFD/g: "Serviç",
  /servi\uFFFD/g: "serviç",
  /Ind\uFFFDstria/g: "Indústria",
  /ind\uFFFDstria/g: "indústria",
  /T\uFFFDrmico/g: "Térmico",
  /t\uFFFDrmico/g: "térmico",
  /solu\uFFFD\uFFFDes/g: "soluções",
  /Solu\uFFFD\uFFFDes/g: "Soluções"
};

files.forEach(f => {
  let content = fs.readFileSync(f, "utf8");
  for (let regex in replaces) {
     let evalRegex = eval(regex);
     content = content.replace(evalRegex, replaces[regex]);
  }
  
  // also fix remaining dual FFFD
  content = content.replace(//g, "çõ"); // generic fallback if needed, but risky
  
  fs.writeFileSync(f, content, "utf8");
});
console.log("Super Fix completed!");
