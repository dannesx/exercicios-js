// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img")
console.log(img.offsetTop)

// Retorne a soma da largura de todas as imagens
const allImg = document.querySelectorAll("img")
let somaWidth = 0
allImg.forEach((item)=>{
   const imgWidth = item.getBoundingClientRect().width
   somaWidth += imgWidth
})

console.log(somaWidth);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a")

links.forEach((item)=>{
   const linkWidth = item.getBoundingClientRect().width
   const linkHeight = item.getBoundingClientRect().height

   if (linkWidth > 48 && linkHeight > 48) console.log("Tem um tamanho ideal para mobile");
   else console.log("Não tem um tamanho ideal para mobile");
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia("(max-width: 720px)").matches
const menu = document.querySelector(".menu")

if(browser){
   menu.classList.add("menu-mobile")
}