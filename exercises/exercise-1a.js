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


// Exercise 1a: Complete the rest of the diamond object
// Add any values you like, but make sure they're the right type!

/**
 * @type {Mineral}
 */
export const diamond = {
  id: 'diamond',
  // TODO: Add the rest of the properties
}
