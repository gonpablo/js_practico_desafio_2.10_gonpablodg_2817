/*
*Crear un archivo HTML que contenga:
-H1.
-p.
-div vacío.
-inputs de tipo text, password, email, number, checkbox.

*Asignar un id a cada elemento.
*Capturar cada elemento en una variable.
*Hacer un console.dir() de cada elemento capturado y revisar en el navegador qué devuelve y que cambia cuando modificamos los elementos
(Checkbox tildado o destildado, inputs vacíos o con contenido).
*/

// Capturamos los elementos
const title = document.getElementById("title");
const text = document.getElementById("text");
const containerPrimary = document.getElementById("container-primary");
const firstname = document.getElementById("firstname");
const age = document.getElementById("age");
const emailPrimary = document.getElementById("email-primary");
const checkOption1 = document.getElementById("option-1");
const checkOption2 = document.getElementById("option-2");
const checkOption3 = document.getElementById("option-3");

// Los mostramos en consola
console.dir(title);
console.dir(text);
console.dir(containerPrimary);
console.dir(firstname);
console.dir(age);
console.dir(emailPrimary);
console.dir(checkOption1);
console.dir(checkOption2);
console.dir(checkOption3);