/*
1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página. */
//  ./assets/magic-1.gift ruta al asset
let enlaces = document.querySelectorAll("a");
for(let i=0; i < enlaces.length; i++){
    enlaces[i].addEventListener("click",function(event){
        event.preventDefault();
    });
};
//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
    //2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.
let imagenes = document.querySelectorAll("img");
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click",function(event){
    imagenes[i].src = "./assets/magic-1.gif";    
    })
};
   // 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
   let parrafos = document.querySelectorAll("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", function() {
        parrafos[i].style.color = "pink";
        parrafos[i].style.backgroundColor = "purple";
    });
};
    //2.3 Bloques de `article` o `section`: Cambia el color de fondo. 
let article = document.querySelectorAll("article");
let secction = document.querySelectorAll("section");
let articulos = document.querySelectorAll("article");

for (let i = 0; i < articulos.length; i++) {
    articulos[i].addEventListener("click", function() {
        articulos[i].style.backgroundColor = "lightblue";
    });
}
let secciones = document.querySelectorAll("section");

for (let i = 0; i < secciones.length; i++) {
    secciones[i].addEventListener("click", function() {
        secciones[i].style.backgroundColor = "orange";
    });
}
/*3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
    3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.*/
    for (let i=0; i<imagenes.length; i++) {    
        let imagenOriginal = imagenes[i].src;
    imagenes[i].addEventListener("mouseover",function(){
            imagenes[i].src="./assets/abracadabra.gif";
        });
        imagenes[i].addEventListener("mouseout",function(){     imagenes[i].src = imagenOriginal;

        });
    };

  //  3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i = 0; i < parrafos.length; i++) {

    let colorOriginal = parrafos[i].style.color;
    let fondoOriginal = parrafos[i].style.backgroundColor;

    parrafos[i].addEventListener("mouseover", function() {
        parrafos[i].style.color = "blue";
        parrafos[i].style.backgroundColor = "pink";
    });

    parrafos[i].addEventListener("mouseout", function() {
        parrafos[i].style.color = colorOriginal;
        parrafos[i].style.backgroundColor = fondoOriginal;
    });

}
  //  3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo. 
  for (let i=0; i< article.length; i++){
        let articleOriginal = article[i].style.backgroundColor;
    
        article[i].addEventListener("mouseover", function(){
            article[i].style.backgroundColor = "grey";
        });
        article[i].addEventListener("mouseout", function(){
            article[i].style.backgroundColor = articleOriginal;
        });
  };
for(let i= 0; i< secciones.length; i++){
         let sectionOriginal = secciones[i].style.backgroundColor;
         secciones[i].addEventListener("mouseover",function(){
            secciones[i].style.backgroundColor = "blue";
         });
         secciones[i].addEventListener("mouseout",function(){     secciones[i].style.backgroundColor = sectionOriginal;

         });
};
//4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

let colores = ["red", "blue", "green", "orange"];

function getRandom(array) {
    let indice = Math.floor(Math.random() * array.length);
    return array[indice];
};
let frutas = ["manzana", "pera", "plátano"];
console.log(getRandom(frutas));
/*5. Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores. */
function getRandom(array) {
    let indice = Math.floor(Math.random() * array.length);
    return array[indice];
};
let colores1 = ["#6C63FF", "#F4A7BB", "#FFD166", "#06D6A0"];
//Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.

// Apartado 6: GIF aleatorios
let gifs = [
    "./assets/magic-4.gif",
    "./assets/magic-6.gif"
];

// Seleccionar párrafos e imágenes del HTML
let parrafos1 = document.querySelectorAll("p");
let imagenes1 = document.querySelectorAll("img");

// Evento click para cambiar el fondo de los párrafos
for (let i = 0; i < parrafos.length; i++) {
    parrafos1[i].addEventListener("click", function() {
        parrafos1[i].style.backgroundColor = getRandom(colores1);
    });
}
// Evento click para cambiar las imágenes
for (let i = 0; i < imagenes.length; i++) {
    imagenes1[i].addEventListener("click", function() {
        imagenes1[i].src = getRandom(gifs);
    });
};