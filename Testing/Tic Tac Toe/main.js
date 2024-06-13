var playerPlaying = 'x'

init = () => {
    var grid = Array.from(document.getElementsByTagName("td"))
    let afficheur = document.getElementById('afficheur')
    
    grid.forEach(cell => {
        cell.addEventListener('click', () => {
            click(cell)
        })
    })

    console.log('initializing...')
    console.log(grid)
}

click = (cell) => {
    if (cell.innerText === '') {
        cell.innerText = playerPlaying
        playerPlaying = playerPlaying === 'x' ? 'o' : 'x'
    }
    
    if (checkForWinner(grid)) {
        afficheur.innerText = `Le joueur ${playerPlaying} a gagné!`
    }
}

checkForWinner = (grid) => {
    winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    winningCombination.forEach(row => {
        a = row[0]
        b = row[1]
        c = row[2]

        if (grid[a] === grid[b] && grid[a] === grid[c]) {
            return true
        }
    })
    return false
}




console.log("hello")
init()
// document.addEventListener("load", init)