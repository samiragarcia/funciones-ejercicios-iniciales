const titulo = document.querySelector("#titulo");
const imagen = document.querySelector("#imagen");
const enlace = document.querySelector("#enlace");
const cuerpoPagina = document.querySelector("body");

const IMG_1 = "https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg";
const IMG_2 = "https://www.latercera.com/resizer/mie1oDbErvg9fWAeh9vW-4wD1KY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/2Y453O4OFFCLNGLYSPOLZXKHDE.jpg";
const IMG_3 = "https://res.cloudinary.com/practicaldev/image/fetch/s--d6Pe6bTo--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://www.wallpapertip.com/wmimgs/83-838195_javascript-javascript-hd.png";

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/";
const ENLACE_2 = "https://discord.com/";
const ENLACE_3 = "https://es.stackoverflow.com/";

let opcionRecibida = prompt("Ingrese la opcion estetica 1, 2 o 3");

function modificarPagina(colorFondo, colorTexto, enlaceImg, enlacePagina){
    cuerpoPagina.style.backgroundColor = colorFondo;
    cuerpoPagina.style.color = colorTexto;
    imagen.src = enlaceImg;
    enlace.href = enlacePagina;
}

if (opcionRecibida == 1) {
     modificarPagina("orange", "black", IMG_1, ENLACE_1);
} else if (opcionRecibida == 2) {
    modificarPagina("black", "white", IMG_2, ENLACE_2);
} else if (opcionRecibida == 3) {
    cuerpoPagina.style.backgroundColor = "pink";
    cuerpoPagina.style.color = "green";
    imagen.src = IMG_3;
    enlace.href = ENLACE_3;
    modificarPagina("pink", "green", IMG_3, ENLACE_3);
}