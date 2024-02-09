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
    console.table(state.getGame().player.inventory)
  }

  function listAvailableUpgrades(state) {
    console.table(state.getGame().getAvailableUpgrades())
  }

  function listOwnedUpgrades(state) {
    console.table(state.getGame().player.upgrades)
  }

  function saveGame(state) {
    const gameJson = Buffer.from(JSON.stringify(state.getGame().player)).toString('base64')
    console.log('Save this string to load your game later:')
    console.log(gameJson)
  }

  function sellMinerals(state) {
    console.table(state.getGame().sellInventory())
  }

  async function buyUpgrades(state) {
    const answer = await rl.question('Enter the id of the upgrade you want to buy: ')
    console.log(state.getGame().buyUpgrade(answer))
  }


  return {
    d: { description: '(D)escend', callback: descend },
    a: { description: '(A)scend', callback: ascend },
    m: { description: '(M)ine', callback: mine },
    i: { description: 'Check (i)nventory', callback: checkInventory },
    u: { description: 'List available (u)pgrades', callback: listAvailableUpgrades },
    o: { description: 'List (o)wned upgrades', callback: listOwnedUpgrades },
    v: { description: 'Sa(v)e game', callback: saveGame },
    s: { description: '(S)ell minerals', callback: sellMinerals },
    b: { description: '(B)uy upgrade', callback: buyUpgrades },
  }
}
