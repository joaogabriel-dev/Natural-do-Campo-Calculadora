function calcularInsumos() {
    // Obter o número de pamonhas inserido pelo usuário
    var numPamonhas = document.getElementById("numPamonhas").value;

    // Calcular a quantidade de cada ingrediente necessário
    var agua = numPamonhas * 0.13333333333; // 40 kg / 300 pamonhas
    var milho = numPamonhas * 0.1; // 30 kg / 300 pamonhas
    var acucar = numPamonhas * 0.03333333333; // 10 kg / 300 pamonhas
    var amidoMilho = numPamonhas * 0.01; // 3 kg / 300 pamonhas
    var sal = numPamonhas * 0.5; // 150 g / 300 pamonhas
    var corante = numPamonhas * 0.2; // 60 ml / 300 pamonhas

    // Exibir os resultados na página HTML
    document.getElementById("resultados").innerHTML =
        "<h2>Quantidade de Ingredientes Necessários:</h2>" +
        "<p>Água: " + agua.toFixed(2) + " litros</p>" +
        "<p>Milho: " + milho.toFixed(2) + " kg</p>" +
        "<p>Açúcar: " + acucar.toFixed(2) + " kg</p>" +
        "<p>Amido de Milho: " + amidoMilho.toFixed(2) + " kg</p>" +
        "<p>Sal: " + sal.toFixed(2) + " g</p>" +
        "<p>Corante: " + corante.toFixed(2) + " ml</p>";
}

// Chamar a função calcularInsumos() quando o formulário for enviado
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que a página seja recarregada
    calcularInsumos();
});