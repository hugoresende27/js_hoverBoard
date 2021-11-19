const conteudo = document.getElementById('main')
const cores = ['#e74c3c', '#8e44ad', '#3498db','#409C32','#e67e22', '#2ecc71','#265C1D','#BDD9BF','#412234'] //array de cores em hexadecimal
const QUADRADOS = 500       //numero de quadrados

for (let i=0; i < QUADRADOS ; i++)      //loop para criar quadrados
{
    const quadrado = document.createElement('div')//criar as divs 
    quadrado.classList.add('quadrado')//adicionar as classes quadrado às divs

    quadrado.addEventListener('mouseover', () => setCor(quadrado))      //função aplicada ao EventListener, mouseover vai chamar a função setCor e mouseout vai removerCor
    quadrado.addEventListener('mouseout', () => removerCor(quadrado))

    conteudo.appendChild(quadrado)//append no main dos quadrados
}

///////////////////////////////////////////////////////////
function setCor(elemento){
    //console.log("in")
    const cor = getRandomCor()
    //console.log(cor)
    elemento.style.background = cor
    elemento.style.boxShadow = `0 0 2px ${cor}, 0 0 10px ${cor}`
}

function removerCor(elemento){
   //console.log("out")
    elemento.style.background = '#1d1d1d'
    elemento.style.boxShadow = `0 0 2px #000`
}

function getRandomCor(){
    return cores[Math.floor(Math.random() * cores.length)]
}