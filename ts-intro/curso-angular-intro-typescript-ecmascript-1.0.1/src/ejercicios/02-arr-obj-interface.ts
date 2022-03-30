/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Couner', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //campo opcional
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Couner', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);