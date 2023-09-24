data = [13, 15, 16, 20, 20, 22, 27, 29, 30, 33, 34, 42]
dataL = data.__len__()

rango = data[dataL - 1] - data[0]
limites = [10, 20, 30, 40, 50]
grupos = [[10, 20], [20, 30], [30, 40], [40, 50]]
amplitud = grupos[0][1] - grupos[0][0]

marcas = []

r = grupos.__len__()

for i in range(r):
    marcas.append((grupos[i][1] + grupos[i][0]) / 2)

# Creación de funciones


def frecuenciaAbsoluta(data, lim):
    llim = len(lim)
    frecuenciaAbsoluta = [0] * llim

    for numero in data:
        for i in range(llim):
            if (numero >= lim[i] and numero < lim[i+1]):
                frecuenciaAbsoluta[i] += 1
                break

    f = []

    for i in range(llim - 1):
        f.append(frecuenciaAbsoluta[i])

    return f


def frecuenciaAbsolutaAcumulada(data, lim):
    llim = len(lim)
    frecuenciaAbsoluta = [0] * llim

    for numero in data:
        for i in range(llim):
            if (numero >= lim[i] and numero < lim[i+1]):
                frecuenciaAbsoluta[i] += 1
                break

    frecuenciaAbsolutaAcumulada = []
    acumulada = 0

    for frecuencia in frecuenciaAbsoluta:
        acumulada += frecuencia
        frecuenciaAbsolutaAcumulada.append(acumulada)

    f = []
    
    for i in range(llim -1):
        f.append(frecuenciaAbsolutaAcumulada[i])
    
    return f