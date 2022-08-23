function soma(){
    var valor1 = document.getElementById("number1").value
    var valor2 = document.getElementById("number2").value

    var soma = Number(valor1)+Number(valor2)
    document.getElementById("resultado").value = soma
}

function subtracao(){
    var valor1 = document.getElementById("number1").value
    var valor2 = document.getElementById("number2").value

    var subtracao = Number(valor1)-Number(valor2)
    document.getElementById("resultado").value = subtracao
}

function multiplicacao(){
    var valor1 = document.getElementById("number1").value
    var valor2 = document.getElementById("number2").value

    var multiplicacao = Number(valor1)*Number(valor2)
    document.getElementById("resultado").value = multiplicacao
}

function divisao(){
    var valor1 = document.getElementById("number1").value
    var valor2 = document.getElementById("number2").value

    var divisao = Number(valor1)/Number(valor2)
    document.getElementById("resultado").value = divisao
}