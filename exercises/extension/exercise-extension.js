/**
 * Checks if an upgrade is available for a player to buy.
 * An upgrade is available to buy if the player has the prerequisite upgrade, and the player doesn't already own the upgrade
 * @example
 * const player = {
 *   upgrades: ['bigger_storage'],
 * }
 * const biggerStorage = {
 *   id: 'bigger_storage',
 * }
 * const evenBiggerStorage = {
 *   id: 'even_bigger_storage',
 *   prerequisite: ['bigger_storage'],
 * }
 * const mineralCompression = {
 *   id: 'mineral_compression',
 *   prerequisite: ['even_bigger_storage'],
 * }
 * 
 * // The player already owns this upgrade
 * // So it returns false
 * isUpgradeAvailable(player, biggerStorage)
 * 
 * // The player does not have the prerequisite upgrade
 * // So it returns false
 * isUpgradeAvailable(player, mineralCompression) // returns false
 * 
 * // The player does not own the upgrade 
 * // and has the prerequisite upgrade
 * // So it returns true
 * isUpgradeAvailable(player, evenBiggerStorage)
 *
 * @param {Player} player - The player object
 * @param {Upgrade} upgrade - The upgrade object
 * @returns {boolean} Whether the upgrade is available
 */
export function isUpgradeAvailable(player, upgrade) {
  // TODO
}

/**
 * Gets the available upgrades for a player
 * @example
 * const player = {
 *   money: 100,
 *   depth: 0,
 *   inventory: [],
 *   upgrades: ['bigger_storage'],
 * }
 * const upgrades = [
 *   biggerStorage,
 *   evenBiggerStorage,
 *   mineralCompression,
 *   harderDrills,
 *   reinforcedChassis,
 * ]
 * getAvailableUpgrades(player, upgrades)
 * // returns [evenBiggerStorage, harderDrills, reinforcedChassis]
 * 
 * @param {Player} player - The player object
 * @param {Array.<Upgrade>} upgrades - The full list of upgrades
 * @returns {Array.<Upgrade>} The available upgrades
 */
export function getAvailableUpgrades(player, upgrades) {
  // TODO
}
