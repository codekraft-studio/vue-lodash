import lodash from 'lodash'
import GenericFilter from './GenericFilter'

const filtersList = [

  // array
  'chunk',
  'compact',
  'concat',
  'difference',
  'differenceBy',
  'differenceWith',
  'dropRight',
  'dropRightWhile',
  'dropWhile',
  'fill',
  'first',
  'flatten',
  'flattenDeep',
  'flattenDepth',
  'fromPairs',
  'head',
  'initial',
  'intersection',
  'intersectionBy',
  'intersectionWith',
  'join',
  'last',
  'nth',
  'pull',
  'pullAll',
  'pullAllBy',
  'pullAllWith',
  'pullAt',
  'remove',
  'reverse',
  'slice',
  'sortedUniq',
  'sortedUniqBy',
  'tail',
  'take',
  'takeRight',
  'takeRightWhile',
  'takeWhile',
  'union',
  'unionBy',
  'unionWith',
  'uniq',
  'uniqBy',
  'uniqWith',
  'without',
  'xor',
  'xorWith',

  // collection
  'countBy',
  'groupBy',
  'keyBy',
  'orderBy',
  'sample',
  'sampleSize',
  'shuffle',
  'size',
  'some',
  'sortBy',

  // Lang
  'clone',
  'cloneDeep',
  'toArray',
  'toNumber',
  'toString',

  // Math
  'ceil',
  'floor',
  'max',
  'min',
  'round',
  'sum',

  // Object
  'has',
  'keys',
  'toPairs',
  'values',

  // String
  'camelCase',
  'capitalize',
  'deburr',
  'escape',
  'escapeRegExp',
  'kebabCase',
  'lowerCase',
  'lowerFirst',
  'pad',
  'padEnd',
  'padStart',
  'repeat',
  'replace',
  'snakeCase',
  'split',
  'startCase',
  'toLower',
  'toUpper',
  'trim',
  'trimEnd',
  'trimStart',
  'truncate',
  'unescape',
  'upperCase',
  'upperFirst',
  'words',

]

export default function install(Vue, options = {
  name: false,
  globalFilters: true
}) {
  Vue.prototype[options.name || '_'] = lodash
  if (!options.globalFilters) return
  filtersList.forEach(name => {
    Vue.filter(name, GenericFilter(name))
  })
}
