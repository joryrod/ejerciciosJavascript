// escribe tu respuesta acá
function contarRango(num1, num2) {
    let contador = 0;
    let i = num1 + 1;
    while (i < num2) {
      contador++;
      i++;
    }
    return contador;
  }
// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"