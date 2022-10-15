function executar () {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Complete os dados')
    }  else{
        resultado.innerHTML ='Contando:'
        let i = Number (inicio.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        if (p == 0) {
            p=1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
              resultado.innerHTML += `${c} \u{1F449}`
            }
          } else {
            for (let c = i; c >= f; c -= p) {
              resultado.innerHTML += `${c} \u{1F449}`
            }
          }
          resultado.innerHTML += `\u{1F3C1}`
      
        }
      
      }