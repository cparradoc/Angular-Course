/*
    ===== Código de TypeScript =====
*/

//Un decorador no es más que una función que expande una clase añadiendo funcionalidades especiales

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    };
  }


@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase);