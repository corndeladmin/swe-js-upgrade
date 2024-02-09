import * as readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'
import { gameWrapper } from './engine/engine.js'
import { gameActions } from './cli/game.js'
import { quitAction } from './cli/quit.js'
import { titleActions } from './cli/title.js'

const rl = readline.createInterface({ 
  input: stdin, 
  output: stdout,
})

const state = gameWrapper()

rl.on('close', () => {
  console.log('Goodbye!')
  process.exit(0)
})

console.log('Welcome to "Upgrade, upgrade, upgrade!"')

while (true) {
  const input = await rl.question(getActionsPrompt(state)) 
  const selectedOption = input.trim().toLowerCase()[0]

  const selectedAction = getAvailableActions()[selectedOption]

  console.clear()

  if (selectedAction) {
    await selectedAction.callback(state)
  } else {
    console.log('Invalid option')
  }
}

function getAvailableActions() {
  return state.getGame()
    ? { ...gameActions(rl), ...quitAction(rl) }
    : { ...titleActions(rl), ...quitAction(rl) }
}

function getActionsPrompt() {
  const actions = getAvailableActions(state)
  const actionDescriptions = Object.keys(actions).map((key) => `${actions[key].description}`)
  return `
Player status: ${JSON.stringify(state.getGame()?.player)}
Player stats: ${JSON.stringify(state.getGame()?.calculateUpgradedStats())}

${actionDescriptions.join('\n')}
Choose an option: `
}

