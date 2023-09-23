const frecuenciasRelativas = (abs, dataLen) => {
    let f = []
    abs.forEach(freq => {
        let r = freq / dataLen
        r = r.toFixed(2)
        f.push(r)
    });

    return f
}

export default frecuenciasRelativas