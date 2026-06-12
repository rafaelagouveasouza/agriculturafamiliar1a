const cupons = [
    {
        codigo: "CAMPO10",
        desconto: "10% de desconto"
    },
    {
        codigo: "FAMILIA15",
        desconto: "15% de desconto"
    },
    {
        codigo: "HORTA20",
        desconto: "20% de desconto"
    },
    {
        codigo: "VERDE25",
        desconto: "25% de desconto"
    }
];

const botaoCupom = document.getElementById("btnCupom");

botaoCupom.addEventListener("click", gerarCupom);

function gerarCupom() {

    const indice = Math.floor(Math.random() * cupons.length);

    const cupom = cupons[indice];

    document.getElementById("resultado-cupom").innerHTML = `
        <div class="cupom-gerado">
            <h3>🎉 Parabéns!</h3>

            <p>Seu cupom promocional é:</p>

            <h2>${cupom.codigo}</h2>

            <p><strong>${cupom.desconto}</strong></p>

            <p>
                Valorize a agricultura familiar e fortaleça os pequenos produtores locais.
            </p>
        </div>
    `;
}

function rolarParaCupom() {
    document.getElementById("cupom").scrollIntoView({
        behavior: "smooth"
    });
}
