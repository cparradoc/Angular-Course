/*
    ===== Código de TypeScript =====
*/

class Heroe {
    //alterEgo: string; //private - solo visible en esta clase
    //edad: number; //public - visible fuera de esta clase
    //nombreReal: string; //static - se puede acceder a su valor sin crear una instancia (Heroe.nombreReal)

    constructor(
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string
        ) {}
}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman);

