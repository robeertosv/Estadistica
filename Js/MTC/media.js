// Los cálculos están basados según las fórmulas vistas en la clase de Estadística

//import frecuenciaAbsoluta from '../frecuencias/frecuenciaAbsoluta.js'

const data = [13, 15, 16, 20, 20, 22, 27, 29, 30, 33, 34, 42, 47];

function media(data) {
    let sumatorio = 0;

    data.forEach(num => {
        sumatorio += num
    })

    let media = sumatorio / data.length

    return media
}

function moda(lista) {
  // Crear un objeto para llevar un registro de las frecuencias
  let frecuencias = {};

  // Recorrer la lista y contar las frecuencias
  for (let numero of lista) {
    if (frecuencias[numero]) {
      frecuencias[numero]++;
    } else {
      frecuencias[numero] = 1;
    }
  }

  // Encontrar el número con la frecuencia máxima
  let numeroMasRepetido = null;
  let frecuenciaMaxima = 0;

  for (let numero in frecuencias) {
    if (frecuencias[numero] > frecuenciaMaxima) {
      numeroMasRepetido = numero;
      frecuenciaMaxima = frecuencias[numero];
    }
  }

  return numeroMasRepetido;
}

function mediana(data) {
    //Comprobar si hay un numero de datos par o impar
    if(data.length % 2 == 0) {
        //Es par
        let Xn = data[(data.length / 2) - 1]
        let Xn1 = data[(data.length / 2)]
        return (Xn + Xn1) /2
    }else{
        //Es impar
        let Xn = data[(data.length - 1) /2]
        return Xn
    }
}

function fi(arr, numero) {
  let contador = 0;
  
  // Recorre el array y cuenta las ocurrencias del número
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numero) {
      contador++;
    }
  }
  
  return contador;
}

function varianza(data) {
    let dividendo = 0;
    for(let i = 0; i<data.length; i++){
        let numeroBuscado = data[i]

        if(data[i] == data[i-1]) {
            continue
        }

        dividendo += fi(data, numeroBuscado) * data[i]
    }

    let divisor = 0
    for(let i = 0; i<data.length; i++) {
        let numeroBuscado = data[i]

        if(data[i] == data[i-1]) {
            continue
        }

        divisor += fi(data, numeroBuscado)
    }

    return dividendo / divisor
}

function desviacionTipica(data) {
    return Math.sqrt(varianza(data))
}

function desviacionMedia(data) {
    let thisMedia = media(data)
    let dividendo = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i] == data[i-1]) {continue}

        dividendo += fi(data, data[i]) * Math.abs(data[i] - thisMedia)
    }

    let divisor = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i] == data[i-1]) {continue}

        divisor += fi(data, data[i])
    }

    return dividendo / divisor
}