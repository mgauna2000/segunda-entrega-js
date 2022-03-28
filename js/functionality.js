//variables
const allContainerCart = document.querySelector('.container-products');

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
        image: product.querySelector('div img').src,
        title: product.querySelector('.product__title').textContent,
        price: product.querySelector('div span').textContent,
        id: product.querySelector('i').getAttribute('data-id'),
        amount: 1
    }
    console.log(infoProduct)
}