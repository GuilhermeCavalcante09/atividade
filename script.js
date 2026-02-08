const links = [
    "https://exame.com/ciencia/robos-com-camuflagem-inspirada-em-polvos-podem-se-tornar-realidade/",
    "https://exame.com/ciencia/as-inovacoes-que-marcaram-o-setor-espacial-em-2025/",
    "https://exame.com/invest/mercados/certificou-pode-voar-quando-os-carros-voadores-entrarao-em-operacao/",
    "https://exame.com/future-of-money/ia-seguranca-a-formula-inegociavel-para-o-setor-financeiro-2/"

    "https://guilhermecavalcante09.github.io/qr-/"
];

const frame = document.getElementById("frame");
const loading = document.getElementById("loading");

function abrirLink(index) {
    const url = links[index];

    loading.style.display = "block";
    loading.innerText = "Carregando conteúdo...";
    frame.style.display = "none";

    frame.src = url;

    frame.onload = () => {
        loading.style.display = "none";
        frame.style.display = "block";
    };
}

