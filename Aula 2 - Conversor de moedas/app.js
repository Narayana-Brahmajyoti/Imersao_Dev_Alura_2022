function Converter() {
    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    var valorEmDolarNumererico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumererico * 5;
    
console.log(valorEmReal);
}

Converter()