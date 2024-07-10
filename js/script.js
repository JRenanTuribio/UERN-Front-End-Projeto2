
const botao_nav = document.getElementById('botaoNav')
const contrate_btn = document.querySelector('.ContrateBtn')
const botao_fechar = document.getElementById('fechar_form')

form_Block(botao_nav)
form_Block(contrate_btn)
form_none(botao_fechar)

//funções...
function form_Block (elemento_atual) {
    elemento_atual.addEventListener('click', function () {
        const form = document.querySelector('.form-container')
        form.style.display = 'block'
    })
}

function form_none (elemento_atual) {
    elemento_atual.addEventListener('click', function () {
    const form = document.querySelector('.form-container')
    form.style.display = 'none'
    })
}
