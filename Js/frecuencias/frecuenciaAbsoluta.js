function frecuenciaAbsoluta(data, limites) {

    // Inicializamos un array para almacenar la frecuencia absoluta de cada intervalo
    const frecuenciaAbsoluta = Array(limites.length).fill(0);

    // Recorremos la lista de números y contamos la frecuencia absoluta de cada intervalo
    data.forEach(numero => {
        for (let i = 0; i < limites.length; i++) {
            if (numero >= limites[i] && numero < limites[i + 1]) {
                frecuenciaAbsoluta[i]++;
                break; // Una vez que encontramos el intervalo correcto, salimos del bucle
            }
        }
    });

    let f = []
    for (let i = 0; i < limites.length - 1; i++) {
        f.push(frecuenciaAbsoluta[i])
    }

    return f
}

export default frecuenciaAbsoluta