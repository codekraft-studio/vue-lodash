import { createLocalVue } from '@vue/test-utils'
import VueLodash from '../../lib/index'
import GenericFilter from '../../lib/GenericFilter'

describe('Installation', () => {
  it('should add lodash to the Vue prototype', () => {
    const localVue = createLocalVue()
    localVue.use(VueLodash)
    expect(localVue.prototype._).toBeDefined()
    expect(typeof localVue.prototype._).toBe('function')
  })

  it('should allow for custom lodash name', () => {
    const localVue = createLocalVue()
    localVue.use(VueLodash, {
      alias: 'test'
    })
    expect(localVue.prototype.test).toBeDefined()
    expect(typeof localVue.prototype.test).toBe('function')
  })

  it('should register global filters by default', () => {
    const localVue = createLocalVue()
    localVue.use(VueLodash)
    expect(Object.keys(localVue.sealedOptions.filters).length).not.toBe(0)
  })

  it('should disable the global filters registration', () => {
    const localVue = createLocalVue()
    localVue.use(VueLodash, {
      filters: false
    })
    expect(Object.keys(localVue.sealedOptions.filters).length).toBe(0)
  })

  it('should customize the filters registration', () => {
    const localVue = createLocalVue()
    localVue.use(VueLodash, {
      filters: ['array', 'math']
    })
    const loadedFilterNames = Object.keys(localVue.options.filters)

    // contained in array and math group
    expect(loadedFilterNames).toContain('chunk')
    expect(loadedFilterNames).toContain('round')

    // contained in others groups
    expect(loadedFilterNames).not.toContain('clone')
    expect(loadedFilterNames).not.toContain('escape')
  })
})

describe('GenericFilter', () => {
  it('create a filter function', () => {
    expect(typeof GenericFilter('capitalize')).toBe('function')
  })

  it('throw an error lodash method does not exist', () => {
    expect(() => {
      GenericFilter('---')
    }).toThrow()
  })

  it('return if input if undefined', () => {
    const fn = GenericFilter('fill')
    expect(fn()).toBeUndefined()
  })

  it('accept multiple arguments', () => {
    const fn = GenericFilter('chunk')
    expect(fn(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
  })

  it('refuse arguments if lodash does not support', () => {
    const fn = GenericFilter('upperCase')
    expect(fn('test', 'more')).toEqual('TEST')
  })
})
