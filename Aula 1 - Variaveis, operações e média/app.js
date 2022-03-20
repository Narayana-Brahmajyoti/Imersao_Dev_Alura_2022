function Calcular() {
    var notaDoPrimeiroBimestre = parseFloat(
        document.getElementById("primeiroBimestre").value
    );
    var notaDoSegundoBimestre = parseFloat(
        document.getElementById("segundoBimestre").value
    );
    var notaDoTerceiroBimestre = parseFloat(
        document.getElementById("terceiroBimestre").value
    );
    var notaDoQuartoBimestre = parseFloat(
        document.getElementById("quartoBimestre").value
    );
    var notaFinal =
        (notaDoPrimeiroBimestre +
            notaDoSegundoBimestre +
            notaDoTerceiroBimestre +
            notaDoQuartoBimestre) /
        4;
    var conteudo = document.getElementById("conteudo");
    notaFinal < 7
        ? (conteudo.innerHTML = "Que pena você foi reprovado, sua nota média é: " + notaFinal.toFixed(1))
        : (conteudo.innerHTML = "Parabéns!! Você foi aprovado, nota média é: " + notaFinal.toFixed(1));
}
