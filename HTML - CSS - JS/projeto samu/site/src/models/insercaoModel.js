var database = require("../database/config")

function listar() {
    var instrucao = `
        select idFicha from ficha order by idFIcha desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAtributos(idFicha) {
    var instrucao = `
        select agilidade, inteligencia, vigor, presenca, forca from ficha where idFicha = ${idFicha};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrar(idFicha, idPericia) {
    var instrucao = `
        INSERT INTO fichaPericia VALUES (${idFicha}, ${idPericia}, 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listarAtributos,
    listar
};