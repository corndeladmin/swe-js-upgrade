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
 * isUpgradeAvailable(player, biggerStorage) // returns true
 * isUpgradeAvailable(player, evenBiggerStorage) // returns false
 *
 * @param {Player} player - The player object
 * @param {Upgrade} upgrade - The upgrade object
 * @returns {boolean} Whether the upgrade is available
 */
function isUpgradeOwned(player, upgrade) {
  // TODO
}
