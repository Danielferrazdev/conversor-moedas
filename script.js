function converter() {
    let resultado = document.getElementById("resultado")
    let valoremreal = document.getElementById("valor").value
    let valordodia = 4
    
    let valoremdolar = valoremreal / valordodia

    
    resultado.innerHTML = " O valor em Dólar é: U$" + valoremdolar
}