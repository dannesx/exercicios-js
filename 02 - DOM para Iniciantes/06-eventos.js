// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll("a[href^='#']")

function handleLinks (event){
   linksInternos.forEach((link)=>{
      link.classList.remove("ativo")
   })
   this.classList.toggle("ativo")
}

linksInternos.forEach((link)=>{
   link.addEventListener("click", handleLinks)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll("body *")

function handleClick(event){
   console.log(this);
}

allElements.forEach((element) =>{
   element.addEventListener("click", handleClick)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const allElementsRemove = document.querySelectorAll("body *")

function handleClickRemove(event){
   console.log(this.remove());
}

allElements.forEach((element) =>{
   element.addEventListener("click", handleClickRemove)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const html = document.querySelector("html")

function handleKeyboard(event){
   if(event.key === "t"){
      html.classList.toggle("texto-maior")
   }
}

window.addEventListener("keydown", handleKeyboard)