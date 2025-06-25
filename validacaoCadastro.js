addEventListener("submit",(event)=>{
    event.preventDefault();
    validarNome();
    validarIdade();
    validarCpf();
    validarSenha();
    validarConfirmarSenha();
})


//NOME

function validarNome(){
    let nome = document.getElementById('inputNome').value;
    
    function nomeUsuarioCorreto(nome) {
        
        for (let i = 0; i < nome.length; i++) {
            if(nome[i] >= '0' && nome[i] <= '9'){
                console.log("Nome completo não deve haver números");
                return;
            }
        }
        return nome;
    }
    let nomeValido = nomeUsuarioCorreto(nome);
    
    if(nomeValido){
        if(nomeValido.length <= 3 || nomeValido.length >= 150){
            console.log("Nome deve ter entre 3 à 150 caracteres");
        }
    }
}
    //////////////////////
    //IDADE
function validarIdade(){
    let idade = document.getElementById('inputIdade').value;
    if (idade < 10 || idade > 130) {
        console.log("Idade deve ser superior à 10 anos e inferior à 130 anos");
    }
}

    //////////////////////
    //EMAIL

    //////////////////////
    //CPF
function validarCpf(){
    let cpf = document.getElementById('inputCpf').value;
    if (cpf.length !== 11) {
        console.log("Cpf inválido por falta de números");
    }
    
    for (let i = 0; i < cpf.length; i++) {
        if (isNaN(cpf[i])) {
            console.log("Cpf não deve haver letras ou caracteres especiais");
        }
    }


    let primeiroDigitoCpf = 0;
    for (let i = 0; i < 9; i++) { //multiplica os 9 primeiros numeros
        primeiroDigitoCpf += (Number(cpf[i]) * (10 - i));
    }
    primeiroDigitoCpf =  11 - (primeiroDigitoCpf % 11);
    
    if (primeiroDigitoCpf >= 10) {
        primeiroDigitoCpf = 0;
    } //se for menor continuara com o mesmo valor
    
    
    let segundoDigitoCpf = 0;
    for (let i = 0; i < 10; i++) { //multiplica os 9 primeiros numeros
        segundoDigitoCpf += (Number(cpf[i]) * (11 - i));
    }
    segundoDigitoCpf = 11 - (segundoDigitoCpf % 11);
    if (segundoDigitoCpf >= 10) {
        segundoDigitoCpf = 0;
    } //se for menor continuara com o mesmo valor
    
    if (primeiroDigitoCpf != cpf[cpf.length - 2] || segundoDigitoCpf != cpf[cpf.length - 1]) {
        console.log("Cpf inválido, pois a ordem ou os números estão incorretos");
    }
}
    

    //////////////////////
    //TELEFONE 

    //////////////////////
    //SENHA
function validarSenha(){
    let senha = document.getElementById('inputSenha').value;
    let caracterEspecialSenha = false;

    for (let i = 0; i < senha.length; i++) {
        if (senha[i] == "@" || senha[i] == "!") {
            caracterEspecialSenha = true;
        }
    }

    if (senha.length < 6 || senha.length > 15) {
        console.log("Senha deve haver de 6 à 15 caracteres");
    }
    if (caracterEspecialSenha != true) {
        console.log("A sua senha deve ter pelo menos '@' ou '!'");
    }
    return senha
}
//////////////////////
    //CONFIRMAR SENHA
function validarConfirmarSenha(){   
    let confirmarSenha = document.getElementById('inputConfirmarSenha').value;

    if (confirmarSenha != validarSenha()) {
        console.log("A confirmação de senha está diferente da senha");
    }
}
