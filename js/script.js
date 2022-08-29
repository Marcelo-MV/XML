

//Chamando função do Jquery Ajax que lê o arquivo XML
$(function() {
    $.ajax({
        type: 'GET',
        //Chamando arquivo XMl
        url: './dados/dataset.xml',
        dataType: 'xml',
        success: function(xml) {
            $(xml).find('dog').each(function() {
                let raca = $(this).find('raca').text();
                let nome = $(this).find('nome').text();
                let descricao = $(this).find('descricao').text();
                let img = $(this).find('foto').text();
                let video = $(this).find('video').text();
                let racaTratada = raca.replace(/[^\w/\s]/gi,'').replace(/\s/g, '')

                console.log (racaTratada)
               if (img != ""){ $("#cards").append(`
               <div class= "card">
                    <img class="imagem ${racaTratada}"src="${img}">
                    <div class= "descricao">
                        <h1>${nome}</h1>
                        <p>${descricao}</p>
                    </div>
                </div>
                
                `)}
                
            });
        }
    });
});