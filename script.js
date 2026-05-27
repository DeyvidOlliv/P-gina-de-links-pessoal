function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Dyd.jpeg")
  } else {
    img.setAttribute("src", "./assets/DydBlack.jpeg")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto do mayk brito sorrindo, usando óculos escuros e jaqueta preta, sem barba e fundo azul.",
    )
  } else {
    img.setAttribute(
      "alt",
      "foto do mayk brito sorrindo, usando óculos de grau e camisa preta, barba e fundo amarelo.",
    )
  }
}
