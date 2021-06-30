// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll("img")
console.log(allImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const allImgBeginImagem = document.querySelectorAll(".grid-section img[src^='img/imagem']")
console.log(allImgBeginImagem);

// Selecione todos os links internos (onde o href começa com #)
const allLinks = document.querySelectorAll("[href^='#']")
console.log(allLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2IntoAnimaisDescricao = document.querySelector(".animais-descricao h2")
console.log(firstH2IntoAnimaisDescricao.innerText);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p")
console.log(paragrafos[paragrafos.length - 1]);