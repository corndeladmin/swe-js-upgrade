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
 * Checks if a given upgrade is already owned by the player
 * A player owns an upgrade if its `id` is in the player's `upgrades` array
 * @example
 * const player = {
 *   upgrades: ['bigger_storage'],
 * }
 * const biggerStorage = {
 *   id: 'bigger_storage',
 * }
 * const evenBiggerStorage = {
 *   id: 'even_bigger_storage',
 * }
 * isUpgradeOwned(player, biggerStorage) // returns true
 * isUpgradeOwned(player, evenBiggerStorage) // returns false
 *
 * @param {Player} player - The player object
 * @param {Upgrade} upgrade - The upgrade object
 * @returns {boolean} Whether the upgrade is available
 */
export function isUpgradeOwned(player, upgrade) {
  return player.upgrades.includes(upgrade.id)
}
