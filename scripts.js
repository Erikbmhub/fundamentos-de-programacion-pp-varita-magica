/*
1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página. */
//  ./assets/magic-1.gift ruta al asset
let enlaces = document.querySelectorAll("a");
for(let i=0; i < enlaces.length; i++){
    enlaces[i].addEventListener("click",function(event){
        event.preventDefault();
    });
};
/*2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
    2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.
    2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    2.3 Bloques de `article` o `section`: Cambia el color de fondo. */