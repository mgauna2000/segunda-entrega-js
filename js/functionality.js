//variables
let allContainerCart = document.querySelector('.container-products');
let containerBuyCart = document.querySelector('.card-items');

let buyThings = [];

//funciones
loadEventListeners();
function loadEventListeners() {
    allContainerCart.addEventListener('click', addProduct);
}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('product__icon')) {
        //el parentElement agarre al elemento padre de lo que elegimos
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function readTheContent(product) {
    const infoProduct = {
        //tomamos los valores del producto seleccionado
        image: product.querySelector('div img').src,
        title: product.querySelector('.product__title').textContent,
        price: product.querySelector('div span').textContent,
        id: product.querySelector('i').getAttribute('data-id'),
        amount: 1
    }
    //hacemos una copia del arreglo previo y concatenamos el prodcuto
    buyThings = [...buyThings, infoProduct];
    loadHtml();
}

function loadHtml() {
    buyThings.forEach(product => {
        const {image, title, price, id, amount} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
        <img src="${image}" alt="">
                        <div class="item-content">
                            <h5>${title}</h5>
                            <h5 class="cart-price">${price}$</h5>
                            <h6>Amount: ${amount}</h6>
                        </div>
                        <span class="delete-product" data-id="${id}">X</span>
        `;
        containerBuyCart.appendChild(row);
    });
}