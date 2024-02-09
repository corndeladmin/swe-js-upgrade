export function gameActions(rl) {
  function descend(state) {
    const newDepth = state.getGame().descend()

    console.log(`You descended to ${newDepth} ft. below the surface.`)
  }

  function ascend(state) {
    const newDepth = state.getGame().ascend()

    console.log(`You ascended to ${newDepth} ft. below the surface.`)
  }

  function mine(state) {
    const mineStats = state.getGame().mineMinerals()

    console.table(mineStats)
  }

  function checkInventory(state) {
    const inventory = state.getGame().player.inventory

    console.table(inventory)
  }

  function listAvailableUpgrades(state) {
    const availableUpgrades = state.getGame().getAvailableUpgrades()

    console.table(availableUpgrades)
  }

  function listOwnedUpgrades(state) {
    const ownedUpgrades = state.getGame().player.upgrades

    console.table(ownedUpgrades)
  }

  function saveGame(state) {
    const gameJson = Buffer.from(
      JSON.stringify(state.getGame().player),
    ).toString("base64")

    console.log("Save this string to load your game later:")
    console.log(gameJson)
  }

  function sellMinerals(state) {
    const sellDetails = state.getGame().sellInventory()

    console.table(sellDetails)
  }

  async function buyUpgrades(state) {
    const answer = await rl.question(
      "Enter the id of the upgrade you want to buy: ",
    )
    const upgradeBought = state.getGame().buyUpgrade(answer)

    console.log(JSON.stringify(upgradeBought) || "Unknown upgrade id")
  }

  return {
    d: { description: "(D)escend", callback: descend },
    a: { description: "(A)scend", callback: ascend },
    m: { description: "(M)ine", callback: mine },
    i: { description: "Check (i)nventory", callback: checkInventory },
    u: {
      description: "List available (u)pgrades",
      callback: listAvailableUpgrades,
    },
    o: { description: "List (o)wned upgrades", callback: listOwnedUpgrades },
    v: { description: "Sa(v)e game", callback: saveGame },
    s: { description: "(S)ell minerals", callback: sellMinerals },
    b: { description: "(B)uy upgrade", callback: buyUpgrades },
  }
}
