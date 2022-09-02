console.log("Enlazado a js")
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templatecard = document.getElementById('template-card').content
const templatefooter = document.getElementById('template-footer').content
const templatecarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
cards.addEventListener('click', e => {
    addCarrito(e)
})

const addCarrito = e => {
    //console.log(e)
    if(e.target.classList.contains('btn-dark')){
        console.log(e.target.parentElement)
    }
}

const fetchData = async () => {
    const productos = await fetch('../api/api.json')
    const data = await productos.json()
    pintarCards(data)
    //console.log(productos, data)
}

const pintarCards = data => {
    data.forEach(item => {
        //console.log(item)
        templatecard.querySelector('img').setAttribute("src", item.url) 
        templatecard.querySelector('h5').textContent = item.title 
        templatecard.querySelector('p').textContent = item.precio
        templatecard.querySelector('button').dataset.id = item.id

        const clone = templatecard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
