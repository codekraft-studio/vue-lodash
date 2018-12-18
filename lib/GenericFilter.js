import _ from 'lodash'

/**
 * Base function that create a filtering function based on a given name
 * the name should be an existing lodash method
 *
 * For questions regarding the possible methods please refer
 * to the official lodash documentation on their website
 * @see https://lodash.com/docs
 *
 * @param  {string} filterName The name of the lodash method
 * @return {Function}          A filtering function
 */
export default function(filterName) {
  const fn = _[filterName]
  if (!fn || typeof fn !== 'function') {
    throw new Error(`Invalid filter name ${filterName}`)
  }
  return function(...args) {
    args = Array.prototype.slice.call(args)
    const input = args.shift()
    if (!input) return
    if (fn.length === 1) {
      return fn(input)
    }
    return fn(input, ...args)
  }
}
