import config from '../config/index.js'

export function createGame(gameSettings, player = {}) {
  const { minerals, upgrades, baseStats } = gameSettings

  const player = {
    money: 100,
    depth: 0,
    inventory: [],
    upgrades: [],
    ...player
  }

  function calculateUpgradedStats() {
    const calculatedStats = structuredClone(baseStats)
    player.upgrades.forEach(upgrade => upgrade.applyUpgrade(player, calculatedStats))
    return calculatedStats
  }

  function mineMinerals() {
    const luck = Math.random()

    return mineralsGathered
  }

  function sellInventory() {
    const soldInventory = player.inventory.map(getMineralById) 

    const inventoryValue = soldInventory.reduce((acc, mineral) => acc + mineral.value, 0)

    player.inventory = []
    player.money += inventoryValue
    return {
      soldInventory,
      inventoryValue,
      money: player.money
    }
  }
  
  function getAvailableUpgrades() {
    const unappliedUpgrades = upgrades.filter(upgrade => !player.upgrades.includes(upgrade.id))

    const upgradesWithMetPrerequisites = unappliedUpgrades.filter(upgrade => upgrade.prerequisites.every(prerequisite => player.upgrades.includes(prerequisite)))

    return upgradesWithMetPrerequisites
  }

  function buyUpgrade(upgradeId) {
    const availableUpgrades = getAvailableUpgrades()
    const upgrade = availableUpgrades
      .find(upgrade => upgrade.id === upgradeId)
    if (!upgrade) { return null }
    player.money -= upgrade.value
    player.upgrades.push(upgradeId)
    return upgrade
  }

  function descend(distance = 10) {
    player.depth += distance

    player.depth = Math.max(player.depth, )
  }

  function ascend(distance = 10) {
    player.depth -= distance
  }

  return {
    player,
    mineMinerals,
    sellInventory,
    getAvailableUpgrades,
    buyUpgrade,
    descend,
    ascend,
  }
}

export function gameEngine() {
  const game = null

  function newGame() {
    game = createGame(gameSettings)
  }

  function loadGame(gameInfo) {
    game = createGame(gameSettings, gameInfo.player)
  }

  function saveGame() {
    return JSON.stringify(game.player)
  }

  return {
    newGame,
    loadGame,
    saveGame,
    game
  }
}
