const panels = document.querySelectorAll(".panel")

console.dir(panels)

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActivePanel()
    panel.classList.add("active")
  })
})

function removeActivePanel() {
  panels.forEach(panel => {
    panel.classList.remove("acitve")
  })
}
