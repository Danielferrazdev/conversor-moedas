function converter() {
    let resultado = document.getElementById("resultado")
    let valoremreal = document.getElementById("valor").value
    let valordodia = 4
    
    if (isNaN(valoremreal) || valoremreal <= 0) {
        // Mostra a mensagem na tela
        const erro = document.getElementById('mensagemErro');
        erro.style.display = 'block';
    
        // Oculta depois de alguns segundos (opcional)
        setTimeout(() => {
            erro.style.display = 'none';
        }, 3000); // Esconde após 3 segundos
    
        return;
    }
    

    
    let valoremdolar = valoremreal / valordodia

    
    resultado.innerHTML = " O valor em Dólar é:<br> U$ " + valoremdolar.toFixed(2)
}
