
/**
 * @param {string} nomeFilme 
 * @param {string} dataDevolucao - 
 * @returns {Object} 
 */
export function alugarFilme(nomeFilme, dataDevolucao) {
    const dataAluguel = new Date().toLocaleDateString('pt-BR');
    
    return {
        sucesso: true,
        filme: nomeFilme,
        dataAluguel,
        dataDevolucao,
        mensagem: `Filme "${nomeFilme}" alugado com sucesso! Devolução prevista para ${dataDevolucao}.`
    };
}

/** 
 * @returns {Array<string>}
 */
export function listarFilmesDisponiveis() {
    return [
        "Jurassic Park",
        "Carros 3",
        "Velozes e Furiosos 2",
        "Gran turismo",
        "Pelé"
    ];
}

export default {
    alugarFilme,
    listarFilmesDisponiveis
};