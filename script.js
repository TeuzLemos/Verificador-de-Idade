function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os valores digitados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.style.width = '360px'
        img.style.height = '340px'
        img.style.borderRadius = '100%'
        img.style.padding = '10px'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/homem-criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/mulher-criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}  