

function enviarWhatsApp(event) {
    event.preventDefault()

    const nomeInput = document.getElementById("nome")
    const mensagemInput = document.getElementById("mensagem")
    const telefone = "5592985020805"

    const texto = `Olá! me chamo ${nomeInput.value}, ${mensagemInput.value}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')

    // limpa os campos
    nomeInput.value = ''
    mensagemInput.value = ''
}

const btnMenu = document.getElementById('menu-hamburguer')
const menu = document.getElementById('menu')

// abre e fecha no botão
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})

// FECHA o menu ao clicar em um link
const linksMenu = menu.querySelectorAll('a')

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo')
    })
})


