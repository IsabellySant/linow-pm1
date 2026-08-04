    let nomeEvento = "Liga Universitária";
    let nomeCidadeEvento = "Foz do iguaçu";
    let anoEvento = "2026";

    const equipesEvento = ['Binary Masters', 'Code Warriors', 'Bug Hunters', 'Stack Legends', 'Null Squad'];
    const pontuacaoEquipe = [10, 25, 15, 30, 60];
    let somaPontuacao = 0;
    let mediaPontuacao = 0;
    let maiorPontuacao = 0;

    console.log(`A ${nomeEvento} acontecerá em ${nomeCidadeEvento} no ano de ${anoEvento}.`);

    console.log(`\nTotal de equipes no evento: ${equipesEvento.length}`);
    console.log(`Primeira equipe: ${equipesEvento[0]}`);
    console.log(`Última equipe: ${equipesEvento[4]}`);

    for (let i = 0; i < equipesEvento.length; i++) {
        console.log(`\nA equipe ${equipesEvento[i]} possui ${pontuacaoEquipe[i]} pontos.`);
    }

console.log(`
=================================

RELATÓRIO DO TORNEIO

=================================\n`);

for (let i = 0; i < equipesEvento.length; i++) {
    console.log(`Equipe: ${equipesEvento[i]} 
pontos: ${pontuacaoEquipe[i]}\n`);
}

function calcularSoma() {
    somaPontuacao = 0;
    for (let i = 0; i < pontuacaoEquipe.length; i++) {
        somaPontuacao += pontuacaoEquipe[i];
    }
}

function calcularMedia() {
    mediaPontuacao = somaPontuacao / pontuacaoEquipe.length;
}

function encontrarMaiorPontuacao() {
    maiorPontuacao = pontuacaoEquipe[0];
    for (let i = 1; i < pontuacaoEquipe.length; i++) {
        if (pontuacaoEquipe[i] > maiorPontuacao) {
            maiorPontuacao = pontuacaoEquipe[i];
        }
    }
}

calcularSoma();
console.log(`\nSoma total de pontos: ${somaPontuacao}`);

calcularMedia();
console.log(`Média de pontos: ${mediaPontuacao}`);

encontrarMaiorPontuacao();
console.log(`Maior pontuação: ${maiorPontuacao}`);;