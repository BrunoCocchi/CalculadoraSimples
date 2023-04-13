function cliqueSoma() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = Number(num1);
    num2 = Number(num2);

    let soma = num1 + num2;
    console.log("O resultado da soma é: ", soma);
    alert('O resultado da Soma é:  ' + soma)
    appendToHistory(num1, num2, "+", soma);

}

function cliqueSub() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = Number(num1);
    num2 = Number(num2);

    let sub = num1 - num2;
    console.log("O resultado da Subtração é: ", sub);
    alert('O resultado da Subtração é:  ' + sub)
    
}

function cliqueDiv() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = Number(num1);
    num2 = Number(num2);

    let div = num1 / num2;
    console.log("O resultado da Divisão é: ", div);
    alert('O resultado da Divisão é:  ' + div)
}

function cliqueMult() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = Number(num1);
    num2 = Number(num2);

    let mult = num1 * num2;
    console.log("O resultado da Multiplicação é: ", mult);
    alert('O resultado da Multiplicação é:  ' + mult)
}