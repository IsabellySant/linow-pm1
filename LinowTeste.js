    let nomeEvento = "Liga Universitária";
    let nomeCidadeEvento = "Foz do iguaçu";
    let anoEvento = "2026";

    const equipesEvento = ['Binary Masters', 'Code Warriors', 'Bug Hunters', 'Stack Legends', 'Null Squad'];
    const pontuacaoEquipe = ['10', '25', '15', '30', '60'];

    console.log(`A ${nomeEvento} acontecerá em ${nomeCidadeEvento} no ano de ${anoEvento}.`)

    console.log(`Total de equipes no evento: ` + (equipesEvento.length));
    console.log(`Primeira equipe: ` + (equipesEvento[0]));
    console.log(`Última equipe: ` + (equipesEvento[4]));

    console.log(`A equipe ${equipesEvento[0]} possui ${pontuacaoEquipe[0]} pontos.`);
    console.log(`A equipe ${equipesEvento[1]} possui ${pontuacaoEquipe[1]} pontos.`);
    console.log(`A equipe ${equipesEvento[2]} possui ${pontuacaoEquipe[2]} pontos.`);
    console.log(`A equipe ${equipesEvento[3]} possui ${pontuacaoEquipe[3]} pontos.`);
    console.log(`A equipe ${equipesEvento[4]} possui ${pontuacaoEquipe[4]} pontos.`);

    console.log(
`=================================

RELATÓRIO DO TORNEIO

=================================`);

console.log(`Equipe: ${equipesEvento[0]} 
pontos: ${pontuacaoEquipe[0]}\n`);

console.log(`Equipe: ${equipesEvento[1]} 
pontos: ${pontuacaoEquipe[1]}\n`);

console.log(`Equipe: ${equipesEvento[2]} 
pontos: ${pontuacaoEquipe[2]}\n`);

console.log(`Equipe: ${equipesEvento[3]} 
pontos: ${pontuacaoEquipe[3]}\n`);

console.log(`Equipe: ${equipesEvento[4]} 
pontos: ${pontuacaoEquipe[4]}\n`);