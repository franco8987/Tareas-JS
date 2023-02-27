function createCard(event) {
    console.log(event);
    let col = document.createElement("div")
    col.classList.add("col")
    let card = document.createElement("div")
    card.classList.add("card")
    let img = document.createElement("img")
    img.classList.add("card-img-top", "rounded-circle")
    img.setAttribute("src", event.image)
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerHTML = event.name
    let cardText = document.createElement("p")
    cardText.classList.add("card-text")
    cardText.innerHTML = event.description

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)

    card.appendChild(img)
    card.appendChild(cardBody)

    col.appendChild(card)

    return col
}

let contenedorCards = document.getElementById("contenedorCards")

let currentDate = new Date(data.currentDate)
console.log(currentDate);

data.events.forEach(function (event) {
    console.log(event);

    let eventDate = new Date(event.date)
    console.log(event.date + " formateado: " + eventDate);

    if (currentDate > eventDate) {
        let card1 = createCard(event)
        contenedorCards.appendChild(card1)
    }
})
