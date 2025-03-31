function converter() {
    let resultado = document.getElementById("resultado")
    let valoremreal = document.getElementById("valor").value
    let valordodia = 4
    
    if (isNaN(valoremreal) || valoremreal <= 0) { 
        /* isNaN - Impede que o usuário insira um valor inválido */
        alert ("Por favor, digitar um valor válido em Real");
        return;
    }

    let valoremdolar = valoremreal / valordodia

    
    resultado.innerHTML = " O valor em Dólar é:<br> U$ " + valoremdolar.toFixed(2)
}