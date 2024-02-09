/**
 * @typedef Player
 * @type {object}
 * @property {number} money - The amount of money the player has
 * @property {number} depth - The depth the player is at
 * @property {Array.<string>} inventory - The player's inventory
 * @property {Array.<string>} upgrades - The upgrades the player has
 */
  
/**
 * @typedef Upgrade
 * @type {object}
 * @property {string} id - The id used to uniquely identify the upgrade
 * @property {string} name - The name of the upgrade
 * @property {number} sortOrder - The order in which the upgrade should be applied
 * @property {string} description - The description of the upgrade
 * @property {number} value - The value of the upgrade
 * @property {Array.<string>} prerequisites - The prerequisites required to apply the upgrade
 * @property {function} applyUpgrade - The function that applies the upgrade
 */

/**
 * Gets a list of 'id's for the upgrades that a player can afford
 * @example
 * const player = {
 *   money: 100,
 * }
 * const upgrades = [
 *   {
 *     id: 'bigger_storage',
 *     value: 50,
 *   },
 *   {
 *     id: 'even_bigger_storage',
 *     value: 100,
 *   },
 *   {
 *     id: 'mineral_compression',
 *     value: 200,
 *   },
 * ]
 * 
 * // returns ['bigger_storage', 'even_bigger_storage']
 * getAffordableUpgrades(player, upgrades)
 *
 * @param {Player} player
 * @param {Array.<Upgrade>} upgrades
 * @returns {Array.<string>} The upgrades the player can afford
 */
export function getAffordableUpgrades(player, upgrades) {
  // TODO
}
