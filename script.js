let divs = document.querySelectorAll('.parent-div div')
let score = 0
let currentMole = null
let timeLeft = 30
let moleInterval
let timerInterval
let gameRunning = false

function randomMole() {

    divs.forEach(d => d.innerText = "")

    let randomIndex = Math.floor(Math.random() * divs.length)

    divs[randomIndex].innerText = "🐹"
    currentMole = randomIndex
}

function startGame() {

    if (gameRunning) return

    gameRunning = true
    score = 0
    timeLeft = 30
    document.getElementById("score").innerText = score
    document.getElementById("time").innerText = timeLeft
    document.getElementById("result").innerText = ""

    moleInterval = setInterval(randomMole, 800)

    timerInterval = setInterval(() => {
        timeLeft--
        document.getElementById("time").innerText = timeLeft

        if (timeLeft === 0) {
            endGame()
        }

    }, 1000)
}

function endGame() {
    clearInterval(moleInterval)
    clearInterval(timerInterval)
    divs.forEach(d => d.innerText = "")
    document.getElementById("result").innerText = "⏰ Game Over! Final Score: " + score
    gameRunning = false
}

divs.forEach((d, index) => {

    d.addEventListener('click', () => {

        if (!gameRunning) return

        if (index === currentMole) {
            score++
            document.getElementById("score").innerText = score
            d.innerText = ""
            currentMole = null
        }

    })

})
