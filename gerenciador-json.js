//gerenciador-json.js

const fs = require('fs');
const path = require('path');

//TODO: Defina o caminho do arquivo
const arquivoUsuarios = /TODO: path.join(__dirname, 'usuarios.json')*/;

//TODO: Função para criar arquivo inicial se não existir
function criarArquivoInicial() {
    const usuariosIniciais = [

    ];
    
    if(!fs.existsSync(arquivoUsuarios)) {

        fs.writeFileSync();
        console.log('Arquivo usuarios.json criado!');
    }
}


function lerUsuarios() {
    try {

        const dados = fs.readFileSync();
        return;
    } catch (error) {
        console.error('Erro ao ler usuários:', error.message);
        return [];
    }
}


function adicionarUsuario(nome, email,idade) {
    const usuarios = /TODO: Chame lerUsuarios() /;

    const novoUsuario = {

        id: usuarios.legth + 1,
        nome,
        email,
        idade
    };


    usuarios.push(novoUsuario);


    fs.writeFileSync();
    console.log(`Usuário ${nome} adicionando!`);
}


function listarUsuarios() {
    const usuarios = /TODO: Chame lerUsuarios()/;
    console.log('=== LISTA DE USUÁRIOS ===');

}


criarArquivoInicial();
