/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const autor = 'Fulano';

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor: autorDetalle, anio} = detalles; //se le puede cambiar el nombre a la propiedad para que no choque o para simplificar la sintaxis

console.log('El volumen actual de: ' + volumen);
console.log('El segundo actual de: ' + segundo);
console.log('La canción actual es: ' + cancion);
console.log('El autor es: ' + autorDetalle);
console.log('La canción es del año : ' + anio);