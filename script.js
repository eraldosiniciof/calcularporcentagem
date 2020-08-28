const result = document.querySelector('#resultado')
let txtRef = document.querySelector('#number')
let txtPerc = document.querySelector('#percentage')

function porc() {
    let valorRef = parseFloat(txtRef.value)
    let valorPorc = parseFloat(txtPerc.value)
    result.innerHTML = `
    <strong>VALOR $ RELACIONADO A %</strong><br><br>
    Taxa: ${valorPorc.toFixed(2)}%<br>
    Valor: R$ ${valorRef.toFixed(2)}<br><br>
    Resultado: R$ ${((valorPorc / 100) * valorRef).toFixed(2)}`
}

function add() {
    let valorRef = parseFloat(txtRef.value)
    let valorPorc = parseFloat(txtPerc.value)
    result.innerHTML = `
    <strong>VALOR TOTAL SOMANDO COM A %</strong><br><br>
    Taxa: ${valorPorc.toFixed(2)}%<br>
    Valor: R$ ${valorRef.toFixed(2)}<br><br>
    Resultado: R$ ${(valorRef + (valorRef * (valorPorc / 100))).toFixed(2)}`
}

function des() {
    let valorRef = parseFloat(txtRef.value)
    let valorPorc = parseFloat(txtPerc.value)
    result.innerHTML = `
    <strong>VALOR COM DESCONTO DA %</strong><br><br>
    Taxa: ${valorPorc.toFixed(2)}%<br>
    Valor: R$ ${valorRef.toFixed(2)}<br><br>
    Resultado: R$ ${(valorRef - (valorRef * (valorPorc / 100))).toFixed(2)}`
}