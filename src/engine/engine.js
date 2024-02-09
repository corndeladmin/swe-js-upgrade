import { baseStats, minerals, upgrades } from '../config/index.js'

export function createGame(loadPlayer = {}) {
  const player = {
    money: 100,
    depth: 0,
    inventory: [],
    upgrades: [],
    ...loadPlayer
  }

  function getUpgradeById(upgradeId) {
    return upgrades.find(upgrade => upgrade.id === upgradeId)
  }

  function calculateUpgradedStats() {
    const calculatedStats = structuredClone(baseStats)
    player.upgrades.forEach(upgrade => getUpgradeById(upgrade).applyUpgrade(player, calculatedStats))
    return calculatedStats
  }

  function getMineralById(mineralId) {
    return minerals.find(mineral => mineral.id === mineralId)
  }

  function getAvailableMinerals() {
    return minerals.filter(mineral => 
      mineral.distribution.maxDepth >= player.depth &&
      mineral.distribution.minDepth <= player.depth
    )
  }

  function mineMinerals() {
    const availableMinerals = getAvailableMinerals()
    const stats = calculateUpgradedStats()
    const mineralsMined = []
    const mineralsTooHard = []
    const mineralsDropped = []

    ;[...Array(stats.mining.cycles)].forEach(_ => {
      const mineral = searchForMineral(availableMinerals)

      if (!mineral) { return }

      if (mineral.hardness > stats.drillHardness) {
        mineralsTooHard.push(mineral.id)
        return
      }

      mineralsMined.push(mineral.id)

      player.inventory.push(mineral.id)

      if (player.inventory.length > stats.inventorySize) {
        player.inventory.sort((a, b) => getMineralById(a).value - getMineralById(b).value)
        const cheapestMineral = player.inventory.shift()
        mineralsDropped.push(cheapestMineral)
      }
    })

    return { 
      availableMinerals: availableMinerals.map(mineral => mineral.id), 
      mineralsMined, 
      mineralsTooHard, 
      mineralsDropped 
    }
  }

  function searchForMineral(availableMinerals) {
    if (availableMinerals.length === 0) {
      return null
    }

    const stats = calculateUpgradedStats()
    
    if (Math.random() < stats.mining.chanceToFindMineral) {
      return null
    }

    const { mineralDistribution, sum } = availableMinerals.reduce((acc, mineral) => ({ 
      mineralDistribution: [
        ...acc.mineralDistribution, 
        { mineral, threshold: acc.sum + mineral.distribution.abundance }
      ],
      sum: acc.sum + mineral.distribution.abundance
    }), { mineralDistribution: [], sum: 0 })

    const luck = Math.random() * sum

    return mineralDistribution.find(mineral => luck < mineral.threshold).mineral
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

    const upgradesWithMetPrerequisites = unappliedUpgrades.filter(upgrade => 
      (upgrade.prerequisites || []).every(prerequisite => player.upgrades.includes(prerequisite))
    )

    return upgradesWithMetPrerequisites
  }

  function buyUpgrade(upgradeId) {
    const availableUpgrades = getAvailableUpgrades()
    const upgrade = availableUpgrades
      .find(upgrade => upgrade.id === upgradeId)
    if (!upgrade) { return null }
    if (player.money < upgrade.value) { return null }
    player.money -= upgrade.value
    player.upgrades.push(upgradeId)
    return upgrade
  }

  function descend(distance = 10) {
    const stats = calculateUpgradedStats()
    player.depth += distance

    player.depth = Math.min(player.depth, stats.maxDepth)

    return player.depth
  }

  function ascend(distance = 10) {
    player.depth -= distance

    player.depth = Math.max(player.depth, 0)

    return player.depth
  }

  return {
    player,
    calculateUpgradedStats,
    mineMinerals,
    sellInventory,
    getAvailableUpgrades,
    buyUpgrade,
    descend,
    ascend,
  }
}

export function gameWrapper() {
  let game = null

  function createNewGame() {
    game = createGame()
  }

  function loadGame(player) {
    game = createGame(player)
  }

  function getGame() {
    return game
  }

  return {
    createNewGame,
    loadGame,
    getGame
  }
}
