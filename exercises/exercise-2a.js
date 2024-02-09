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
 * Sorts the upgrades by sortOrder from lowest to highest
 * @example
 * // evenBiggerStorage has a higher sortOrder than biggerStorage
 * const upgrades = [evenBiggerStorage, biggerStorage]
 * sortUpgrades(upgrades) // returns [biggerStorage, evenBiggerStorage]
 *
 * @param {Array.<Upgrade>} upgrades - The upgrades to sort
 * @returns {Array.<Upgrade>} The sorted upgrades
 */
export function sortUpgrades(upgrades) {
  // TODO
}
