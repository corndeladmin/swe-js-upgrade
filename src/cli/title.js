export function titleActions(rl) {
  function newGame(state) {
    state.createNewGame()
    rl.prompt()
  }

  async function loadGame(state) {
    const saveGameString = await rl.question(
      "Enter your saved game\nLoad game: ",
    )
    const gameJson = Buffer.from(saveGameString, "base64").toString("ascii")
    try {
      const gameInfo = JSON.parse(gameJson)
      state.loadGame(gameInfo)
    } catch (error) {
      console.log("Loading game failed")
    }
  }

  return {
    n: { description: "Start a (n)ew game", callback: newGame },
    l: { description: "(L)oad a game", callback: loadGame },
  }
}
