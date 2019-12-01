# vue-lodash

> Lodash integration and filters for Vue

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![License][license-image]][license-url]

## Installation

Download the project using your favourite package manager.

```
npm install @codekraft-studio/vue-lodash
```

Than load the plugin using Vue in your application.

```js
import Vue from 'vue'
import VueLodash from '@codekraft-studio/vue-lodash'

Vue.use(VueLodash)
```

You can customize the plugin installation using the [options](#options) described below.

## Usage

The plugin will install lodash globally in your Vue instance `Vue._`, it will
be accessible from everywhere even inside your templates scope:

```html
<li v-for="n in _.uniq([2, 4, 4, 6, 10, 1, 3, 1, 8, 6])">{{n}}</li>
```

Once you have installed the project and setup correctly you should be able
to use almost all of the lodash methods as filters, for example:

```html
<p>{{ description | capitalize }}</p>
```

You can also chain them to obtain more complex results:

```html
<p>{{ description | capitalize | truncate({ length: 30 }) }}</p>
```

All the filters can be used as shown in the official lodash documentation, be sure to skip the first parameter which is the value since is injected from the application.

---

## Options

#### alias

Type: `string`

The alias string used during the plugin installation for registering __lodash__ in Vue prototype, default to `_`.

#### filters

Type: `boolean | array`

Dedice when or which filters should be registered globally during plugin installation. By default the plugin will install all the available filters, but you can disable all of them passing `false` or choose which filters group to add when using an array of strings.

```js
// load all filters
Vue.use(VueLodash, {
  filters: true
})

// load only filters in lang group
Vue.use(VueLodash, {
  filters: ['lang']
})
```

The filter groups mirror the [official documentation groups](https://lodash.com/docs/).

---

## License

Released with [MIT License](./LICENSE) © [codekraft-studio](https://github.com/codekraft-studio)


[npm-image]: https://badge.fury.io/js/%40codekraft-studio%2Fvue-lodash.svg
[npm-url]: https://npmjs.org/package/@codekraft-studio/vue-lodash

[daviddm-image]: https://david-dm.org/codekraft-studio/vue-lodash.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/codekraft-studio/vue-lodash

[license-url]: https://github.com/codekraft-studio/vue-lodash/blob/master/LICENSE
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg