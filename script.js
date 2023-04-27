const titulo = document.querySelector("#titulo");
const imagen = document.querySelector("#imagen");
const enlace = document.querySelector("#enlace");
const cuerpoPagina = document.querySelector("body");
const h2NombreUsuario = document.querySelector("#usuario-nombre");

const IMG_1 = "https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg";
const IMG_2 = "https://www.latercera.com/resizer/mie1oDbErvg9fWAeh9vW-4wD1KY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/2Y453O4OFFCLNGLYSPOLZXKHDE.jpg";
const IMG_3 = "https://res.cloudinary.com/practicaldev/image/fetch/s--d6Pe6bTo--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://www.wallpapertip.com/wmimgs/83-838195_javascript-javascript-hd.png";

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/";
const ENLACE_2 = "https://discord.com/";
const ENLACE_3 = "https://es.stackoverflow.com/";

const IMG_TAM_1 = "200px";
const IMG_TAM_2 = "300px";
const IMG_TAM_3 = "450px";

const TXT_TAM_1 = "15px";
const TXT_TAM_2 = "20px";
const TXT_TAM_3 = "30px";

const TXT_FUENTE_1 = "monospace";
const TXT_FUENTE_2 = "cursive";
const TXT_FUENTE_3 = "fantasy";

const TXT_USUARIO_COLOR_1 = "red";
const TXT_USUARIO_COLOR_2 = "violet";
const TXT_USUARIO_COLOR_3 = "white";

let usuarioRecibido = prompt("Ingrese su nombre");
let opcionRecibida = prompt("Ingrese la opcion estetica 1, 2 o 3");

h2NombreUsuario.innerHTML = usuarioRecibido;

function modificarPagina(colorFondo, colorTexto, enlaceImg, enlacePagina, imgTam, txtTam, txtFuente, txtUsuarioColor){
    cuerpoPagina.style.backgroundColor = colorFondo;
    cuerpoPagina.style.color = colorTexto;
    imagen.src = enlaceImg;
    enlace.href = enlacePagina;

    imagen.style.width = imgTam;
    cuerpoPagina.style.fontSize = txtTam;
    cuerpoPagina.style.fontFamily = txtFuente;
    h2NombreUsuario.style.color = txtUsuarioColor;
 }

if (opcionRecibida == 1) {
     modificarPagina("orange", "black", IMG_1, ENLACE_1, IMG_TAM_1, TXT_TAM_1, TXT_FUENTE_1, TXT_USUARIO_COLOR_1);
} else if (opcionRecibida == 2) {
    imagen.style.width = IMG_TAM_2;
    modificarPagina("black", "white", IMG_2, ENLACE_2, IMG_TAM_2, TXT_TAM_2, TXT_FUENTE_2, TXT_USUARIO_COLOR_2);
} else if (opcionRecibida == 3) {
    imagen.style.width = IMG_TAM_3;
    modificarPagina("pink", "green", IMG_3, ENLACE_3, IMG_TAM_3, TXT_TAM_3, TXT_FUENTE_3, TXT_USUARIO_COLOR_3);
}