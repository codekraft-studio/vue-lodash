import lodash from 'lodash'
import GenericFilter from './GenericFilter'
import filters from './filters'

export default function install(Vue, options = {
  alias: false,
  filters: true,
  lodash: lodash
}) {

  // Register lodash to vue instance
  Vue.prototype[options.alias || '_'] = lodash

  if (!options.filters) return

  let f = filters

  if (Array.isArray(options.filters)) {
    f = lodash.reduce(f, (o, v, k) => {
      if (options.filters.includes(k)) {
        o[k] = v
      }
      return o
    }, {})
  }

  // Register global filters
  lodash(f)
    .values()
    .flatten()
    .forEach(filter => {
      Vue.filter(filter, GenericFilter(filter))
    })

}
