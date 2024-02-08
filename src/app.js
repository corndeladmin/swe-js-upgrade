import * as readline from 'node:readline'
import { stdin, stdout } from 'node:process'
import { titleActions } from './cli/title.js'
import { gameActions } from './cli/game.js'
import { quitAction } from './cli/quit.js'

const rl = readline.createInterface({ 
  input: stdin, 
  output: stdout,
})

const gameEngine = {};

function getAvailableActions() {
  return gameEngine.isGameLoaded
    ? { ...gameActions(rl), ...quitAction(rl) }
    : { ...titleActions(rl), ...quitAction(rl) }
}

function getActionsPrompt() {
  const actions = getAvailableActions()
  const actionDescriptions = Object.keys(actions).map((key) => `${actions[key].description}`)
  return actionDescriptions.join('\n')
}

rl.setPrompt(`\nSelect an option:\n${getActionsPrompt()}\n> `)

console.log('Welcome to "Upgrade, upgrade, upgrade!"')
rl.prompt()

rl.on('line', (line) => {
  const selectedOption = line.trim().toLowerCase()[0]

  const selectedAction = getAvailableActions()[selectedOption]

  if (selectedAction) {
    selectedAction.callback(gameEngine)
  } else {
    console.log('Invalid option')
  }
  rl.prompt()
})

rl.on('close', () => {
  console.log('Goodbye!')
  process.exit(0)
})
