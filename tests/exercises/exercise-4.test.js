import { strict as assert } from "node:assert"
import { valueInventory } from "../../exercises/exercise-4.js"

describe("valueInventory", () => {
  it("should calculate the value of a player's inventory correctly", () => {
    const player = {
      inventory: ["copper", "copper", "iron"],
    }
    const minerals = [
      {
        id: "copper",
        value: 5,
      },
      {
        id: "iron",
        value: 20,
      },
    ]
    const expectedValue = 5 + 5 + 20
    const actualValue = valueInventory(player, minerals)
    assert.strictEqual(actualValue, expectedValue)
  })
})
