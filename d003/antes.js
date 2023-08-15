function start(){
    let saida = document.getElementById('res')
    let n = Number(document.getElementById('num').value)

    if(Number.isInteger(n)) {
        let n1 = n-1 /* variavel antecessor*/
        let n2 = n+1 /* variavel sucessor*/
    
        saida.innerHTML = `<p><strong>O antecessor é ${n1} e o sucessor é ${n2}</strong></p>`
    } else {
        alert("O numero não é inteiro")
    }
}