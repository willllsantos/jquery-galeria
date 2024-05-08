
    $("header button").click(function() {
        $("form").slideDown() // faz o formulario que estava escondido aparecer na parte de baixo
    })

    $("#cancelar").click(function(){
        $("form").slideUp() /// essa funçao recolhe o formulario quando é apertado o botao cancelar
    })

    $("form").on("submit", function(e) {
        e.preventDefault()
        const enderecoNovaImagem = $("#endereco-nova-imagem").val()
        console.log(enderecoNovaImagem)
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem)
        $(`<div class="overlay-imag-link">
        <a href="${enderecoNovaImagem}" target="_blank" title= "Ver imagem em tamanho real">
        Ver imagem em tamanho real </a> 
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1000)
        $("#endereco-nova-imagem").val("")

    })
