const cells = [...document.querySelectorAll("#cell")]
let turnX = true
let messageBox = document.getElementById("message-box")
messageBox.textContent = 'Current Player is "X"'
let winningMessage = document.getElementById("winning-msg")
let resetBtn = document.getElementById("btn")
const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (turnX) {
            cell.textContent = "X"
            cell.classList.add("bg-yellow-300")
            cell.disabled = true
            turnX = false
            btn.classList.remove("hidden")
            checkWinner()
        } else {
            cell.textContent = "O"
            cell.classList.add("bg-green-300")
            cell.disabled = true
            turnX = true
            checkWinner()
        }
        message()
    })
});

const message = () => {
    if (turnX) {
        messageBox.textContent = 'Current Player is "X"'
    } else {
        messageBox.textContent = 'Current Player is "O"'
    }
}

const disableCells = () => {
    cells.forEach(cell => {
        cell.disabled = true
    })
}

const enableCells = () => {
    cells.forEach(cell => {
        cell.disabled = false
        cell.textContent = ""
        cell.classList.remove("bg-yellow-300")
        cell.classList.remove("bg-green-300")
    })
}

const showWinner = (winner) => {
    winningMessage.textContent = `Player ${winner} Wins`
    disableCells()
}

const checkWinner = () => {
    let hasWin = false
    winningPatterns.forEach(pattern => {
        let firstCell = cells[pattern[0]].textContent
        let secondCell = cells[pattern[1]].textContent
        let thirdCell = cells[pattern[2]].textContent

        if (firstCell != "" && secondCell != "" && thirdCell != "" && firstCell === secondCell && secondCell === thirdCell) {
            hasWin = true
            return showWinner(firstCell)
        }
    })

    if (!hasWin) {
        const allCells = [...cells].every((cell) => cell.textContent !== "")
        if (allCells) {
            return winningMessage.textContent = 'Match Draw!'
        }
    }
}

const resetGame = () => {
    turnX = true
    winningMessage.textContent = ""
    messageBox.textContent = ""
    btn.classList.add("hidden")
    enableCells()
}

resetBtn.addEventListener("click", resetGame)
// console.log(checkWinner())