const productoMangas = document.querySelectorAll('.product__icon');
const productoPops = document.querySelectorAll('.btn-compra');
const usuario = document.querySelector('.user');
const carrito = document.querySelector('.carrito');
const buscar = document.querySelector('.buscar');
const email = document.querySelector('.email');



let productos = [
  {
    nombre: "Shingeki No Kyojin",
    imagen: "./img/manga1.webp",
    precio: 8000,
  },
  {
    nombre: "Tokio Ghoul",
    imagen:"./img/manga2.jpg",
    precio: 6300,
  },
  {
    nombre: "Akame Ga Kill",
    imagen: "./img/manga3.webp",
    precio: 6300,
  },
  {
    nombre: "Naruto",
    imagen: "./img/manga4.webp",
    precio: 12000,
  },
  {
    nombre: "Bleach",
    imagen: "./img/manga5.webp",
    precio: 6300,
  },
  {
    nombre: "One Piece",
    imagen: "./img/manga6.webp",
    precio: 3400,
  },
  {
    nombre: "Evangelion",
    imagen: "./img/manga7.webp",
    precio: 3600,
  },
  {
    nombre: "Fairy tail",
    imagen: "./img/manga8.webp",
    precio: 6300,
  },
  {
    nombre: "Sailor Moon",
    imagen: "./img/manga9.webp",
    precio: 6300,
  },
  {
    nombre: "Fullmetal alchemist",
    imagen: "./img/manga10.webp",
    precio: 8000,
  }
];

const mostrarProductos = (productos) => {
  for (const producto of productos) {
    alert(
      `el producto es: ${producto.nombre} y su precio es: ${producto.precio}, categoria del producto: ${producto.categoria}`
    );
  }
};
// mostrarProductos(productos);

const agregarProducto = (productos) => {
  let nombreProducto = prompt("Nombre del producto");
  let precioProducto = parseFloat(prompt("Precio del producto"));
  let categoriaProducto = prompt("Categoria del producto");
  let stockProducto = parseFloat(prompt("Stock del producto"));

  productos.push({
    nombre: nombreProducto,
    precio: precioProducto,
    categoria: categoriaProducto,
    stock: stockProducto,
  });
  console.table(productos);
};
// agregarProducto(productos);

const filtrarProducto = (productos) => {
  let precioMinimo = parseFloat(prompt("Escribe el precio minimo que desea"));
  let precioMaximo = parseFloat(prompt("Escribe el precio maximo que desea"));

  const filtrar = productos.filter(
    (productos) => productos.precio >= precioMinimo && productos.precio <= precioMaximo
  );
  console.log(filtrar);
};
// filtrarProducto(productos);

const buscarPorCategorias = (productos) => {

  let elijaCategoria = prompt("Elija una de las categorias: manga, cuadro o figura de accion!")

  const productoCategoria = productos.map((productos) =>{
    if(elijaCategoria == "manga" && productos.categoria == "manga"){
        return productos.nombre;
    }else if(elijaCategoria == "cuadro" && productos.categoria == "cuadro"){
      return productos.nombre;
    }else if(elijaCategoria == "figura de accion" && productos.categoria == "figura de accion"){
      return productos.nombre;
    }
    else{
      return null;
    }
})
console.log(productoCategoria);
}
// buscarPorCategorias(productos)