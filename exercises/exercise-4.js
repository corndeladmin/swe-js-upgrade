/**
 * @typedef Player
 * @type {object}
 * @property {number} money - The amount of money the player has
 * @property {number} depth - The depth the player is at
 * @property {Array.<string>} inventory - The player's inventory
 * @property {Array.<string>} upgrades - The upgrades the player has
 */

/**
 * @typedef Mineral
 * @type {object}
 * @property {string} id - The id used to uniquely identify the mineral
 * @property {string} name - The name of the mineral
 * @property {number} value - The value of the mineral
 * @property {Object} distribution - The distribution of the mineral
 * @property {number} distribution.minDepth - The minimum depth where the mineral can be found
 * @property {number} distribution.maxDepth - The maximum depth where the mineral can be found
 * @property {number} distribution.abundance - The abundance of the mineral
 * @property {number} hardness - The strength required to mine this mineral
 *
 * @example
 * const exampleMineral = {
 *   id: 'copper',
 *   name: 'copper ore',
 *   value: 24,
 *   distribution: {
 *     minDepth: 10,
 *     maxDepth: 60,
 *     abundance: 10,
 *   },
 *   hardness: 5,
 * }
 */

/**
 * Gets the value of a player's inventory
 * @example
 * const player = {
 *   inventory: ['copper', 'copper', 'iron'],
 * }
 * const minerals = [
 *   {
 *     id: 'copper',
 *     value: 5,
 *   },
 *   {
 *     id; 'iron',
 *     value: 20,
 *   }
 * ]
 * // returns 5 + 5 + 20 = 30
 * valueInventory(player, minerals)
 * 
 * @param {Player} player
 * @param {Array.<Mineral>} minerals
 */
export function valueInventory(player, minerals) {
  const inventoryMinerals = player.inventory.map(mineralId => minerals.find(mineral => mineral.id === mineralId))
  const inventoryMineralValues = inventoryMinerals.map(mineral => mineral.value)
  return inventoryMineralValues.reduce((acc, value) => acc + value, 0)
}