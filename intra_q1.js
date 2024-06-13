var div = document.getElementById("div")
var field = document.getElementById("field")
var envoyer = document.getElementById("envoyer")
var effacer = document.getElementById("effacer")
var client = document.getElementById("client")

// document.addEventListener("click", () => {
//     alert("Veuillez soumettre le formulaire")
// })

// div.addEventListener("click", (e) => {
//     e.stopPropagation()
// })

// ou ????

div.addEventListener("click", () => {
    alert("Veuillez soumettre le formulaire")
})

///////////////////////////

field.addEventListener("click", (e) => {
    e.stopPropagation()
})

envoyer.addEventListener("click", (e) => {
    e.stopPropagation()
})

effacer.addEventListener("click", (e) => {
    e.stopPropagation()
})

client.addEventListener("click", (e) => {
    e.stopPropagation()
})