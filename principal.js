function calcular() {
var numero1 = parseFloat(document.getElementById ('numero1').value);
var numero2 = parseFloat(document.getElementById('numero2').value);

var add = numero1 + numero2;
var sub = numero1 - numero2;
var div = numero1 / numero2;
var mul = numero1 * numero2;

document.getElementById('soma').innerText = "Soma: " + add;
document.getElementById('subtracao').innerText = "Subtração: " + sub;
document.getElementById('multiplicacao').innerText = "Multiplicação: " + mul;
document.getElementById('divisao').innerHTML = "Divisão: " + div;
}