import assert from "assert"
import { sortUpgrades } from "../../exercises/exercise-2a.js"

describe("sortUpgrades", () => {
  it("should sort upgrades by sortOrder from lowest to highest", () => {
    const upgrades = [
      {
        id: "1",
        name: "Upgrade 1",
        sortOrder: 3,
        description: "Description 1",
        value: 10,
        prerequisites: [],
        applyUpgrade: () => {},
      },
      {
        id: "2",
        name: "Upgrade 2",
        sortOrder: 1,
        description: "Description 2",
        value: 20,
        prerequisites: [],
        applyUpgrade: () => {},
      },
      {
        id: "3",
        name: "Upgrade 3",
        sortOrder: 2,
        description: "Description 3",
        value: 30,
        prerequisites: [],
        applyUpgrade: () => {},
      },
    ]

    const sortedUpgrades = sortUpgrades(upgrades)

    assert.deepStrictEqual(sortedUpgrades, [
      {
        id: "2",
        name: "Upgrade 2",
        sortOrder: 1,
        description: "Description 2",
        value: 20,
        prerequisites: [],
        applyUpgrade: () => {},
      },
      {
        id: "3",
        name: "Upgrade 3",
        sortOrder: 2,
        description: "Description 3",
        value: 30,
        prerequisites: [],
        applyUpgrade: () => {},
      },
      {
        id: "1",
        name: "Upgrade 1",
        sortOrder: 3,
        description: "Description 1",
        value: 10,
        prerequisites: [],
        applyUpgrade: () => {},
      },
    ])
  })
})
