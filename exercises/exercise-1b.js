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
 * Gets the abundance of a mineral
 * @example
 * getAbundance(copper) // returns 10
 * 
 * @param {Mineral} mineral - The mineral id
 * @returns {number} The abundance of the mineral
 */
export function getAbundance(mineral) {
  // TODO
}


/**
 * Sets the abundance of a mineral
 * @example
 * setAbundance(copper, 20)
 * // copper.distribution.abundance is now 20
 * 
 * @param {Mineral} mineral - The mineral id
 */
export function setAbundance(mineral, value) {
  // TODO
}
