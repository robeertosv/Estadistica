import frecuenciaAbsoluta from "./frecuenciaAbsoluta.js";
import frecuenciaAbsolutaAcumulada from "./frecuenciaAbsolutaAcumulada.js";
import frecuenciasRelativas from "./frecuenciasRelativas.js";

const labels = ['Cordelia', 'Luna.1999U2', 'Ofelia', 'Luna-1986U10', 'Luna-999U1', 'Bianca', 'Rosalinda', 'Desdémona', 'Calíbano', 'Crésida', 'Belinda', 'Julieta'];
const radius = [13, 15, 16, 20, 20, 22, 27, 29, 30, 33, 34, 42];

const data = [...radius];
const dataLen = data.length;

const rango = data[dataLen - 1] - data[0];
const limites = [10, 20, 30, 40, 50];
const grupos = [[10,20], [20,30], [30,40], [40,50]]
const amplitud = limites[0][1] - limites[0][0]

let marcas = [];

for (let i = 0; i < grupos.length; i++) {
    marcas.push((grupos[i][1] + grupos[i][0]) / 2);
}

let fi = frecuenciaAbsoluta(data, limites)
let fri = frecuenciaAbsolutaAcumulada(data, limites)
console.log(`Agrupados por radio:`, grupos)
console.log(`Marca de clase:`, marcas)
console.log(`Frecuencia Absoluta: ${fi}`)
console.log(`Frecuencia Absoluta Acumulada: ${fri}`) 
console.log(`Frecuencia Relativa: ${frecuenciasRelativas(fi, dataLen)}`)
console.log(`Frecuencia Relativa Acumulada: ${frecuenciasRelativas(fri, dataLen)}`)