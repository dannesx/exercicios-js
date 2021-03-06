// Adicione a classe ativo a todos os itens do menu
const allMenu = document.querySelectorAll(".menu li")

allMenu.forEach((item)=>{
   item.classList.add("ativo")
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
allMenu.forEach((item)=>{
   item.classList.remove("ativo")
})
allMenu[0].classList.add("ativo")

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img")

imgs.forEach((item)=>{
   console.log(item.hasAttribute("alt")) 
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector("a[href^='https://']")
linkExterno.setAttribute("href", "https://github.com/dannesx")

