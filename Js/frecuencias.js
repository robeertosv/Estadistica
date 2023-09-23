const labels = ['Cordelia', 'Luna.1999U2', 'Ofelia', 'Luna-1986U10', 'Luna-999U1', 'Bianca', 'Rosalinda', 'Desdémona', 'Calíbano', 'Crésida', 'Belinda', 'Julieta'];
const radius = [13, 15, 16, 20, 20, 22, 27, 29, 30, 33, 34, 42];

const data = [...radius];
const dataLen = data.length;

const rango = data[dataLen - 1] - data[0];
const limites = [[10, 20], [20, 30], [30, 40], [40, 50]];
const amplitud = limites[0][1] - limites[0][0]

let marcas = [];

for (let i = 0; i < limites.length; i++) {
    marcas.push((limites[i][1] + limites[i][0]) / 2);
}

console.log(rango)