const conteudo = document.getElementById('main')
const cores = ['#e74c3c', '#8e44ad', '#3498db','#e67e22', '#2ecc71']
const QUADRADOS = 500

for (let i=0; i < QUADRADOS ; i++)
{
    const quadrado = document.createElement('div')
    quadrado.classList.add('quadrado')

    conteudo.appendChild(quadrado)
}