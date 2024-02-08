export function titleActions(rl) {
  function newGame(gameEngine) {
    rl.question('Are you sure you want to start a new game?\ny/n: ', (answer) => {
      if (answer.match(/^y(es)?$/i)) {
        gameEngine.newGame()
      } 

      rl.prompt()
    })
  }

  function loadGame(gameEngine) {
    rl.question('Enter your saved game\nLoad game: ', (answer) => {
      const gameJson = Buffer.from(answer, 'base64').toString('ascii')
      try {
        const gameInfo = JSON.parse(gameJson)
        gameEngine.loadGame(gameInfo)
      } catch (error) {
        console.log('Loading game failed')
      }

      rl.prompt()
    })
  }

  return {
    n: { description: 'Start a (n)ew game', callback: newGame },
    l: { description: '(L)oad a game', callback: loadGame },
  }
}
