export function gameActions(rl) {

  return {
    d: { description: '(D)escend', callback: descend },
    a: { description: '(A)scend', callback: ascend },
    m: { description: '(M)ine', callback: mine },
    i: { description: 'Check (i)nventory', callback: checkInventory },
    u: { description: 'List available (u)pgrades', callback: listUpgrades },
    v: { description: 'Sa(v)e game', callback: saveGame },
    s: { description: '(S)ell minerals', callback: sellMinerals },
    b: { description: '(B)uy upgrades', callback: buyUpgrades },
  }
}
