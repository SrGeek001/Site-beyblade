let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItensOnClick('next')
btnBack.onclick = () => moveItensOnClick('back')
 
function moveItensOnClick(type) {
    let listItens = document.querySelectorAll('.list .list-item')
    let thumbItens = document.querySelectorAll('.thumb .thumb-itens')

    if(type === 'next'){
        list.appendChild(listItens[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add('next')
    } else {
        list.prepend(listItens[listItens.length -1])
        thumb.prepend(thumbItens[listItens.length -1])
        container.classList.add('back')
    }
        
        setTimeout(() => {
            container.classList.remove('next')
            container.classList.remove('back')
        }, 500)

}