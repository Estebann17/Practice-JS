
 const resultado = function(a, b, c) {
    console.log(a + b + c);
}
resultado(20, 30, 40); 

class Auto {
    constructor(numero, incremento) {
      this.numero = numero;
      this.incremento = incremento;
    }
}

const autoP = new Auto('Número de puertas:', 8);
const miCoche = new Auto('Se ha sumado una puerta al coche, ahora tiene:', 9)

let nuevaPuerta = 9; 
++nuevaPuerta;

console.log(autoP, miCoche);
console.log(`El numero de puertas ha incrementado a ${nuevaPuerta}`);

