import math
data = [13, 15, 16, 20, 20, 22, 27, 29, 30, 33, 34, 42, 47]


def media(data):
    sumatorio = 0

    for num in data:
        sumatorio += num

    media = sumatorio / len(data)

    return media


def moda(data):
    frecuencias = {}

    for numero in data:
        if numero in frecuencias:
            frecuencias[numero] += 1
        else:
            frecuencias[numero] = 1

    numeroMasRepetido = None
    frecuenciaMaxima = 0

    for numero in frecuencias:
        if (frecuencias[numero] > frecuenciaMaxima):
            numeroMasRepetido = numero
            frecuenciaMaxima = frecuencias[numero]

    return numeroMasRepetido


def mediana(data):
    if (len(data) % 2 == 0):
        Xn = data[(len(data) / 2) - 1]
        Xn1 = data[(len(data) / 2)]
        return (Xn + Xn1) / 2
    else:
        Xn = data[(len(data) - 1) / 2]
        return Xn


def fi(arr, num):
    contador = 0

    for i in range(len(arr)):
        if (arr[i] == num):
            contador += 1

    return contador


def varianza(data):
    dividendo = 0
    divisor = 0

    for i in range(len(data)):
        if (data[i] == data[i-1]):
            continue

        dividendo += fi(data, data[i]) * data[i]
        divisor += fi(data, data[i])

    return dividendo / divisor


def desviacionTipica(data):
    return math.sqrt(varianza(data))


def desviacionMedia(data):
    thisMedia = media(data)
    dividendo = 0
    divisor = 0

    for i in range(len(data)):
        if (data[i] == data[i-1]):
            continue

        dividendo += fi(data, data[i]) * abs(data[i] - thisMedia)
        divisor += fi(data, data[i])

    return dividendo / divisor