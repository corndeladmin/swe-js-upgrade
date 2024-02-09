import { strict as assert } from "assert"
import { getAbundance, setAbundance } from "../../exercises/exercise-1b.js"

const createMineral = () => ({
  id: "aurelionite",
  name: "aurelionite",
  value: 1000,
  distribution: {
    minDepth: 200,
    maxDepth: 300,
    abundance: 2,
  },
  hardness: 100,
})

describe("Exercise 1b", () => {
  describe("getAbundance", () => {
    it("should return the abundance of a mineral", () => {
      const mineral = createMineral()
      mineral.distribution.abundance = 2

      const abundance = getAbundance(mineral)

      assert.strictEqual(abundance, 10)
    })
  })

  describe("setAbundance", () => {
    it("should set the abundance of a mineral", () => {
      const mineral = createMineral()

      setAbundance(mineral, 80)

      assert.strictEqual(mineral.distribution.abundance, 80)
    })
  })
})
