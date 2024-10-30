// escribe tu respuesta acá
function imprimirArreglo(...arreglo){
    for(const elemento of arreglo){
        console.log(elemento);
    }
}
// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo