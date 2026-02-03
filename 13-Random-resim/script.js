const container = document.querySelector(".container")

const unsplashURL = 'https://picsum.photos/'

const rows = 12;

for(let i = 0; i < rows; i++){
    const img = document.createElement("img")
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 300
}

function getRandomSize(){
    return `${getRandomNumber()}/${getRandomNumber()}`
}