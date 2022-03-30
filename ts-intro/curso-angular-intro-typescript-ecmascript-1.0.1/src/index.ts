/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b
}

//primero van los parámetros obligatorio, luego los opcionales y luego los que tienen un valor por defecto
function multiplicar( numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultadoMult = multiplicar(5, 10); //da 10 porque el del medio es opcional y no se está usando

const resultado = sumar(3, 5);


const resultadoFlecha = sumarFlecha(3, 5);



console.log(resultado);
console.log(resultadoFlecha);