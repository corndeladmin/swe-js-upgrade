import { strict as assert } from "node:assert"
import { diamond } from "../../exercises/exercise-1a.js"

describe("Exercise 1a: Create a mineral object", () => {
  it("should have all the required properties", () => {
    assert.strictEqual(typeof diamond, "object", "diamond should be an object")
    assert.strictEqual(
      typeof diamond.id,
      "string",
      "diamond.id should be a string",
    )
    assert.strictEqual(
      typeof diamond.name,
      "string",
      "diamond.name should be a string",
    )
    assert.strictEqual(
      typeof diamond.value,
      "number",
      "diamond.value should be a number",
    )
    assert.strictEqual(
      typeof diamond.distribution,
      "object",
      "diamond.distribution should be an object",
    )
    assert.strictEqual(
      typeof diamond.distribution.minDepth,
      "number",
      "diamond.distribution.minDepth should be a number",
    )
    assert.strictEqual(
      typeof diamond.distribution.maxDepth,
      "number",
      "diamond.distribution.maxDepth should be a number",
    )
    assert.strictEqual(
      typeof diamond.distribution.abundance,
      "number",
      "diamond.distribution.abundance should be a number",
    )
    assert.strictEqual(
      typeof diamond.hardness,
      "number",
      "diamond.hardness should be a number",
    )
  })
})
