const btnDark = document.querySelector("#btnDark");
const html = document.querySelector("html");
const div_productos = document.querySelector(".productos");
const contador_carrito = document.querySelector("#contador-productos");
let product_count = 0;

btnDark.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark";
});

// Contador de carrito
let compras = [];

function agregar(prod) {
  compras.push(prod);
  actualizar();
}

function sacar(prod) {
  const indice = compras.indexOf(prod);
  compras.splice(indice, 1);
  actualizar();
}

function actualizar() {
  contador_carrito.innerText = compras.length;
}

// Fin de contador

class Producto {
  constructor(nombre, precio, imagen) {
    this.id = product_count++;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.#crear();
    this.#agregar_eventos();
  }

  #crear() {
    this.tags ='<div class="col-3">'+
      '<div class="card producto mx-3 my-3" style="width: 18rem; height:20rem">' +
      `<img src="${this.imagen}" class="card-img-top" style= "height: 168px" alt="...">` +
      '<div class="card-body">' +
      `<p class="card-text">${this.nombre}</p>` +
      `<p class="card-text">$${this.precio}</p>` +
      '<button class="btn btn-success">Añadir al carrito <i class="fa-solid fa-cart-shopping fa-l" style="color: #ffffff;"></i></button>' +
      "</div>" +
      "</div>"+
      "</div>";

    this.div = document.createElement("div");
    this.div.innerHTML = this.tags;
    div_productos.appendChild(this.div);
  }

  #agregar_eventos() {
    this.div.querySelector("button").addEventListener("click", () => {
      agregar(this);
      renderizarCompras();
    });
  }
}

// Funciones
function renderizarCompras() {
  offcanva.innerHTML = "";
  for (const c of compras) {
    const item = document.createElement("div");
    item.innerText = c.nombre + "  " + c.precio
    offcanva.appendChild(item);
  }
}

// Ejecuciones
var nombres_productos = [
    ["Hilux Cabina Doble DX 4x2", "14.318.000", "./img/hilux4x2.jpeg"],
    ["Jeep Gladiator Overland", "USD108.400", "./img/WhatsApp Image 2023-09-29 at 8.47.39 PM.jpeg"],
    ["Toyota Corolla 2023", "18.500.000", "./img/toyota-corolla-2023.jpg"],
    ["Ford Mustang GT", "USD45,000", "./img/critica-ford-mustang-gt-2020.jpg"],
    ["Honda Civic Sedan", "16.200.000", "./img/honda civic.jpeg"],
    ["Chevrolet Silverado 1500", "USD35,000", "./img/2024-chevrolet-silverado-1500-high-country-102-642dbddbe725d.jpg"],
    ["Nissan Altima", "15.500.000", "./img/2010-nissan-altima-sedan-review-car-and-driver-photo-300908-s-original.jpg"],
    ["Mercedes-Benz C-Class", "USD50,000", "./img/mercedes c-class.jpeg"],
    ["Volkswagen Golf GTI", "20.000.000", "./img/golf.jpg"],
    ["Audi Q5", "USD55,000", "./img/audi_q5_sportback_45_tfsi_quattro_s_line_15_067e04660a1906ba.jpg"],
    ["Mazda CX-5", "17.800.000", "./img/mazda-mexico-cx-5-vlp-versiones-signature-v1.png"],
    ["BMW 3 Series", "USD48,000", "./img/bmw 3 series.jpeg"],
    ["Hyundai Sonata", "16.500.000", "./img/hyundai sonata.jpeg"],
    ["Tesla Model 3", "USD42,000", "./img/tesla model 3.jpeg"],
    ["Subaru Outback", "19.000.000", "./img/ALL_NEW_OUTBACK-touring-ice_silver-front.png"],
    ["Lexus RX 350", "USD52,000", "./img/lexus.jpg"],
    ["Kia Sportage", "15.000.000", "./img/kia sporetage.jpeg"],
    ["Porsche 911", "USD110,000", "./img/porsche 911.jpeg"],
    ["Ford Escape", "16.800.000", "./img/ford escape.jpeg"],
    ["Chevrolet Camaro", "USD38,000", "./img/camaro.jpeg"],
    ["Acura MDX", "USD60,000", "./img/acura mdx.jpeg"]
    // Puedes seguir añadiendo más elementos según tus necesidades
  ];

const productos = [];
for (const p of nombres_productos) {
  const n_prod = new Producto(p[0], p[1], p[2]);
  productos.push(n_prod);
}

// Botón de compras
const boton_compra = document.querySelector("#botoncompras");
boton_compra.addEventListener("click", () => {
  renderizarCompras();
});

// Offcanvas
const offcanva = document.querySelector(".offcanvas-body");
