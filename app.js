console.log("rodando o sistema de gerenciamento de jogos")
function categoriaPeso(peso) {
    if (peso < 55) {
        return "Peso leve";
    } else if (peso < 65) {
        return "Peso meio-médio";
    } else if (peso < 75) {
        return "Peso médio";
    } else if (peso < 85) {
        return "Peso meio-pesado";
    } else {
        return "Peso pesado";
    }
}

function solucao(peso1, peso2) {
    const categoriaPeso1 = categoriaPeso(peso1);
    const categoriaPeso2 = categoriaPeso(peso2);

    if (categoriaPeso1 === categoriaPeso2) {
        return "PODEM LUTAR";
    } else {
        return "NAO PODEM LUTAR";
    }
}

console.log(solucao(60, 64)); 
console.log(solucao(55, 54));
