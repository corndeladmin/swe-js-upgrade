import { strict as assert } from "node:assert"
import { isUpgradeOwned } from "../../exercises/exercise-3.js"

describe("isUpgradeOwned", () => {
  it("should return true if the upgrade is owned by the player", () => {
    const player = {
      upgrades: ["jet_boots"],
    }
    const jetBoots = {
      id: "jet_boots",
    }
    assert.strictEqual(isUpgradeOwned(player, jetBoots), true)
  })

  it("should return false if the upgrade is not owned by the player", () => {
    const player = {
      upgrades: ["jet_boots"],
    }
    const turnipLauncher = {
      id: "turnip_launcher",
    }
    assert.strictEqual(isUpgradeOwned(player, turnipLauncher), false)
  })
})
