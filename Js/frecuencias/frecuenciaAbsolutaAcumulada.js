function frecuenciaAbsolutaAcumulada(numeros, limites) {
    const frecuenciaAbsoluta = Array(limites.length).fill(0);

    // Recorremos la lista de números y contamos la frecuencia absoluta de cada intervalo
    numeros.forEach(numero => {
        for (let i = 0; i < limites.length; i++) {
            if (numero >= limites[i] && numero < limites[i + 1]) {
                frecuenciaAbsoluta[i]++;
                break; // Una vez que encontramos el intervalo correcto, salimos del bucle
            }
        }
    });

    // Calculamos la frecuencia absoluta acumulada
    const frecuenciaAbsolutaAcumulada = [];
    let acumulada = 0;
    frecuenciaAbsoluta.forEach(frecuencia => {
        acumulada += frecuencia;
        frecuenciaAbsolutaAcumulada.push(acumulada);
    });

    let f = []
    // Mostramos la frecuencia absoluta acumulada en la consola
    for (let i = 0; i < limites.length - 1; i++) {
        f.push(frecuenciaAbsolutaAcumulada[i]);
    }

    return f
}

export default frecuenciaAbsolutaAcumulada