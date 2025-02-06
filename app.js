alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = Math.floor(Math.random()*30)+1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual a 19
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 30 ');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    } 
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
