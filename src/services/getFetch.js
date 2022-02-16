const productos = [
  { id: 1, nombre: "Pan Dulce", precio: 390, foto: "images/pandulce.jpg" },
  { id: 2, nombre: "Dulce de Leche", precio: 480, foto: "images/dulce-de-leche.jpg" },
  { id: 3, nombre: "Chocolate", precio: 39, foto: "images/chocolate-semi-amargo.jpg" },
  { id: 4, nombre: "Cacao", precio: 286, foto: "images/cacao.png" },
  { id: 5, nombre: "Budin", precio: 378, foto: "images/budin.jpg" }
];

const getFetch = new Promise((resolve, reject) => {
  const condicion = true
  if (condicion) {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  } else {
    setTimeout(() => {
      reject('404 not Found')
    }, 2000)
  }
})

export default getFetch;