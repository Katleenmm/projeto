function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  //pegar a tag img
  const Image = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    Image.setAttribute("src", "./assets/avatar-light.png")
    //se tiver sem light mode, manter imagem normal
  } else {
    Image.setAttribute("src", "./assets/avatar.png.png")
  }
}
