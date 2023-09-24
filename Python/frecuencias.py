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

#Calcula la frecuencia absoluta
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

#Calcular la frecuencia absoluta acumulada
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

def frecuenciasRelativas(abs , dataL):
    f= []
    for freq in abs:
        r = freq / dataL
        r = format(round(r, 2))
        f.append(r)
        
    return f

fi = frecuenciaAbsoluta(data, limites)
Fi = frecuenciaAbsolutaAcumulada(data, limites)

print(f"Agrupadas por radio:", grupos)
print(f"Marca de clase", marcas)
print(f"Frecuencia Absoluta: {fi}")
print(f"Frecuencia Absoluta Acumulada: {Fi}")
print(f"Frecuencia Relativa: {frecuenciasRelativas(fi, dataL)}")
print(f"Frecuencia Relativa Acumulada: {frecuenciasRelativas(Fi, dataL)}")